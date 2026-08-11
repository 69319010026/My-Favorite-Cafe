import "./App.css";

const base = import.meta.env.BASE_URL;

function App() {
  const menus = [
    {
      image: `${base}coffee.jpg`,
      name: "Iced Latte",
      price: "฿75",
      description: "ลาเต้เย็น หอมกาแฟ รสชาติกลมกล่อม",
    },
    {
      image: `${base}cake.jpg`,
      name: "Strawberry Cake",
      price: "฿65",
      description: "เค้กสตรอว์เบอร์รีเนื้อนุ่ม หวานกำลังดี",
    },
    {
      image: `${base}matcha.jpg`,
      name: "Matcha",
      price: "฿85",
      description: "มัทฉะปั่น หอมละมุน รสชาติเข้มข้น",
    },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">☕ April cafe’</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <img src={`${base}cafe.jpg`} alt="April cafe" />

        <div className="hero-overlay">
          <div className="hero-content">
            <p className="small-title">WELCOME TO</p>

            <h1>April cafe’</h1>

            <p>
              คาเฟ่บรรยากาศดีริมแม่น้ำบางปะกง
              เหมาะสำหรับนั่งพักผ่อน จิบกาแฟ
              และใช้เวลาสบาย ๆ
            </p>

            <a href="#menu" className="hero-button">
              ดูเมนูแนะนำ
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="section-title">
          <p>ABOUT CAFE</p>

          <h2>เกี่ยวกับร้าน</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={`${base}cafe.jpg`} alt="April cafe" />
          </div>

          <div className="about-text">
            <h3>April cafe’</h3>

            <p className="location">
              📍 298/3 ถนนประชาเนรมิต อำเภอบางคล้า
              จังหวัดฉะเชิงเทรา
            </p>

            <p>
              April cafe’ เป็นคาเฟ่บรรยากาศดี
              ในอำเภอบางคล้า จังหวัดฉะเชิงเทรา
              เหมาะสำหรับมานั่งพักผ่อนและพบปะเพื่อน ๆ
            </p>

            <p>
              ร้านมีบรรยากาศสบาย ๆ
              มีพื้นที่สำหรับนั่งรับประทานอาหาร
              และเครื่องดื่ม พร้อมมุมถ่ายรูปสวย ๆ
            </p>

            <div className="features">
              <span>☕ Coffee</span>
              <span>🌿 Riverside</span>
              <span>📸 Photo Spot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="section menu-section">
        <div className="section-title">
          <p>OUR MENU</p>

          <h2>เมนูแนะนำ</h2>
        </div>

        <div className="menu-grid">
          {menus.map((menu, index) => (
            <div className="menu-card" key={index}>
              <img src={menu.image} alt={menu.name} />

              <div className="menu-info">
                <div className="menu-name">
                  <h3>{menu.name}</h3>

                  <span>{menu.price}</span>
                </div>

                <p>{menu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="section-title">
          <p>CONTACT</p>

          <h2>ติดต่อร้าน</h2>
        </div>

        <div className="contact-grid">
          {/* Address */}
          <div className="contact-card">
            <div className="contact-icon">📍</div>

            <h3>ที่อยู่</h3>

            <p>
              298/3 ถนนประชาเนรมิต
              <br />
              อำเภอบางคล้า
              <br />
              จังหวัดฉะเชิงเทรา 24110
            </p>
          </div>

          {/* Time */}
          <div className="contact-card">
            <div className="contact-icon">🕐</div>

            <h3>เวลาเปิดร้าน</h3>

            <p>
              จันทร์ 09:00 - 18:00
              <br />
              อังคาร ปิด
              <br />
              พุธ - ศุกร์ 09:00 - 18:00
              <br />
              เสาร์ - อาทิตย์ 09:00 - 19:00
            </p>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-icon">📱</div>

            <h3>โทรศัพท์</h3>

            <p>091-859-2544</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 April cafe’</p>

        <p>One Page Website | React.js + Vite</p>
      </footer>
    </div>
  );
}

export default App;