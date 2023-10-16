import { gsap } from "gsap";
import Link from "next/link";
import { useEffect } from "react";

const Holistic = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <div className="holistic">
      <section className="portfolio-section portfolio__service pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <h2 className="sec-title fade_bottom">
                Catering to Diverse Needs
              </h2>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-text fade_bottom">
                <p className="fade_bottom">
                  Static and dynamic secure code review can prevent a 0day
                  before your product is even released. We can integrate with
                  your dev environment
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio__service-list">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__service-item fade_bottom">
                  <Link href="/service-details fade_bottom">
                    <h3 className="ps-title ">Enterprises</h3>
                    <p className="ps-description">
                      Elevate your business with our expansive suite of
                      customized application development services, embracing the
                      latest technologies to enhance your growth.
                    </p>
                    <ul>
                      <li>+ Custom software development</li>
                      <li>+ Digital Transformation</li>
                      <li>+ Application and system Modernization</li>
                      <li>+ Resource Augmentation</li>
                    </ul>
                  </Link>

                  <div className="portfolio__service-item_videoWrapper"></div>
                </div>
              </div>

              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__service-item fade_bottom">
                  <Link href="/service-details fade_bottom">
                    <h3 className="ps-title ">Startups</h3>
                    <p className="ps-description">
                      Fueling startups with our bespoke app development
                      services, nurturing business growth from day one. Our
                      Proof of Concept (POC) MVP solutions pave the way:
                    </p>
                    <ul>
                      <li>+ Series A,B,C, and Mezzanine</li>
                      <li>+ Post Mezzanine</li>
                      <li>+ Pre Seed</li>
                      <li>+ Seed</li>
                    </ul>
                  </Link>

                  <div className="portfolio__service-item_videoWrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Holistic;
