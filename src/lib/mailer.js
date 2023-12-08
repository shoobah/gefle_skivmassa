import postmark from 'postmark';

export const sendMail = async (/** @type {string} */ body, /** @type {string} */ subject) => {
  try {
    var client = new postmark.ServerClient(import.meta.env.VITE_POSTMARK_API_KEY);
    await client.sendEmail({
      From: import.meta.env.VITE_SMTP_FROM,
      To: import.meta.env.VITE_SMTP_TO,
      Subject: subject,
      TextBody: body,
      MessageStream: 'outbound',
    });
  } catch (error) {
    console.log('Error while sending email', error);
    return { success: false };
  }
  return { success: true };
};
