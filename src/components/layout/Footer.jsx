import footerLogo from "@assets/logos/logo-no-bg.png";

function Footer() {
  return (
    <footer class="footer-box">
      <div class="footer-container">
        <div class="footer-logo-div">
          <img class="footer-logo" src={footerLogo} alt="" />
          <div class="footer-icon-div">
            <ion-icon class="footer-icon" name="logo-instagram"></ion-icon>
            <ion-icon class="footer-icon" name="logo-facebook"></ion-icon>
            <ion-icon class="footer-icon" name="logo-whatsapp"></ion-icon>
            <ion-icon class="footer-icon" name="logo-twitter"></ion-icon>
          </div>
        </div>
        <div class="footer-address footer-div">
          <h3 class="footer-heading">Contact us</h3>
          <ul class="footer-ul">
            <li class="footer-li">this is li</li>
            <li class="footer-li">this is li</li>
            <li class="footer-li">this is li</li>
          </ul>
        </div>
        <div class="footer-contact footer-div">
          <h3 class="footer-heading">Address</h3>
          <ul class="footer-ul">
            <li class="footer-li">this is li</li>
            <li class="footer-li">this is li</li>
            <li class="footer-li">this is li</li>
          </ul>
        </div>
        <div class="footer-about footer-div">
          <h3 class="footer-heading">Company</h3>
          <ul class="footer-ul">
            <li class="footer-li">this is li</li>
            <li class="footer-li">this is li</li>
            <li class="footer-li">this is li</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
