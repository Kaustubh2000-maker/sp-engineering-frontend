import footerLogo from "@assets/logos/logo-no-bg.png";

function Footer() {
  return (
    <footer className="footer-box">
      <div className="footer-container">
        <div className="footer-logo-div">
          <img className="footer-logo" src={footerLogo} alt="" />
          <div className="footer-icon-div">
            <ion-icon className="footer-icon" name="logo-instagram"></ion-icon>
            <ion-icon className="footer-icon" name="logo-facebook"></ion-icon>
            <ion-icon className="footer-icon" name="logo-whatsapp"></ion-icon>
            <ion-icon className="footer-icon" name="logo-twitter"></ion-icon>
          </div>
        </div>
        <div className="footer-address footer-div">
          <h3 className="footer-heading">Contact us</h3>
          <ul className="footer-ul">
            <li className="footer-li">this is li</li>
            <li className="footer-li">this is li</li>
            <li className="footer-li">this is li</li>
          </ul>
        </div>
        <div className="footer-contact footer-div">
          <h3 className="footer-heading">Address</h3>
          <ul className="footer-ul">
            <li className="footer-li">this is li</li>
            <li className="footer-li">this is li</li>
            <li className="footer-li">this is li</li>
          </ul>
        </div>
        <div className="footer-about footer-div">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-ul">
            <li className="footer-li">this is li</li>
            <li className="footer-li">this is li</li>
            <li className="footer-li">this is li</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
