import React from "react";
import aboutImg from "./../assets/other/fire-2.jpg";

import fireImg from "./../assets/other/fire-1.jpg";
import hvacImg from "./../assets/other/hvac-1.jpg";
import solarImg from "./../assets/other/solar-1.jpg";
import tankImg from "./../assets/other/tank-1.jpg";
import fireImg2 from "./../assets/other/fire-3.jpg";
import epcmImg from "./../assets/other/epcm-1.jpg";
// import hvacImg from "./../assets/other/hvac-1.jpg";

function AboutPage() {
  return (
    <>
      <div>
        <h1 className="au-main-heading">
          More than 20 sectors served and protected
        </h1>

        <div className="au-sectors-container">
          <div className="au-sector-item sector-1">
            <img className="au-sector-img" src={fireImg} alt="" />
            <p className="au-sector-name">Fire Safety</p>
          </div>
          <div className="au-sector-item sector-2">
            <img className="au-sector-img" src={hvacImg} alt="" />
            <p className="au-sector-name">HVAC</p>
          </div>
          <div className="au-sector-item sector-3">
            <img className="au-sector-img" src={solarImg} alt="" />

            <p className="au-sector-name">Solar</p>
          </div>
          <div className="au-sector-item sector-4">
            <img className="au-sector-img" src={tankImg} alt="" />

            <p className="au-sector-name">Storage tanks</p>
          </div>
          <div className="au-sector-item sector-5">
            <img className="au-sector-img" src={fireImg2} alt="" />

            <p className="au-sector-name">Fire Consultancy</p>
          </div>
          <div className="au-sector-item sector-6">
            <img className="au-sector-img" src={epcmImg} alt="" />
            <p className="au-sector-name">EPCM Services</p>
          </div>
        </div>

        <div className="au-about-sp">
          <div className="au-about-sp-sub-div">
            <div>
              <h3 className="au-about-sp-sub-heading">about sp engineering</h3>
              <h2 className="au-about-sp-heading">
                Engineering the Future with Confidence
              </h2>
              <p className="au-about-sp-text">
                SP Engineering, an ISO 9001 certified company, is a trusted
                provider of comprehensive engineering solutions serving diverse
                industries such as Oil & Gas, Chemical, Petrochemical,
                Pharmaceutical, FMCG, Aviation, Power, and Warehousing. With a
                commitment to quality, safety, and innovation, SP Engineering
                delivers end-to-end turnkey services across Fire Protection &
                Alarm Systems, HVAC Solutions, Bulk Storage Tanks, Solar Energy
                Systems, and Asset Management. Backed by a team of skilled
                professionals, advanced technology, and a customer-first
                mindset, we have established ourselves as a preferred
                engineering partner across India and internationally. From
                concept to commissioning, every project reflects our core values
                of excellence, reliability, and innovation.
              </p>
            </div>

            <div className="au-about-sp-photo">
              <img className="au-about-img" src={aboutImg} alt="" />
            </div>
          </div>
        </div>
        <div className="au-vision-card-div">
          <div className="au-vision-goal-card">
            <ion-icon class="au-vision-icon" name="eye-outline"></ion-icon>
            <h4 className="au-vision-heading">Our Vision</h4>
            <p className="au-vision-text">
              To be a trusted leader in delivering innovative, sustainable, and
              reliable engineering solutions that protect lives, assets, and the
              environment across industries worldwide.
            </p>
          </div>
          <div className="au-vision-goal-card">
            <ion-icon class="au-vision-icon" name="earth-outline"></ion-icon>
            <h4 className="au-vision-heading">Our Mission</h4>
            <p className="au-vision-text">
              To provide end-to-end engineering services with a focus on
              quality, safety, and client satisfaction—driving progress through
              technology, expertise, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
