import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AHA from "../../../public/assets/imgs/Home/Portfolio/AHA.png";
import DORADO from "../../../public/assets/imgs/Home/Portfolio/DORADO.png";
import TradeKode from "../../../public/assets/imgs/Home/Portfolio/TradeKode.png";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PORTFOLIO = [
  {
    title: "AHA",
    image: AHA,
    link: "/",
    description: "Agriculture and Horticulture",
  },

  {
    title: "Dorado",
    image: DORADO,
    link: "/",
    description: "Agriculture and Horticulture",
  },

  {
    title: "Trade Kode",
    image: TradeKode,
    link: "/",
    description: "Agriculture and Horticulture",
  },
];

const DesignStudioProtfolio = () => {
  return (
    <>
      <section className="portfolio__area-2">
        <div className="container g-0 line pt-100 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <div>
                  <h2 className="title-anim sec-title-33">
                    Explore Our
                    <span>Portfolio</span>
                  </h2>
                </div>
                <p className="sec-text">
                  A Web Design Company Striving to Ride the Wave of Innovation -{" "}
                  <br />
                  Let's Get Started!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__slider-2">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            // spaceBetween={0}
            effect={"fade"}
            // slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".pp-prev",
              nextEl: ".pp-next",
            }}
            pagination={{ el: ".swiper-pagination", type: "fraction" }}
          >
            <div className="swiper-wrapper">
              {PORTFOLIO.map((portfolio) => (
                <SwiperSlide key={portfolio?.title}>
                  <div className="portfolio__slide-2">
                    <div className="slide-img">
                      <Link href={portfolio.link}>
                        <Image
                          priority
                          style={{ width: "100%", height: "auto" }}
                          src={portfolio?.image}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                    <div className="slide-content">
                      <h2 className="sec-title">
                        <Link href={portfolio.link}>
                          {portfolio?.title}{" "}
                          {portfolio?.title2 && <span>Agency</span>}
                        </Link>
                      </h2>
                      <p>{portfolio?.description}</p>
                      <div className="btn-common-wrap">
                        <Link href={portfolio?.link} className="btn-common">
                          View details{" "}
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>

            {/* <div className="swiper-pagination circle-pagination right"></div> */}
            <div className="swiper-pagination"></div>

            <div className="swiper-btn">
              <div style={{ cursor: "pointer" }} className="pp-prev">
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              </div>
              <div style={{ cursor: "pointer" }} className="pp-next">
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;
