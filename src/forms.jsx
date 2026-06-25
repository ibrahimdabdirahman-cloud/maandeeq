// Reservation + WhatsApp order modals
const { useState: useStateM } = React;

function Modal({ open, onClose, title, eyebrow, children }) {
  if (!open) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__bg" onClick={onClose} />
      <div className="modal__card">
        <button className="modal__close" onClick={onClose} aria-label="Close"><Icon.Close width="18" height="18" /></button>
        <div className="modal__eyebrow">{eyebrow}</div>
        <h3 className="modal__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function ReservationForm({ onClose }) {
  const [f, setF] = useStateM({ name: "", phone: "", date: "", time: "19:00", guests: "2", notes: "" });
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi Maandeeq, I'd like to reserve a table.\n\nName: ${f.name}\nPhone: ${f.phone}\nDate: ${f.date}\nTime: ${f.time}\nGuests: ${f.guests}\nNotes: ${f.notes || "—"}`;
    window.open(`https://wa.me/${window.SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  return (
    <form className="form" onSubmit={submit}>
      <p className="form__lede">We'll confirm by WhatsApp. For same-day bookings please call us directly.</p>
      <div className="form__grid">
        <label className="field"><span>Full name</span>
          <input required value={f.name} onChange={set("name")} placeholder="Your name" />
        </label>
        <label className="field"><span>Phone</span>
          <input required value={f.phone} onChange={set("phone")} placeholder="07…" />
        </label>
        <label className="field"><span>Date</span>
          <input required type="date" value={f.date} onChange={set("date")} />
        </label>
        <label className="field"><span>Time</span>
          <input required type="time" value={f.time} onChange={set("time")} />
        </label>
        <label className="field field--full"><span>Guests</span>
          <div className="chipgroup">
            {["2","3","4","5","6","7","8+"].map((n) => (
              <button type="button" key={n} className={`chip ${f.guests === n ? "is-on" : ""}`} onClick={() => setF((s)=>({...s, guests:n}))}>{n}</button>
            ))}
          </div>
        </label>
        <label className="field field--full"><span>Special requests</span>
          <textarea rows="3" value={f.notes} onChange={set("notes")} placeholder="Highchair, allergies, occasion…" />
        </label>
      </div>
      <div className="form__actions">
        <button type="button" className="btn btn--ghost" onClick={onClose}>Cancel</button>
        <button type="submit" className="btn btn--gold">Send via WhatsApp <Icon.Arrow width="16" height="16" /></button>
      </div>
    </form>
  );
}

function OrderForm({ cart, setCart, onClose }) {
  const entries = Object.entries(cart).filter(([, q]) => q > 0);
  const total = entries.reduce((s, [k, q]) => {
    const item = window.MENU_DATA.flatMap((c) => c.items).find((i) => i.name === k);
    return s + (item ? parseFloat(item.price) * q : 0);
  }, 0);
  const submit = () => {
    let lines = entries.map(([k, q]) => `• ${q}× ${k}`).join("\n");
    if (!lines) lines = "(I'd like to chat about an order)";
    const msg = `Hi Maandeeq, I'd like to place an order.\n\n${lines}\n\nEstimated total: £${total.toFixed(2)}\n\nPlease confirm availability and pickup time.`;
    window.open(`https://wa.me/${window.SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  return (
    <div className="orderform">
      <p className="form__lede">Build your order — we'll confirm price & timing on WhatsApp before you commit.</p>
      {entries.length === 0 ? (
        <div className="orderform__empty">
          <p>Your basket is empty.</p>
          <a className="btn btn--ghost" href="#menu" onClick={onClose}>Browse the menu</a>
        </div>
      ) : (
        <ul className="orderform__list">
          {entries.map(([k, q]) => {
            const item = window.MENU_DATA.flatMap((c) => c.items).find((i) => i.name === k);
            if (!item) return null;
            return (
              <li key={k}>
                <div className="orderform__item">
                  <span className="orderform__name">{item.name}</span>
                  <span className="orderform__price">£{(parseFloat(item.price) * q).toFixed(2)}</span>
                </div>
                <div className="qty">
                  <button onClick={() => setCart((c) => ({ ...c, [k]: Math.max(0, (c[k] || 0) - 1) }))}>−</button>
                  <span>{q}</span>
                  <button onClick={() => setCart((c) => ({ ...c, [k]: (c[k] || 0) + 1 }))}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="orderform__total">
        <span>Estimated total</span>
        <strong>£{total.toFixed(2)}</strong>
      </div>
      <p className="form__hint">Prices and availability may change. We'll confirm before preparing your order.</p>
      <div className="form__actions">
        <button className="btn btn--ghost" onClick={onClose}>Keep browsing</button>
        <button className="btn btn--whats" onClick={submit}>
          <Icon.WhatsApp width="18" height="18" /> Send order on WhatsApp
        </button>
      </div>
    </div>
  );
}

function VIPForm() {
  const [f, setF] = useStateM({ name: "", phone: "", email: "" });
  const [done, setDone] = useStateM(false);
  const submit = (e) => {
    e.preventDefault();
    setDone(true);
  };
  if (done) return (
    <div className="vipform__done">
      <Icon.Star width="18" height="18" />
      <p>Welcome to the Maandeeq VIP list, {f.name.split(" ")[0] || "friend"}. We'll send you platter specials and seasonal menu drops first.</p>
    </div>
  );
  return (
    <form className="vipform" onSubmit={submit}>
      <input required placeholder="Your name" value={f.name} onChange={(e)=>setF(s=>({...s, name:e.target.value}))} />
      <input required type="email" placeholder="Email" value={f.email} onChange={(e)=>setF(s=>({...s, email:e.target.value}))} />
      <input required placeholder="Mobile (for offers)" value={f.phone} onChange={(e)=>setF(s=>({...s, phone:e.target.value}))} />
      <button className="btn btn--gold" type="submit">Join VIP List</button>
    </form>
  );
}

function CateringForm() {
  const [f, setF] = useStateM({ first:"", last:"", email:"", phone:"", date:"", time:"", servings:"20", type:"Family", notes:"" });
  const set = (k) => (e) => setF(s => ({ ...s, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi Maandeeq — catering enquiry.\n\nName: ${f.first} ${f.last}\nEmail: ${f.email}\nPhone: ${f.phone}\nDate / pickup: ${f.date} ${f.time}\nServings: ${f.servings}\nEvent type: ${f.type}\nNotes: ${f.notes || "—"}`;
    window.open(`https://wa.me/${window.SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  return (
    <form className="form form--cat" onSubmit={submit}>
      <div className="form__grid">
        <label className="field"><span>First name</span><input required value={f.first} onChange={set("first")} /></label>
        <label className="field"><span>Last name</span><input required value={f.last} onChange={set("last")} /></label>
        <label className="field"><span>Email</span><input required type="email" value={f.email} onChange={set("email")} /></label>
        <label className="field"><span>Phone</span><input required value={f.phone} onChange={set("phone")} /></label>
        <label className="field"><span>Desired date</span><input required type="date" value={f.date} onChange={set("date")} /></label>
        <label className="field"><span>Pickup / delivery time</span><input required type="time" value={f.time} onChange={set("time")} /></label>
        <label className="field"><span>Servings</span>
          <select value={f.servings} onChange={set("servings")}>
            {["10","20","30","50","75","100","150+"].map(n => <option key={n}>{n}</option>)}
          </select>
        </label>
        <label className="field"><span>Event type</span>
          <select value={f.type} onChange={set("type")}>
            {["Family gathering","Birthday","Aqiqah","Nikah","Corporate","Community","Other"].map(n => <option key={n}>{n}</option>)}
          </select>
        </label>
        <label className="field field--full"><span>Additional comments</span>
          <textarea rows="3" value={f.notes} onChange={set("notes")} placeholder="Dietary needs, delivery address, any details we should know…" />
        </label>
      </div>
      <div className="form__actions">
        <button className="btn btn--gold" type="submit">Request Catering Quote</button>
      </div>
    </form>
  );
}

window.Modal = Modal;
window.ReservationForm = ReservationForm;
window.OrderForm = OrderForm;
window.VIPForm = VIPForm;
window.CateringForm = CateringForm;
