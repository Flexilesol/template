import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Taelyr from "../../../public/assets/imgs/Home/Testimonals/Taelyr.png";
import Danny from "../../../public/assets/imgs/Home/Testimonals/Danny.png";
import Floyd from "../../../public/assets/imgs/Home/Testimonals/Floyd.png";
import Kristin from "../../../public/assets/imgs/Home/Testimonals/Kristin.png";
import Image from "next/image";
import { FreeMode, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const TESTIMONALS = [
  {
    image: Taelyr,
    name: "Taelyr Simmons",
    description:
      "Working with them was an absolute pleasure. Their clarity of communication and insightful suggestions for improving my requirements were warmly embraced and flawlessly executed.",
  },
  {
    image: Floyd,
    name: "Floyd Miles",
    description:
      "I had the pleasure of working with them, they delivered an exceptional job. Their expertise, professionalism, and attention to detail were truly commendable.",
  },
  {
    image: Danny,
    name: "Danny A.Yousuf",
    description:
      "The team quickly grasped the details of the project, both technically and conceptually. | strongly recommend working with them.",
  },

  {
    image: Kristin,
    name: "Kristin Watson",
    description:
      "This team remains the best! They're amazing, flexible, and work harder than most people! The team performs miracles everyday, and | am so grateful for finding them; they just get stuff done. There is no one else like them! Would strongly advise anyone to work with this team.",
  },
];

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV2 = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList?.current?.children ?? [];
      console.log(listItem);
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.context(() => {
        let home1_services = gsap.utils.toArray(".animation_home1_service");
        let service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        let service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        let service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        let service__link = gsap.utils.toArray(
          ".animation_home1_service .service__link p"
        );

        home1_services.forEach((service, i) => {
          gsap.set(
            [
              service__number[i],
              service__title[i],
              service__text[i],
              service__link[i],
            ],
            { opacity: 0, x: -50 }
          );

          let home1ServiceTl = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center+=300",
              end: "bottom bottom",
              markers: false,
            },
          });

          home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2,
          });
          home1ServiceTl.to(
            service__title[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area service-v2 pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">testimonial</h2>
                <h3 className="sec-title title-anim">
                  Established History of <br />
                  Success
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  With every single one of our clients we bring forth a deep
                  passion for <span>creative problem solving innovations</span>{" "}
                  forward thinking brands boundaries
                </p>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  {TESTIMONALS?.map((testimonal, index) => (
                    <Image
                      key={testimonal?.name}
                      priority
                      width={280}
                      style={{ height: "auto" }}
                      src={testimonal?.image}
                      alt="Service Image"
                      className={
                        activeImg == index + 1
                          ? `service__img img-${index + 1} active`
                          : `service__img img-${index + 1}`
                      }
                    />
                  ))}

                  {TESTIMONALS?.map((_, index) => (
                    <span
                      key={index}
                      className={
                        activeShape == index + 1
                          ? `shapes shape-box-${index + 1} current`
                          : `shapes shape-box-${index + 1}`
                      }
                    ></span>
                  ))}
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div className="service__list" ref={serviceList}>
                  {TESTIMONALS?.map((testimonal, index) => (
                    <Link
                      href="/"
                      className={activeList == index + 1 ? "active" : ""}
                      data-service={`${index + 1}`}
                      key={testimonal?.name}
                    >
                      <div className="service__item animation_home1_service">
                        <div className="service__number">
                          <span>
                            {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                          </span>
                        </div>
                        <div className="service__title-wrapper">
                          <h4 className="service__title">{testimonal?.name}</h4>
                        </div>
                        <div className="service__text">
                          <p>{testimonal.description}</p>
                        </div>
                        <div className="service__link">
                          <p>
                            {/* <i className="fa-solid fa-arrow-left"></i> */}
                            <i class="fa-solid fa-quote-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container client-testimonals">
            <div className="row">
              <div className="col-xxl-12">
                <div>
                  <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={1}
                    freeMode={true}
                    loop={true}
                    speed={2000}
                    navigation={{
                      prevEl: ".prev-button",
                      nextEl: ".next-button",
                    }}
                    className="testimonial__slider-3"
                  >
                    <div className="swiper-wrapper">
                      {TESTIMONALS?.map((testimonal) => (
                        <SwiperSlide key={testimonal?.name}>
                          <div className="testimonial__slide-3">
                            <p>{testimonal?.description}</p>
                            <h2 className="client__name-3">
                              {testimonal.name}
                            </h2>
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      className="next-button swipper-btn"
                    >
                      <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      className="prev-button swipper-btn"
                    >
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceElementV2;
