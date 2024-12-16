import { Resend } from "resend";

const resend = new Resend(import.meta.env.VITE_RESEND_KEY);

export const sendMail = async (
  /** @type {string} */ body,
  /** @type {string} */ subject,
) => {
  try {
    const response = await resend.emails.send({
      from: import.meta.env.VITE_SMTP_FROM,
      to: import.meta.env.VITE_SMTP_TO,
      subject: subject,
      text: body,
    });
    console.log(response);
    if (!response?.error) {
      return { success: true };
    }
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
