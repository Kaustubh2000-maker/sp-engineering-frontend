import React from "react";
import { useState, useEffect } from "react";
import aboutImg from "./../assets/other/fire/fire-2.jpg";

import fireImg from "./../assets/other/fire/fire-1.webp";
import hvacImg from "./../assets/other/hvac/hvac-8.jpg";
import solarImg from "./../assets/other/solar/solar-7.jpg";
import tankImg from "./../assets/other/tank/tank-6.jpg";
import fireImg2 from "./../assets/other/fire//fire-4.jpg";
import epcmImg from "./../assets/other/epcm/epcm-1.jpg";

import CtaForm from "@/components/sections/cta";
import Testimonial from "@/components/sections/Testimonial";

// import hvacImg from "./../assets/other/hvac-1.jpg";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Testimonials from "@/components/sections/Testimonial";

function AboutPage() {
  const pieData = [
    { name: "EPCM", value: 10 },
    { name: "Fire Consultancy", value: 10 },
    { name: "Storage Tanks", value: 20 },
    { name: "HVAC", value: 20 },
    { name: "Solar", value: 20 },
    { name: "Fire Protection", value: 40 },
  ];

  const COLORS = [
    "#FFBB28",
    "#FF8042",
    "#00C49F",
    "#6A4FB6",
    "#0088FE",
    "#D91E36",
  ];
  const [radius, setRadius] = useState({ inner: 95, outer: 110 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 420) {
        setRadius({ inner: 40, outer: 55 });
      } else if (width <= 580) {
        setRadius({ inner: 60, outer: 75 });
      } else {
        setRadius({ inner: 95, outer: 110 });
      }
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div>
        <h1 className="au-main-heading">
          Engineering the Future with Confidence
        </h1>

        <div className="au-about-sp">
          <div className="au-about-sp-sub-div">
            <div>
              <h3 className="au-about-sp-sub-heading">About SP Engineering</h3>
              <h2 className="au-about-sp-heading">
                Powering Progress Across 20+ Sectors
              </h2>
              <p className="au-about-sp-text">
                SP Engineering, an ISO 9001-certified firm, is a trusted name in
                delivering turnkey engineering solutions for critical industries
                including Oil & Gas, Chemical, Pharma, FMCG, Aviation, Power,
                and Warehousing. We specialize in Fire Protection Systems, HVAC,
                Solar Energy, Storage Tanks, and Asset Management—blending
                innovation with reliability. Our expert team, advanced tech, and
                client-focused approach have earned us recognition across India
                and beyond. Every project we deliver reflects our commitment to
                safety, quality, and engineering excellence.
              </p>
            </div>

            <div className="au-about-sp-pie">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={radius.inner}
                    outerRadius={radius.outer}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                    isAnimationActive={true}
                    label={({ name }) => name}
                    labelLine={false}
                    labelClassName="au-pie-label" // ✅ Custom class
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <Testimonial />

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
          <div className="au-stats">
            <div className="au-stats-card">
              <ion-icon class="au-stats-icon" name="ribbon-outline"></ion-icon>
              <span className="au-stats-text">
                10+
                <br />
                <span>years experience</span>
              </span>
            </div>{" "}
            <div className="au-stats-card">
              <ion-icon
                class="au-stats-icon"
                name="bag-check-outline"
              ></ion-icon>
              <span className="au-stats-text">
                500+
                <br />
                <span>projects completed</span>
              </span>
            </div>{" "}
            <div className="au-stats-card">
              <ion-icon class="au-stats-icon" name="people-outline"></ion-icon>
              <span className="au-stats-text">
                300+
                <br />
                <span>Team build</span>
              </span>
            </div>{" "}
            <div className="au-stats-card">
              <ion-icon class="au-stats-icon" name="happy-outline"></ion-icon>
              <span className="au-stats-text">
                400+
                <br />
                <span>happy clients</span>
              </span>
            </div>
          </div>
          <div className="au-list-div">
            <ul className="au-list-ul">
              <li className="au-list-item">
                <ion-icon name="chevron-forward-outline"></ion-icon>ISO 9001
                Certified
              </li>
              <li className="au-list-item">
                <ion-icon name="chevron-forward-outline"></ion-icon>End-to-End
                Solutions
              </li>
              <li className="au-list-item">
                <ion-icon name="chevron-forward-outline"></ion-icon>
                Industry-Compliant Systems
              </li>
              <li className="au-list-item">
                <ion-icon name="chevron-forward-outline"></ion-icon>Trusted by
                Global Brands
              </li>
              <li className="au-list-item">
                <ion-icon name="chevron-forward-outline"></ion-icon>Experienced
                Engineering Team
              </li>
              <li className="au-list-item">
                <ion-icon name="chevron-forward-outline"></ion-icon>Innovation &
                Co-Creation
              </li>
              <li className="au-list-item">
                <ion-icon name="chevron-forward-outline"></ion-icon>24/7 Support
                Availability
              </li>
            </ul>
          </div>
        </div>

        <CtaForm />
      </div>
    </>
  );
}

export default AboutPage;
