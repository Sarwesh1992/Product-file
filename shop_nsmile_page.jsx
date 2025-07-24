import * as React from "react";

const partners = {
  shopping: [
    { name: "Amazon", offer: "Mega Deals on Essentials", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Myntra", offer: "Flat 50% Off on Fashion", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Myntra_Logo.png" },
    { name: "Ajio", offer: "Up to 70% Off + Cashback", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/AJIO_Logo.png" },
    { name: "Tata Neu", offer: "NeuCoins on Every Order", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Tata_Neu_Logo.png" },
  ],
  travel: [
    { name: "Goibibo", offer: "₹1000 Off on Flights", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Goibibo_Logo.png" },
    { name: "RedBus", offer: "₹200 Off on Bus Rides", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Redbus_logo.png" },
    { name: "Abhibus", offer: "₹150 Cashback", link: "#", logo: "https://abhibus.com/images/logo.svg" },
    { name: "Indigo", offer: "Flight Deals via App", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IndiGo_Logo.svg" },
  ],
  wallet: [
    { name: "HDFC", offer: "5% Cashback", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/HDFC_Bank_Logo.svg" },
    { name: "Paytm", offer: "Recharge Offers", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png" },
    { name: "Tata Neu", offer: "Save with NeuCoins", link: "#", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Tata_Neu_Logo.png" },
  ],
};

const Section = ({ title, partners }) => (
  <section style={{ padding: "2rem", background: "#F5F0E1" }}>
    <h2 style={{ color: "#4B8A47", textAlign: "center", marginBottom: "1rem" }}>{title}</h2>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "1.5rem"
    }}>
      {partners.map((p) => (
        <div style={{
          border: "1px solid #DCDCDC",
          borderRadius: "16px",
          padding: "1rem",
          background: "#ffffff",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
        }} key={p.name}>
          <img src={p.logo} alt={p.name} style={{ height: "40px", marginBottom: "1rem", objectFit: "contain" }} />
          <p style={{ color: "#D9A441", fontWeight: 600 }}>{p.offer}</p>
          <a href={p.link} target="_blank" rel="noreferrer" style={{
            display: "inline-block",
            marginTop: "0.5rem",
            background: "#4B8A47",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            textDecoration: "none"
          }}>Shop Now</a>
        </div>
      ))}
    </div>
  </section>
);

export function ShopNSmile() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", lineHeight: 1.6 }}>
      <section style={{
        background: "linear-gradient(135deg, #F5F0E1, #BEE3DB)",
        padding: "4rem 1rem",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#333", fontSize: "2rem", marginBottom: "1rem" }}>
          Can shopping ever be worthwhile? And even give you a reason to smile?
        </h1>
        <h2 style={{ color: "#4B8A47", fontSize: "1.5rem" }}>YES, when you shop via hfnl!fe!</h2>
        <p style={{ maxWidth: "600px", margin: "1rem auto", color: "#333" }}>
          By routing your purchases through our Smile Partners — Amazon, Ajio, Myntra, Goibibo, etc. —
          you support Heartfulness initiatives at no extra cost.
        </p>
        <a href="#shop" style={{
          display: "inline-block",
          background: "#4B8A47",
          color: "#fff",
          padding: "1rem 2rem",
          marginTop: "1rem",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>Start Shopping</a>
      </section>

      <Section title="💼 Shopping Partners" partners={partners.shopping} />
      <Section title="✈️ Travel Partners" partners={partners.travel} />
      <Section title="💳 Wallet & Bank Offers" partners={partners.wallet} />

      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#fff",
        padding: "12px 16px",
        borderRadius: "50%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        fontSize: "20px",
        textAlign: "center"
      }}>💬</a>

      <footer style={{
        backgroundColor: "#F5F0E1",
        padding: "2rem",
        textAlign: "center",
        color: "#4B8A47",
        fontSize: "1rem"
      }}>
        <strong>Hfnlife — Shop with Purpose, Smile with Heart.</strong><br />
        Powered by Heartfulness.
      </footer>
    </div>
  );
}
