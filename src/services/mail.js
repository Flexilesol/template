import Error from "next/error";

const sgMail = require("@sendgrid/mail");

export const sendEmail = async (name, email, phone, subject, message) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "flexilesol@gmail.com",
    from: "info@flexilesol.com", // Use the email address or domain you verified above
    subject: subject,
    html: `name: <b>${name}</b><br/>email: <b>${email}</b><br/> phone: <b>${phone}</b><br/> subject: <b>${subject}</b><br/> message: <b>${message}</b><br/>`,
  };
  //ES6
  try {
    const res = await sgMail.send(msg);
    console.log(res, "Email sent");
    return res;
  } catch (error) {
    console.error("sendEmail", error, error?.response?.body);
    throw new Error(error);
  }
};
