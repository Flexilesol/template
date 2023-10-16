import { useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

const INDUSTRY_CONTENT = [
  {
    index: "01",
    title: "Health",
    description: `Flexile Sol guarantees strong data security and unwavering compliance commitment in the healthcare sector, effectively mitigating the risks of information breaches.`,
    image: "assets/imgs/Home/Industries/HealthCare.png",
  },
  {
    index: "02",
    title: "B2B",
    description: `Flexile Sol propels B2B triumph, constructing resilient digital bedrocks that expedite growth in the digital landscape, delivering meaningful results for businesses.`,
    image: "assets/imgs/Home/Industries/B2B.png",
  },
  {
    index: "03",
    title: "E-Commerce",
    description: `In this age of online retail, Flexile Sol leads the way in pioneering innovative solutions to meet the ever-changing needs of the dynamic digital market.`,
    image: "assets/imgs/Home/Industries/Ecommerce.png",
  },
  {
    index: "04",
    title: "E-Learning",
    description: `Discover contemporary, tailored eLearning applications, meticulously crafted to captivate learners with intuitive interfaces, delivering exceptional educational journeys.`,
    image: "assets/imgs/Home/Industries/ELearning.png",
  },
  {
    index: "05",
    title: "Fintech",
    description: `Harness the technological expertise of Flexile Sol to seamlessly integrate technology into the delivery and accessibility of financial services for consumers.`,
    image: "assets/imgs/Home/Industries/Fintech.png",
  },
  {
    index: "06",
    title: "Hospital",
    description: `From bookings to check-out, our hospitality proficiency tailors unique guest experiences, harnessing our mastery of hospitality technology solutions.`,
    image: "assets/imgs/Home/Industries/Hospital.png",
  },
  {
    index: "07",
    title: "Travel",
    description: `Embark on a travel evolution with our groundbreaking solutions, streamlining operations and elevating customer experiences for travel agencies, airlines, hotels, and tour operators.`,
    image: "assets/imgs/Home/Industries/Travel.png",
  },
];

gsap.registerPlugin(ScrollTrigger);

const CreativeAgencyTeam = () => {
  const teamItemContent = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const team_item_7 = teamItemContent.current.children;

      function teamImageAnimation(event, team_item_7) {
        const contentBox = team_item_7.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        team_item_7.children[0].children[2].style.transform = `translate(${dx}px, ${dy}px)`;
      }
      for (let i = 0; i < team_item_7.length; i++) {
        team_item_7[i].addEventListener("mousemove", (event) => {
          setInterval(teamImageAnimation(event, team_item_7[i]), 1000);
        });
      }
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_3");
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
          gsap.to(".fade_bottom_3", {
            scrollTrigger: {
              trigger: ".fade_bottom_3",
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
      <section className="team__area-7">
        <h2 className="team__title-7 title-anim">Industries</h2>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-text pb-100 text-anim">
                <p>
                  Welcome the future with Flexile Sol's visionary application
                  development solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="team__items-7" ref={teamItemContent}>
                {INDUSTRY_CONTENT?.length > 0 &&
                  INDUSTRY_CONTENT.map((industry) => (
                    <Link href="/" key={industry?.title}>
                      <div className="team__item-7 fade_bottom_3">
                        <div>
                          <div className="team__name-wrap-7">
                            <p className="tm-serial">{industry?.index}</p>

                            <h3 className="tm-name">{industry?.title}</h3>
                          </div>

                          <h4 className="tm-role">{industry.description}</h4>
                        </div>

                        <div className="tm-link">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>

                        <div
                          className="team__hover-7"
                          style={{
                            backgroundImage: `url(${industry?.image})`,
                          }}
                        ></div>
                      </div>
                    </Link>
                  ))}

                <div className="team7__img-wrap">
                  <div className="team7__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyTeam;
