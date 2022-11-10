import * as nodemailer from 'nodemailer';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const transporter = nodemailer.createTransport({
			host: 'email-smtp.eu-north-1.amazonaws.com',
			port: 465,
			secure: true,
			debug: true,
			secureConnection: false,
			tls: {
				ciphers: 'SSLv3'
			},
			auth: {
				user: import.meta.env.VITE_SMTP_USERNAME,
				pass: import.meta.env.VITE_SMTP_PASSWORD
			}
		});

		transporter.verify(function (error) {
			if (error) {
				console.log(error);
			} else {
				console.log('SMTP server is ready to take our messages');
			}
		});

		const message = {
			from: import.meta.env.VITE_SMTP_FROM,
			to: import.meta.env.VITE_SMTP_TO,
			subject: 'Anmälan till Gefleskivmassa',
			text:
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
				data.get('comment')
		};

		let response = false;
		transporter.sendMail(message, function (err, info) {
			if (err) {
				console.error(err);
				response = false;
			} else {
				console.log(info);
				response = true;
			}
		});

		return { success: response };
	}
};
