import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";

const Faq1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  FAQ
                </h2>
                <p className="">
                  Comprehensive Insights into Custom <br /> Application
                  Development Services
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                <Accordion
                  defaultActiveKey=""
                  className="accordion"
                  id="accordionExample"
                >
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      What are custom application development services?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Custom Application development services involve the
                        process of designing, creating, and maintaining software
                        applications for various platforms, such as mobile, web,
                        or desktop. These services encompass the entire
                        development lifecycle, from initial planning and design
                        to coding, testing, and deployment, ensuring the
                        delivery of functional and user-friendly applications.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                      What is the advantage of a custom application Development
                      company?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        A custom application development company offers the
                        advantage of tailored solutions specifically designed to
                        meet the unique requirements of a business or
                        organization. This results in increased efficiency,
                        improved productivity, and the ability to address
                        specific business needs and processes, leading to a
                        competitive edge in the market.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingThree"
                    >
                      Can custom app development be tailored to my specific
                      business needs?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Yes, the best custom application development services
                        can be tailored to your specific business needs. They
                        are designed and developed to address the unique
                        requirements, workflows, and processes of your business,
                        ensuring a perfect fit and providing a solution that
                        aligns precisely with your goals and objectives.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFour"
                    >
                      How long does it take to develop a custom application?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        The development timeline for custom applications varies
                        based on project complexity, feature scope, and
                        available resources, ranging from a few months for
                        smaller projects to several months or longer for complex
                        ones. Effective planning, clear requirements, and
                        efficient development practices can help streamline and
                        shorten the overall development time.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      What is the cost associated with custom application
                      development services?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        The cost associated with custom application development
                        solutions can vary significantly depending on factors
                        such as project complexity, required features,
                        development time, and the expertise of the development
                        team.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq1;
