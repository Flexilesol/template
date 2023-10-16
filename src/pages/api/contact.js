import { sendEmail } from "@/services/mail";

export default async function handler(req, res) {
  if (req?.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    const body = req.body;

    console.log({ body });
    await sendEmail(
      body.name,
      body.email,
      body.phone,
      body.subject,
      body.message
    );
    res
      .status(200)
      .send({ status: true, message: "Message recieved successfully." });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
}
