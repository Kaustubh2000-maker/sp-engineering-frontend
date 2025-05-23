import footerLogo from "@assets/logos/logo-no-bg.png";

function Footer() {
  return (
    <footer className="footer-box">
      <div className="footer-container">
        <div className="footer-logo-div">
          <img className="footer-logo" src={footerLogo} alt="" />
          <div className="footer-icon-div">
            <ion-icon class="footer-icon" name="logo-instagram"></ion-icon>
            <ion-icon class="footer-icon" name="logo-facebook"></ion-icon>
            <ion-icon class="footer-icon" name="logo-whatsapp"></ion-icon>
            <ion-icon class="footer-icon" name="logo-twitter"></ion-icon>
          </div>
        </div>
        {/* <div className="footer-address footer-div">
          <h3 className="footer-heading">Contact us</h3>
          <ul className="footer-ul">
            <li className="footer-li">this is li</li>
            <li className="footer-li">this is li</li>
            <li className="footer-li">this is li</li>
          </ul>
        </div> */}
        <div className="footer-contact footer-div">
          <h3 className="footer-heading">Address</h3>
          <ul className="footer-ul">
            <li className="footer-li">
              <div>
                <ion-icon
                  class="footer-sub-icon"
                  name="location-outline"
                ></ion-icon>
                <span>Nashik Office</span>
              </div>
              8A, Kala Nagar, Mhada colony, Nashik, MH-422004
            </li>
            <li className="footer-li">
              <div>
                <ion-icon
                  class="footer-sub-icon"
                  name="location-outline"
                ></ion-icon>
                <span>Vadodara Office</span>
              </div>
              A/11, Rudrakhs County, Nr. L&T Knowledge City, N.H. 8, Vadodara,
              GJ – 390019
            </li>
          </ul>
        </div>
        <div className="footer-about footer-div">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-ul">
            <li className="footer-li">
              <div>
                <ion-icon
                  class="footer-sub-icon"
                  name="mail-outline"
                ></ion-icon>
                <span className="footer-contact-span">Email</span>
              </div>
              rohitspengg@gmail.com
            </li>
            <li className="footer-li">
              <div>
                <ion-icon
                  class="footer-sub-icon"
                  name="call-outline"
                ></ion-icon>
                <span className="footer-contact-span">Contact no.</span>
              </div>
              +91 89831 61405
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
