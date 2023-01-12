import * as nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
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
