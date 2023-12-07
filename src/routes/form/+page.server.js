import postmark from 'postmark';

export const prerender = false;
/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      var client = new postmark.ServerClient('034d9f51-910d-410f-975b-b5df8e2dddd8');
      await client.sendEmail({
        From: import.meta.env.VITE_SMTP_FROM,
        To: import.meta.env.VITE_SMTP_TO,
        Subject: 'Anmälan till Gefle skivmassa 2024',
        TextBody:
          'Förnamn: ' +
          data.get('firstName') +
          '\nEfternamn: ' +
          data.get('lastName') +
          '\nE-post: ' +
          data.get('email') +
          '\nTelefon: ' +
          data.get('phone') +
          '\nAdress: ' +
          data.get('address') +
          '\nOrg eller personnr: ' +
          data.get('org') +
          '\nAntal bord: ' +
          data.get('numberOfTables') +
          '\nKommentar: ' +
          data.get('comment'),
        MessageStream: 'outbound',
      });
    } catch (error) {
      console.log('Error while sending email', error);
      return { success: false };
    }

    return { success: true };
  },
};
