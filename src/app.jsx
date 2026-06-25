// Maandeeq main app
const { useState: useS, useEffect: useE } = React;

function App() {
  const [navOpen, setNavOpen] = useS(false);
  const [scrolled, setScrolled] = useS(false);
  const [reserveOpen, setReserveOpen] = useS(false);
  const [orderOpen, setOrderOpen] = useS(false);
  const [cart, setCart] = useS({});

  useE(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const openOrder = () => { window.location.href = "Order.html"; };
  const openReserve = () => { window.location.href = "Reserve.html"; };
  const addToOrder = (name) => {
    setCart((c) => ({ ...c, [name]: (c[name] || 0) + 1 }));
    window.location.href = "Order.html";
  };

  return (
    <div className="app">
      <TopNav onOpen={() => setNavOpen(true)} scrolled={scrolled} />
      <NavOverlay open={navOpen} onClose={() => setNavOpen(false)} onReserve={openReserve} onOrder={openOrder} />

      <main>
        <Hero onOrder={openOrder} onReserve={openReserve} />
        <Welcome />
        <SignatureDishes onAdd={addToOrder} />
        <Platters onOrder={openOrder} />
        <MenuSection cart={cart} setCart={setCart} />
        <About />
        <Catering />
        <Reviews />
        <Reservations onReserve={openReserve} />
        <Visit />
        <VIP />
        <FAQ />
      </main>

      <Footer />
      <StickyActions onOrder={openOrder} cartCount={cartCount} />

      <Modal open={reserveOpen} onClose={() => setReserveOpen(false)} eyebrow="— Reservations" title="Reserve a table">
        <ReservationForm onClose={() => setReserveOpen(false)} />
      </Modal>
      <Modal open={orderOpen} onClose={() => setOrderOpen(false)} eyebrow="— Order on WhatsApp" title="Your order">
        <OrderForm cart={cart} setCart={setCart} onClose={() => setOrderOpen(false)} />
      </Modal>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
