import { sendMail } from "$lib/mailer.js";
export const prerender = false;

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const subject = "Jobba på Gefle Skivmassa";
    const body = `Förnamn: ${data.get("firstName")}
	Efternamn: ${data.get("lastName")}
	E-post: ${data.get("email")}
	Telefon: ${data.get("phone")}
	Stad: ${data.get("city")}
	Jobba med: ${data.get("work")}
	Kommentar: ${data.get("comment")}`;
    return sendMail(body, subject);
  },
};
