import { COMPANY_INFO } from "@/constants";
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const _validate = () => {
    let isValid = true;
    if (_.isEmpty(name)) {
      setNameError("Name is required");
      isValid = false;
    } else if (_.isEmpty(name?.trim())) {
      setNameError("Only Whitespaces are not allowed.");
      isValid = false;
    }

    if (_.isEmpty(email)) {
      setEmailError("Email is required");
      isValid = false;
    } else if (_.isEmpty(email?.trim())) {
      setEmailError("Only Whitespaces are not allowed.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid Email");
      isValid = false;
    }

    if (_.isEmpty(phone)) {
      setPhoneError("Phone Number is required");
      isValid = false;
    } else if (_.isEmpty(phone?.trim())) {
      setPhoneError("Invalid phone number.");
      isValid = false;
    }

    if (_.isEmpty(subject)) {
      setSubjectError("Subject is required");
      isValid = false;
    } else if (_.isEmpty(subject?.trim())) {
      setSubjectError("Only Whitespaces are not allowed.");
      isValid = false;
    }

    if (_.isEmpty(message)) {
      setMessageError("Message is required");
      isValid = false;
    } else if (_.isEmpty(message?.trim())) {
      setMessageError("Only Whitespaces are not allowed.");
      isValid = false;
    }

    return isValid;
  };

  const onSubmit = (e) => {
    e?.preventDefault();

    if (_validate()) {
      const data = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      };

      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let’s get in touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  {
                    "Great! We're excited to hear from you and let's start something special togerter. call us for any inquery."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {"Don't be afraid man ! "}
                  <br />
                  say hello
                </h3>
                <ul>
                  <li>
                    <a href={`tel:${COMPANY_INFO.infoPhones}`}>
                      {COMPANY_INFO.infoPhone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${COMPANY_INFO.infoEmail}`}>
                      {COMPANY_INFO.infoEmail}
                    </a>
                  </li>
                  <li>
                    <span>{COMPANY_INFO.address}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form onSubmit={onSubmit}>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={name}
                        onChange={(e) => {
                          setName(e?.target?.value);
                          setNameError("");
                        }}
                      />

                      {nameError && (
                        <span className="contact__form-error">{nameError}</span>
                      )}
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={email}
                        onChange={(e) => {
                          setEmail(e?.target?.value);
                          setEmailError("");
                        }}
                      />

                      {emailError && (
                        <span className="contact__form-error">
                          {emailError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e?.target?.value);
                          setPhoneError("");
                        }}
                      />

                      {phoneError && (
                        <span className="contact__form-error">
                          {phoneError}
                        </span>
                      )}
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        value={subject}
                        onChange={(e) => {
                          setSubject(e?.target?.value);
                          setSubjectError("");
                        }}
                      />

                      {subjectError && (
                        <span className="contact__form-error">
                          {subjectError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Messages *"
                        value={message}
                        onChange={(e) => {
                          setMessage(e?.target?.value);
                          setMessageError("");
                        }}
                      ></textarea>
                      {messageError && (
                        <span className="contact__form-error">
                          {messageError}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button className="wc-btn-primary btn-hover btn-item">
                          <span></span> Send <br />
                          Messages <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
