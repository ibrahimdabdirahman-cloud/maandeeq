// Homepage sections + Menu page section
const { useState: useStateS, useMemo } = React;

function Hero({ onOrder, onReserve }) {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img src="assets/food-platter.webp" alt="Maandeeq family platter — slow-cooked lamb, suqaar, fresh bread and salad" />
        <div className="hero__scrim" />
      </div>
      <div className="hero__inner">
        <div className="hero__eyebrow">
          <span className="dot" />
          <span>Now open · Woolwich, South East London</span>
        </div>
        <h1 className="hero__title">
          <span>Authentic</span>
          <span className="hero__title-italic">Somali food</span>
          <span>in Woolwich.</span>
        </h1>
        <p className="hero__sub">
          Fresh food, generous platters, family meals, takeaway, catering and warm Somali hospitality in South East London.
        </p>
        <div className="hero__cta">
          <a className="btn btn--gold btn--lg" href="Menu.html">View Menu <Icon.Arrow width="16" height="16"/></a>
          <a className="btn btn--whats btn--lg" href="Order.html">
            <Icon.WhatsApp width="18" height="18" /> Order Online
          </a>
          <a className="btn btn--ghost-light btn--lg" href="Catering.html">Request Catering</a>
        </div>
        <div className="hero__strip">
          <div><strong>Halal</strong> · always</div>
          <span />
          <div><strong>Dine in</strong> · takeaway · catering</div>
          <span />
          <div><strong>Family platters</strong> from £29.99</div>
        </div>
      </div>
      <a className="hero__scroll" href="#welcome" aria-label="Scroll">
        <span /><span>SCROLL</span>
      </a>
    </section>
  );
}

function Welcome() {
  return (
    <section className="welcome" id="welcome">
      <div className="welcome__inner">
        <span className="eyebrow">— Soo dhowow</span>
        <h2 className="welcome__title">
          Welcome to <em>Maandeeq</em>. A table set for everyone.
        </h2>
        <p className="welcome__body">
          Maandeeq is built around Somali hospitality, generous portions and food made for sharing. From aromatic bariis and tender suqaar to sambuus, Somali tea and family platters — we bring the flavours of the Horn of Africa to Woolwich. A table set for everyone.
        </p>
        <div className="welcome__sig">
          <img src="assets/brand/logo-circle.png" alt="Maandeeq" />
          <div>
            <span>The Maandeeq family</span>
            <small>Woolwich · est. 2024</small>
          </div>
        </div>
      </div>
      <aside className="welcome__pattern" aria-hidden="true">
        <StarTile size={520} color="var(--camel)" opacity={0.14} />
      </aside>
    </section>
  );
}

function SignatureDishes({ onAdd }) {
  const cards = [
    { name: "Haniid Lamb", desc: "Slow-cooked lamb shank, rich Somali spices.", price: "12.99", img: "assets/food-platter.webp", crop:"center 35%" },
    { name: "Beef Suqaar", desc: "Tender beef, peppers, onions, potatoes.", price: "7.99", img: "assets/food-suqaar.webp", crop:"center 55%" },
    { name: "Sabayaad Breakfast", desc: "Flaky sabayaad, eggs, honey & sambusa.", price: "1.49", img: "assets/food-breakfast.webp", crop:"center 50%" },
    { name: "Somali Tea (Shaah)", desc: "Aromatic spiced black tea — house blend.", price: "1.49", img: "assets/food-drinks.webp", crop:"center 50%" },
  ];
  return (
    <section className="sigs" id="signatures">
      <header className="section__head">
        <span className="eyebrow">— Signatures</span>
        <h2>What people come back for.</h2>
        <p>Four plates that tell the Maandeeq story — pick one, or share the table.</p>
      </header>
      <div className="sigs__grid">
        {cards.map((c, i) => (
          <article className="sigcard" key={c.name} style={{ "--i": i }}>
            <div className="sigcard__media">
              <img src={c.img} alt={c.name} style={{ objectPosition: c.crop }} />
              <span className="sigcard__price">£{c.price}</span>
            </div>
            <div className="sigcard__body">
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <button className="linkish" onClick={() => onAdd(c.name === "Haniid Lamb" ? "Maandeeq Special — Haniid Lamb Shank / Shoulder" : c.name === "Sabayaad Breakfast" ? "Kimis Mayai (Malawaax)" : c.name === "Somali Tea (Shaah)" ? "Maandeeq's Special Tea (Shaah)" : c.name)}>
                Add to order <Icon.Plus width="14" height="14"/>
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="section__more" style={{textAlign:"center",marginTop:"32px"}}>
        <a className="btn btn--ghost" href="Menu.html">See the full menu <Icon.Arrow width="14" height="14"/></a>
      </div>
    </section>
  );
}

function Platters({ onOrder }) {
  const data = window.MENU_DATA.find((c) => c.id === "platters");
  return (
    <section className="platters" id="platters">
      <div className="platters__media">
        <img src="assets/food-platter.webp" alt="Family platter" />
        <div className="platters__patt" aria-hidden="true"><StarTile size={360} color="#F5EFE6" opacity={0.18} /></div>
      </div>
      <div className="platters__body">
        <span className="eyebrow eyebrow--light">— Family Platters</span>
        <h2 className="platters__title">Built for sharing. <em>Generous by default.</em></h2>
        <p className="platters__lede">Gather the family and share a generous Somali platter made for the table. Lamb shank, chicken steak and beef suqaar over fragrant Bariice rice or Baasto pasta with fresh salad. Perfect for weekends, celebrations, guests and community occasions.</p>
        <ul className="platters__list">
          {data.items.map((p, i) => (
            <li key={p.name}>
              <span className="platters__no">{String(i + 1).padStart(2, "0")}</span>
              <div className="platters__name">
                <strong>{p.name}</strong>
                <small>{p.desc}</small>
              </div>
              <span className="platters__price">£{p.price}</span>
            </li>
          ))}
        </ul>
        <div className="platters__cta">
          <a className="btn btn--gold" href="Order.html"><Icon.WhatsApp width="18" height="18"/> Order a platter</a>
          <a className="btn btn--ghost-light" href="Catering.html">Catering &amp; events →</a>
        </div>
      </div>
    </section>
  );
}

function MenuSection({ cart, setCart }) {
  const [active, setActive] = useStateS("main-course");
  const [filter, setFilter] = useStateS("all");
  const cats = window.MENU_DATA;
  const visible = cats.find((c) => c.id === active);
  const filtered = useMemo(() => {
    if (!visible) return [];
    return visible.items.filter((i) => {
      if (filter === "popular") return i.popular;
      if (filter === "veg") return i.veg;
      return true;
    });
  }, [visible, filter]);

  const inc = (name) => setCart((c) => ({ ...c, [name]: (c[name] || 0) + 1 }));
  const dec = (name) => setCart((c) => ({ ...c, [name]: Math.max(0, (c[name] || 0) - 1) }));

  return (
    <section className="menu" id="menu">
      <header className="menu__head">
        <span className="eyebrow">— The Menu</span>
        <h2>Eat well. <em>Eat together.</em></h2>
        <p>Prices and availability may change — please confirm when ordering.</p>
      </header>

      <div className="menu__tabs" role="tablist">
        {cats.map((c) => (
          <button key={c.id} role="tab" aria-selected={active === c.id} className={`menu__tab ${active === c.id ? "is-on" : ""}`} onClick={() => setActive(c.id)}>
            {c.title}
          </button>
        ))}
      </div>

      <div className="menu__filters">
        <button className={`pill ${filter==="all"?"is-on":""}`} onClick={()=>setFilter("all")}>All</button>
        <button className={`pill ${filter==="popular"?"is-on":""}`} onClick={()=>setFilter("popular")}><Icon.Flame width="12" height="12"/> Most loved</button>
        <button className={`pill ${filter==="veg"?"is-on":""}`} onClick={()=>setFilter("veg")}><Icon.Leaf width="12" height="12"/> Veggie</button>
      </div>

      {visible?.note && <p className="menu__note">{visible.note}</p>}

      <ul className="menu__list">
        {filtered.map((item) => {
          const q = cart[item.name] || 0;
          return (
            <li key={item.name} className={`menu__item ${q>0?"is-added":""}`}>
              <div className="menu__main">
                <h4>
                  {item.name}
                  {item.popular && <span className="tag tag--gold"><Icon.Flame width="10" height="10"/> Popular</span>}
                  {item.veg && <span className="tag tag--green"><Icon.Leaf width="10" height="10"/> Veggie</span>}
                </h4>
                <p>{item.desc}</p>
              </div>
              <div className="menu__leader" aria-hidden="true" />
              <div className="menu__right">
                <span className="menu__price">£{item.price}</span>
                {q === 0 ? (
                  <button className="menu__add" onClick={() => inc(item.name)} aria-label={`Add ${item.name}`}>
                    <Icon.Plus width="14" height="14"/> Add
                  </button>
                ) : (
                  <div className="qty qty--sm">
                    <button onClick={() => dec(item.name)} aria-label="Remove one">−</button>
                    <span>{q}</span>
                    <button onClick={() => inc(item.name)} aria-label="Add one">+</button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Catering() {
  return (
    <section className="catering" id="catering">
      <div className="catering__head">
        <span className="eyebrow">— Catering</span>
        <h2>Catering for families, events &amp; gatherings.</h2>
        <p>Planning an event? Maandeeq prepares generous Somali food for family gatherings, office meals, weddings, community events and special occasions — from aqiqahs and nikahs to Friday lunches and birthdays. Tell us the headcount and we'll do the rest.</p>
      </div>
      <div className="catering__grid">
        <ul className="catering__feats">
          {[
            ["From 10 to 200 guests", "Scaled portions, never compromised on quality."],
            ["Halal, always", "Sourced from trusted London halal suppliers."],
            ["Pickup or delivery", "Across Woolwich, Greenwich & South East London."],
            ["Free quote in 24h", "Reply same-day on WhatsApp."],
          ].map(([t, d]) => (
            <li key={t}><strong>{t}</strong><span>{d}</span></li>
          ))}
        </ul>
        <div className="catering__form">
          <h3>Request a catering quote</h3>
          <CateringForm />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about__pattern" aria-hidden="true"><StarTile size={460} color="var(--gold)" opacity={0.22}/></div>
      <div className="about__inner">
        <span className="eyebrow">— Our story</span>
        <h2 className="about__title">A camel, a kitchen, and a city that <em>missed home.</em></h2>
        <div className="about__cols">
          <p>
            Maandeeq — the white she-camel of Somali poetry — has long been a symbol of nourishment and continuity. We named our restaurant after her because that's the job of a kitchen: to feed, to gather, to carry a culture forward.
          </p>
          <p>
            Our cooks are aunties, uncles and friends from across the Somali diaspora. Our suppliers are the same halal butchers and spice shops that London families have trusted for years. Our table is for you, your kids, your cousin's nikah, and the friend you haven't seen since uni — here in the heart of South East London.
          </p>
        </div>
        <div className="about__stats">
          <div><strong>Halal</strong><span>Verified suppliers</span></div>
          <div><strong>Daily</strong><span>Fresh sabayaad & shaah</span></div>
          <div><strong>7 days</strong><span>Open every day</span></div>
          <div><strong>QR menu</strong><span>Scan, order, share</span></div>
        </div>
        <div className="section__more" style={{marginTop:"28px"}}>
          <a className="btn btn--ghost" href="About.html">Read our story <Icon.Arrow width="14" height="14"/></a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const list = [
    { q: "The lamb shank fell off the bone and the shaah was just like my hooyo makes it. New family spot.", a: "Fatima H.", src: "Google" },
    { q: "Ordered the 4–5 platter for my brother's birthday — fed eight people and we still had leftovers.", a: "Yusuf A.", src: "WhatsApp" },
    { q: "Best sambusa in SE London. Crispy, properly spiced. And the tea is something else.", a: "Idris M.", src: "Instagram" },
    { q: "Catered our nikah for 90 guests. On time, beautiful presentation, everyone went back for seconds.", a: "Hodan & Mohamed", src: "Catering" },
  ];
  return (
    <section className="reviews" id="reviews">
      <header className="section__head section__head--center">
        <span className="eyebrow">— Word of mouth</span>
        <h2>Loved by the neighbourhood.</h2>
      </header>
      <div className="reviews__row">
        {list.map((r, i) => (
          <figure key={i} className="quote">
            <div className="quote__stars">{[1,2,3,4,5].map(n => <Icon.Star key={n} width="12" height="12"/>)}</div>
            <blockquote>"{r.q}"</blockquote>
            <figcaption><strong>{r.a}</strong><span>· via {r.src}</span></figcaption>
          </figure>
        ))}
      </div>
      <div className="section__more" style={{textAlign:"center",marginTop:"32px"}}>
        <a className="btn btn--ghost" href="Reviews.html">Read all 412 reviews <Icon.Arrow width="14" height="14"/></a>
      </div>
    </section>
  );
}

function Reservations({ onReserve }) {
  return (
    <section className="reservations" id="reservations">
      <div className="reservations__inner">
        <div className="reservations__txt">
          <span className="eyebrow eyebrow--light">— Reservations</span>
          <h2>Walk in, or book a table.</h2>
          <p>Tables for two to twenty. For larger groups (10+) please use the catering form — we'll pre-prep portions so nobody waits.</p>
          <button className="btn btn--gold btn--lg" onClick={onReserve}>Reserve a Table <Icon.Arrow width="16" height="16"/></button>
        </div>
        <div className="reservations__card">
          <img className="reservations__logo" src="assets/brand/logo-circle.png" alt="Maandeeq Restaurant" />
          <div className="reservations__wordmark">
            <span className="reservations__name">MAANDEEQ</span>
            <span className="reservations__sub">Restaurant · Somal</span>
          </div>
          <div className="reservations__qr" aria-hidden="true">
            <div className="qrgrid">{Array.from({length:169}).map((_,i)=><span key={i} style={{opacity: ((i*7+i%5)%3===0)?1:0}}/>)}</div>
            <div className="qrcorner qrcorner--tl"/><div className="qrcorner qrcorner--tr"/><div className="qrcorner qrcorner--bl"/>
          </div>
          <p className="reservations__small"><Icon.QR width="12" height="12"/> Scan to view menu · share with friends</p>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const s = window.SITE;
  return (
    <section className="visit" id="visit">
      <header className="section__head">
        <span className="eyebrow">— Visit us</span>
        <h2>Find Maandeeq.</h2>
      </header>
      <div className="visit__grid">
        <div className="visit__map" role="img" aria-label="Map of Woolwich, South East London">
          <div className="visit__mapinner">
            {Array.from({length: 24}).map((_,i)=>(<span key={i} className="visit__road" style={{ transform: `rotate(${(i*37)%180}deg) translate(${(i%4)*8}%, ${(i%5)*6}%)` }}/>))}
            <div className="visit__pin"><Icon.Pin width="22" height="22"/></div>
            <div className="visit__pinlabel">Maandeeq · Woolwich</div>
          </div>
        </div>
        <div className="visit__info">
          <div className="visit__block">
            <h4><Icon.Pin width="14" height="14"/> Address</h4>
            <p>{s.address}{s.postcode && <><br/>{s.postcode}</>}</p>
            <a className="linkish" href="Contact.html">Get directions →</a>
          </div>
          <div className="visit__block">
            <h4><Icon.Clock width="14" height="14"/> Opening hours</h4>
            <table className="hours">
              <tbody>{s.hours.map(([d,t]) => <tr key={d}><td>{d}</td><td>{t}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="visit__block">
            <h4><Icon.Phone width="14" height="14"/> Contact</h4>
            <p><a href={`tel:${s.phone}`}>{s.phone}</a><br/><a href={`https://wa.me/${s.whatsappRaw}`} target="_blank" rel="noreferrer">WhatsApp: {s.whatsapp}</a><br/><span style={{color:"var(--muted)"}}>Instagram: {s.instagram}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VIP() {
  return (
    <section className="vip" id="vip">
      <div className="vip__pattern" aria-hidden="true"><StarTile size={300} color="var(--gold)" opacity={0.5}/></div>
      <div className="vip__inner">
        <span className="eyebrow eyebrow--gold">— Become a VIP</span>
        <h2>Family-platter specials, Ramadan offers &amp; new menu drops.</h2>
        <p>Join the Maandeeq VIP list for weekend specials, seasonal offers, Ramadan menu drops and catering deals — a short note maybe twice a month, never spam.</p>
        <VIPForm />
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    ["Is everything halal?", "Yes — every dish at Maandeeq is 100% halal, sourced from verified London suppliers."],
    ["Do you deliver?", "We offer pickup and short-distance delivery across Woolwich and surrounding areas. For larger catering orders we can deliver further — ask via WhatsApp."],
    ["Can I book a large table?", "Tables up to 8 are bookable via the reservation form. For 10+, please use the catering form so we can pre-prep portions."],
    ["Do you do kids portions?", "Most mains can be served as a half portion — just mention it when ordering."],
    ["Is there parking?", "Street parking is available nearby. We're a short walk from Woolwich Arsenal station and Elizabeth Line."],
    ["How do I order on WhatsApp?", "Tap any 'Order on WhatsApp' button — your basket pre-fills a message you can edit before sending."],
  ];
  const [open, setOpen] = useStateS(0);
  return (
    <section className="faq" id="faq">
      <header className="section__head">
        <span className="eyebrow">— FAQs</span>
        <h2>Good to know.</h2>
      </header>
      <ul className="faq__list">
        {qs.map(([q, a], i) => (
          <li key={i} className={open === i ? "is-open" : ""}>
            <button onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{q}</span>
              <Icon.Plus width="16" height="16"/>
            </button>
            <div className="faq__a"><p>{a}</p></div>
          </li>
        ))}
      </ul>
      <div className="section__more" style={{textAlign:"center",marginTop:"28px"}}>
        <a className="btn btn--ghost" href="FAQ.html">See all FAQs <Icon.Arrow width="14" height="14"/></a>
      </div>
    </section>
  );
}

function Footer() {
  const s = window.SITE;
  return (
    <footer className="foot" id="contact">
      <div className="foot__top">
        <div className="foot__brand">
          <img src="assets/brand/logo-circle.png" alt="Maandeeq" />
          <p>Authentic Somali food. Family platters, takeaway &amp; catering — in the heart of Woolwich.</p>
        </div>
        <div className="foot__cols">
          <div>
            <h5>Visit</h5>
            <p>{s.address}{s.postcode && <><br/>{s.postcode}</>}</p>
          </div>
          <div>
            <h5>Hours</h5>
            <p>{s.hours.map(([d,t])=> <span key={d}>{d}: {t}<br/></span>)}</p>
          </div>
          <div>
            <h5>Contact</h5>
            <p><a href={`tel:${s.phone}`}>{s.phone}</a><br/><a href={`https://wa.me/${s.whatsappRaw}`}>WhatsApp</a><br/>Instagram {s.instagram}</p>
          </div>
          <div>
            <h5>Site</h5>
            <p>
              <a href="Menu.html">Menu</a><br/>
              <a href="Order.html">Order online</a><br/>
              <a href="Reserve.html">Reservations</a><br/>
              <a href="Catering.html">Catering</a><br/>
              <a href="About.html">About</a><br/>
              <a href="Reviews.html">Reviews</a><br/>
              <a href="Contact.html">Contact</a><br/>
              <a href="FAQ.html">FAQs</a>
            </p>
          </div>
        </div>
      </div>
      <div className="foot__bottom">
        <span>© {new Date().getFullYear()} Maandeeq Restaurant · Woolwich</span>
        <span>Built with care · Halal · Family-run</span>
      </div>
    </footer>
  );
}

function StickyActions({ onOrder, cartCount }) {
  return (
    <div className="sticky">
      <a className="sticky__call" href={`tel:${window.SITE.phone}`} aria-label="Call">
        <Icon.Phone width="18" height="18"/>
      </a>
      <a className="sticky__whats" href="Order.html" aria-label="Order online">
        <Icon.WhatsApp width="22" height="22"/>
        {cartCount > 0 && <span className="sticky__count">{cartCount}</span>}
      </a>
    </div>
  );
}

Object.assign(window, {
  Hero, Welcome, SignatureDishes, Platters, MenuSection, Catering, About, Reviews, Reservations, Visit, VIP, FAQ, Footer, StickyActions
});
