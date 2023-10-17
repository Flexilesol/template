import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Thumb1 from "../../../public/assets/imgs/Home/WhatWeDo/Design.png";
import Thumb2 from "../../../public/assets/imgs/Home/WhatWeDo/Development.png";
import Thumb3 from "../../../public/assets/imgs/Home/WhatWeDo/OngoingSupport.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_workflow_6 = gsap.utils.toArray(
          ".animation_workflow_6 .workflow__item-4"
        );
        if (animation_workflow_6) {
          if (device_width < 1023) {
            animation_workflow_6.forEach((item, i) => {
              gsap.from(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 0,
                x: -30,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.from(".animation_workflow_6 .workflow__item-4", {
              scrollTrigger: {
                trigger: ".animation_workflow_6",
                start: "top center+=200",
                markers: false,
              },
              opacity: 0,
              x: -30,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area-4">
        <div className="container line_4 pt-100 pb-130">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row animation_workflow_6">
            <div className="col-xxl-12">
              <div className="title-wrapper-6 text-anim">
                <h2 className="sec-subtile-6">How we work</h2>
                <h3 className="sec-title-6 title-anim">
                  Dealing with Workflow Obstacles?
                </h3>
                <p>
                  Our tailored app development solutions streamline your
                  workflow, liberating your team to concentrate on what truly
                  counts. <br /> Let's Delve Deeper into Your Challenges!
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb1}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Design</h4>
                <p>
                  We merge design research and business analysis to help clients
                  envision their software products.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb2}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Development</h4>
                <p>
                  In the project's next phase, our adept software engineers take
                  the lead, coding diligently to breathe life into the project.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={Thumb3}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Ongoing Support</h4>
                <p>
                  We accommodate change requests, providing solutions that align
                  with the evolving needs and preferences of our clients and
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyWorkflow;
