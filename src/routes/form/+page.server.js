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
			from: 'info@gefleskivmassa.se',
			to: 'info@gefleskivmassa.se',
			subject: 'Nytt meddelande från Gefleskivmassa',
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

		await new Promise((resolve, reject) => {
			transporter.sendMail(message, function (err, info) {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					console.log(info);
					resolve(info);
				}
			});
		});
	}
};
