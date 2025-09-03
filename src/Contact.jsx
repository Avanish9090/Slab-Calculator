function Contact() {
  const phoneNumber = 9118997628;
  const message = "Hello i want to contact with you";
  const wtspURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="contact">
      <div
        className="contact-box"
        style={{ backgroundImage: `url(./about_slab.jpeg)` }}
      >
        <h1>Contact Us</h1>
        <a href={wtspURL} target="_blank" rel="noopener noreferrer">
          <button
            style={{
              backgroundColor: "#25D366",
              color: "black",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() =>
              window.open(
                `https://wa.me/7379194409?text=${encodeURIComponent(
                  "Hi there! I have some question related to slab"
                )}`,
                "_blank"
              )
            }
          >
            WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}
export default Contact;
