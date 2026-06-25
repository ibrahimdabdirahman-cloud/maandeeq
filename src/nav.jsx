// Nav bar + full-screen overlay menu. Original design — not a clone of any reference site.
const { useState, useEffect } = React;

function TopNav({ onOpen, scrolled }) {
  return (
    <header className={`topnav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="topnav__brand" aria-label="Maandeeq home">
        <img src="assets/brand/logo-circle.png" alt="" className="topnav__logo" />
        <span className="topnav__wordmark">
          <span className="topnav__name">Maandeeq</span>
          <span className="topnav__tag">Somali Restaurant · Woolwich</span>
        </span>
      </a>
      <nav className="topnav__inline" aria-label="Primary">
        <a href="Menu.html">Menu</a>
        <a href="Order.html">Order</a>
        <a href="Catering.html">Catering</a>
        <a href="About.html">About</a>
        <a href="Reviews.html">Reviews</a>
        <a href="Contact.html">Visit</a>
      </nav>
      <div className="topnav__actions">
        <a className="btn btn--ghost btn--sm" href="Reserve.html">Reserve a table</a>
        <button className="topnav__burger" onClick={onOpen} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function NavOverlay({ open, onClose, onReserve, onOrder }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const handleClick = (e, href) => {
    if (href && !href.startsWith("#")) {
      // external page — let the browser handle it
      onClose();
      return;
    }
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  };

  return (
    <div className={`overlay ${open ? "is-open" : ""}`} aria-hidden={!open} role="dialog" aria-modal="true">
      <div className="overlay__bg" onClick={onClose} />
      <div className="overlay__panel">
        <div className="overlay__head">
          <span className="overlay__eyebrow">Maandeeq · est. 2024</span>
          <button className="overlay__close" onClick={onClose} aria-label="Close menu">
            <Icon.Close width="20" height="20" />
          </button>
        </div>
        <nav className="overlay__nav" aria-label="Full">
          {window.NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              style={{ animationDelay: `${0.05 + i * 0.04}s` }}
            >
              <span className="overlay__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="overlay__label">{l.label}</span>
              <Icon.Arrow className="overlay__arrow" width="22" height="22" />
            </a>
          ))}
        </nav>
        <div className="overlay__foot">
          <div className="overlay__contact">
            <a href={`tel:${window.SITE.phone}`}><Icon.Phone width="16" height="16" /> {window.SITE.phone}</a>
            <a href="#visit" onClick={(e) => handleClick(e, "#visit")}><Icon.Pin width="16" height="16" /> {window.SITE.address}</a>
          </div>
          <div className="overlay__cta">
            <button className="btn btn--gold" onClick={() => { onClose(); setTimeout(onReserve, 220); }}>Reserve a Table</button>
            <button className="btn btn--whats" onClick={() => { onClose(); setTimeout(onOrder, 220); }}>
              <Icon.WhatsApp width="18" height="18" /> Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.TopNav = TopNav;
window.NavOverlay = NavOverlay;
