function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <img src="/slab_logo.jpg" alt="Logo" className="header-logo" />
        <h1>Slab-Calculator</h1>
        <a href="#about">ABOUT</a>
        <a href="#details">DETAILS</a>
        <a href="#calculator">CALCULATOR</a>
      </div>

      <div className="right-section">
        <div className="contact-info">
          <i className="fas fa-phone"></i>
          <span>+91 9118997628</span>
        </div>
        <div className="contact-info">
          <i className="fas fa-envelope"></i>
          <span>avanishpatel3434@gmail.com</span>
        </div>
      </div>
    </header>
  );
}
export default Header;
