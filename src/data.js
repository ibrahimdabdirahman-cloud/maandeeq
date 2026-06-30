// Maandeeq menu data — based on the printed menu provided.
window.MENU_DATA = [
  {
    id: "main-course",
    title: "Main Course",
    note: "All served with either Somali rice (Bariice), pasta (Baasto), Ugali (Soor) & Salad.",
    items: [
      { name: "Maandeeq Special — Haniid Lamb Shank / Shoulder", desc: "Slow-cooked lamb with rich Somali spices.", price: "12.99", popular: true },
      { name: "Chicken Steak", desc: "Marinated chicken grilled to perfection, with delicious East African spices.", price: "8.99" },
      { name: "Salmon Fish", desc: "Salmon, seasoned with Somali spices.", price: "10.49" },
      { name: "Beef Suqaar", desc: "Tender Somali beef cooked with peppers, onions, and potatoes.", price: "7.99", popular: true },
      { name: "Maandeeq's Special", desc: "Maharaghe (red kidney beans), spinach and spices, served with vegetables.", price: "5.99", veg: true },
    ],
  },
  {
    id: "platters",
    title: "Family Platters",
    note: "All served with either Somali rice (Bariice), pasta (Baasto) or Ugali (Soor) & Salad.",
    items: [
      { name: "1–2 People Platter", desc: "Lamb Shank or Shoulder, Chicken Steak, Beef Suqaar.", price: "29.99" },
      { name: "2–3 People Platter", desc: "Lamb Shank or Shoulder (×2), Chicken Steak, Beef Suqaar.", price: "38.99" },
      { name: "4–5 People Platter", desc: "Lamb Shank or Shoulder (×3), Chicken Steak, Beef Suqaar.", price: "49.99", popular: true },
      { name: "Mega Fusion Platter", desc: "Lamb Shank or Shoulder (×5), Chicken Steak (×3), Beef Suqaar. For the whole family.", price: "79.99" },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Sambusa", desc: "Crispy pastry filled with spiced meat and onions.", price: "0.99", popular: true },
      { name: "Sabayaad (Chapati)", desc: "Soft, spongy canjeero and flaky, golden sabayaad — portion of three. Perfect with honey, butter or savoury dishes.", price: "0.99" },
      { name: "Kimis Mayai (Malawaax)", desc: "Soft, spongy Kimis flatbread paired with perfectly cooked eggs. Portion of three.", price: "1.49" },
      { name: "Maandeeq's Chipsi Maya", desc: "Crispy traditional fries mixed with eggs and seasoned to perfection.", price: "3.99" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Milk Cake", desc: "Creamy dessert in Oreo, Lotus Biscoff, Ferrero Rocher & Kinder Bueno flavours.", price: "5.49", popular: true },
      { name: "Somali Cake", desc: "Soft, golden rice donut with a hint of sweetness. One slice from a 12\" cake.", price: "1.49" },
      { name: "Milk Shake", desc: "Sweet, well-blended homemade milkshake — Oreo or strawberry.", price: "3.49" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Tea",
    items: [
      { name: "Maandeeq's Special Tea (Shaah)", desc: "A fragrant blend of aromatic spices and black tea, steeped for a comforting, traditional taste.", price: "1.49", popular: true },
      { name: "Somali Coffee (Qaxwo)", desc: "Cardamom, cinnamon, ginger and cloves — the traditional Somali way.", price: "1.99" },
      { name: "Mango Lassi", desc: "Rich, creamy yogurt blended with sweet, ripe mangoes.", price: "2.99" },
      { name: "Mojito", desc: "Classic, Blue Fusion, Strawberry or Piña Colada — chilled with fresh mint & lime.", price: "4.49" },
      { name: "Fresh Juices", desc: "Mango, Guava or Exotic Pineapple, served on the rocks.", price: "1.99" },
      { name: "Soft Drinks", desc: "7Up, Fanta Pineapple, Diet Coke, Shanni & Miranda.", price: "0.99" },
      { name: "Spring Water", desc: "Pure natural spring water.", price: "0.99" },
    ],
  },
];

window.SITE = {
  phone: "+44 7958 139 312",
  phoneRaw: "+447958139312",
  whatsapp: "+44 7958 139 312",
  whatsappRaw: "447958139312",
  email: "restaurantmaandeeq@gmail.com",
  addressName: "Maandeeq Restaurant",
  addressLine: "13B Anglesea Rd",
  postcode: "London SE18 6EG",
  address: "13B Anglesea Rd, Woolwich, London SE18 6EG",
  area: "Woolwich · South East London",
  maps: "https://maps.google.com/?q=Maandeeq+Restaurant+13B+Anglesea+Rd+London+SE18+6EG",
  transit: "4-min walk from Woolwich Arsenal (Rail & DLR) and Woolwich (Elizabeth line).",
  hours: [
    ["Mon – Thu", "8:30am – 11:00pm"],
    ["Fri", "8:30am – 11:30pm"],
    ["Sat", "9:00am – 11:30pm"],
    ["Sun", "9:00am – 10:30pm"],
  ],
  instagram: "@maandeeqrestaurant",
};

window.NAV_LINKS = [
  { label: "Reservations", href: "Reserve.html" },
  { label: "Order Online", href: "Order.html" },
  { label: "Menu", href: "Menu.html" },
  { label: "Catering", href: "Catering.html" },
  { label: "About Us", href: "About.html" },
  { label: "Reviews", href: "Reviews.html" },
  { label: "Contact", href: "Contact.html" },
  { label: "FAQs", href: "FAQ.html" },
];
