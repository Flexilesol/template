import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import MobileIcon from "../../../public/assets/imgs/home-7/Services/mobile.svg";
import service1 from "../../../public/assets/imgs/Home/Services/Consulting.png";
import Image from "next/image";
import { Accordion } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

const CONTENT = [
  {
    eventKey: "0",
    title: "Consulting",
    number: "01",
    body: `Prepare for a tech adventure infused with Flexile Sol's enchanting touch. Our tech wizards stand ready to craft an IT strategy that harmonizes seamlessly with your business objectives.`,
  },
  {
    eventKey: "1",
    title: "Implementation",
    number: "02",
    body: `Our streamlined implementation approach empowers us to navigate intricacies while enhancing user experiences through data assimilation and project evaluation.`,
  },
  {
    eventKey: "2",
    title: "Resource Augmentation",
    number: "03",
    body: `As your dedicated partners in business process outsourcing, we make your strategic goals our top priority. Our team comprises highly skilled professionals adhering to global standards, enabling you to expand your IT workforce and trim hiring timelines and overhead expenses.`,
  },
];

const StartupAgencyService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
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
          gsap.to(".fade_bottom_2", {
            scrollTrigger: {
              trigger: ".fade_bottom_2",
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
    <>
      <section className="service__area-4">
        <div className="container g-0 line_4 pt-150 pb-140">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <div className="service__left-6">
                <h2 className="sec-subtile-6">Services</h2>
                <h3 className="sec-title-6 title-anim">
                  Innovative <br /> Creative Solutions <br />
                </h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="service__right-4">
                <p>
                  We aren't simply crafting applications; we are architecting
                  solutions that breathe life into your business,{" "}
                  <span>helping it flourish and prosper.</span>
                </p>
                <Link className="btn-view" href="/">
                  View All Service <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="service__inner-4">
            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                <div className="service__img-left">
                  <Image
                    priority
                    width={430}
                    style={{ height: "auto" }}
                    src={service1}
                    alt="Service"
                  />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="faq__list-6">
                      <Accordion
                        defaultActiveKey="0"
                        className="accordion"
                        id="accordionExample"
                      >
                        {[...CONTENT].map((item, i) => (
                          <Accordion.Item
                            eventKey={item?.eventKey}
                            className="accordion-item"
                            key={item?.eventKey}
                          >
                            <Accordion.Header
                              // className="accordion-header"
                              className="service__item-4 fade_bottom_2"
                              id="headingOne"
                            >
                              <div className="service__item-number">
                                <span> {item?.number} </span>
                              </div>
                              <div className="service__title-wrapper-4">
                                <h4 className="service__item-title">
                                  {item?.title}
                                </h4>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body className="accordion-body">
                              <p>{item?.body}</p>

                              <div className="accordion-body_tags">
                                <div className="accordion-body_tags-item">
                                  <Image
                                    src={MobileIcon}
                                    height={32}
                                    width={30}
                                  />

                                  <span>Mobile Development</span>
                                </div>

                                <div className="accordion-body_tags-item">
                                  <Image
                                    src={MobileIcon}
                                    height={32}
                                    width={30}
                                  />

                                  <span>Mobile Development</span>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>

                {/* <div className="service__list-4">
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                      <span>01</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          Brand Strategy
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                      <span>02</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          Development
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                      <span>03</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          UI/UX Design
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                      <span>04</span>
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          Digital marketing
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyService;
