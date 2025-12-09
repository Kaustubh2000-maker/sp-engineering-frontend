export default function Contact() {
  return (
    <div>
      <div className="section-contact">
        <div className="contact-email contact-card">
          <div className="contact-div--1">
            <a className="contact-link" href="mailto:rohit@spengs.in">
              <span className="material-symbols-rounded contact-icon">
                mail
              </span>
            </a>
          </div>

          <div className="contact-div--2">
            <p className="contact-head">rohit@spengs.in</p>
            <p className="contact-head-sec">Contact Via E-Mail</p>
          </div>
        </div>

        <div className="contact-call contact-card">
          <div className="contact-div--1">
            <a className="contact-link" href="tel:+919172302137">
              <span className="material-symbols-rounded contact-icon">
                call
              </span>
            </a>
          </div>
          <div className="contact-div--2">
            <p className="contact-head">+91 91723 02137</p>
            <p className="contact-head-sec">Make a Call now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
