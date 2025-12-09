import { industryData } from "@/constants/industryData";
import { useParams } from "react-router-dom";
import Contact from "@/components/sections/contact";
import img from "./../assets/industry/cable-tunnels.webp";
export default function IndustryPage() {
  let { category } = useParams();
  //   console.log(useParams());

  let industry = industryData.find((el) => {
    const slug = el.name.toLowerCase().replace(/ /g, "-");
    // console.log(slug);
    // console.log(category);
    return slug === category;
  });

  return (
    <>
      <div className="industryPage">
        <h2 className="industry-title">{industry.name} </h2>
        <div className="industry-text-img">
          <div>
            <p className="industry-heading">{industry.heading}</p>

            <p className="industry-text">{industry.text}</p>
            <ul className="industry-applicaions">
              <h3 className="industry-appli-heading">Applicaions : </h3>
              {industry.applications.map((appli, index) => (
                <li className="industry-appli" key={index}>
                  <span className="material-symbols-rounded industry-appli-icon">
                    check
                  </span>
                  <span>{appli}.</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="industry-img-div">
            <img
              className="industry-img"
              src={
                new URL(`../assets/industry/${category}.webp`, import.meta.url)
                  .href
              }
              alt={category}
            />
          </div>
        </div>

        <div className="industry-icon-div">
          <h3 className="industry-icon-heading">Industry's Risks</h3>
          <ul className="industru-icon-ul">
            {industry.industryPoints.map((pointItem, index) => {
              return (
                <li key={index}>
                  <span className="material-symbols-rounded industry-icon-icon">
                    {pointItem.icon}
                  </span>{" "}
                  <span className="industry-icon-point">{pointItem.point}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="why-box">
          <div className="why-head-box">
            <h3 className="why-heading">
              Why <br />
              Sp Engineering <br />
              And Services ?
            </h3>
          </div>
          <div className="why-points-box">
            <ul className="why-ul">
              {industry.whyChoose.map((point, index) => (
                <li className="why-point" key={index}>
                  {" "}
                  <span class="material-symbols-rounded why-point-icon">
                    check_circle
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dyk-div">
          <p className="industry-dyk-heading">Do you know ?</p>

          <p className="industry-dyk">{industry.didYouKnow}</p>
        </div>

        <Contact />
      </div>
    </>
  );
}
