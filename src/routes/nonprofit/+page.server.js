import { transporter } from '$lib/aws/mail';
export const prerender = false;

export const actions = {
	// @ts-ignore
	default: async ({ request }) => {
		const data = await request.formData();

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
			subject: 'Jobba på Gefle Skivmassa',
			text:
				'Förnamn: ' +
				data.get('firstName') +
				'\nEfternamn: ' +
				data.get('lastName') +
				'\nE-post: ' +
				data.get('email') +
				'\nTelefon: ' +
				data.get('phone') +
				'\nStad: ' +
				data.get('city') +
				'\nJobba med: ' +
				data.get('work') +
				'\nKommentar: ' +
				data.get('comment')
		};

		let response = false;
		await new Promise((resolve, reject) => {
			transporter.sendMail(message, function (err, info) {
				if (err) {
					console.error(err);
					response = false;
					reject(err);
				} else {
					console.log(info);
					response = true;
					resolve(info);
				}
			});
		});

		return { success: response };
	}
};
