import * as AWS from 'aws-sdk';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);

		AWS.config.loadFromPath('./config.json');
		const params = {
			Destination: {
				ToAddresses: ['info@gefleskivmassa.se']
			},
			Source: 'info@gefleskivmassa.se',
			Message: {
				Subject: {
					Charset: 'UTF-8',
					Data: 'New message from Gefleskivmassa'
				},
				Body: {
					Text: {
						Charset: 'UTF-8',
						Data:
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
					}
				}
			}
		};

		var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

		sendPromise
			.then(function (data) {
				console.log(data.MessageId);
			})
			.catch(function (err) {
				console.error(err, err.stack);
			});
	}
};
