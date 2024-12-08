import { sendMail } from "$lib/mailer";

export const prerender = false;
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const body = `Förnamn: ${data.get("firstName")}
    Efternamn: ${data.get("lastName")}
    E-post: ${data.get("email")}
    Telefon: ${data.get("phone")}
    Adress: ${data.get("address")}
    Org eller personnr: ${data.get("org")}
    Antal bord: ${data.get("numberOfTables")}
    Kommentar: ${data.get("comment")}`;
    const subject = "Anmälan till Gefle skivmassa 2025";
    return sendMail(body, subject);
  },
};
