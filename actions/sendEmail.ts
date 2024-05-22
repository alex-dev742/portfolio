"use server";

import { Resend } from "resend";
import { validateString } from "../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // server-side validation

  if (!validateString(senderEmail, 500)) {
    return {
      status: 400,
      body: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      status: 400,
      body: "Invalid message",
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "alexvdberg010109@gmail.com",
    subject: "New message from your portfolio",
    text: message as string,
    reply_to: senderEmail as string,
  });
};
