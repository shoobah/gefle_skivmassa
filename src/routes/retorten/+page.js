/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		bands: [
			{
				name: 'Josephine Skoglund',
				image: '/images/Retorten/GSM Josephine Skoglund INSTAGRAM.jpg',
				links: undefined,
				heading: '13:00 Josephine Skoglund',
				description: `Söderhamnstjejen Josephine Skoglund har sysslat och pluggat med musik hela sitt liv. 
				Att få sjunga inför folk, att lyckas beröra publiken är något av det bästa med att stå på scenen. 
				I Josephines repertoar finns både blues, pop, country och soul`,
			},
			{
				name: 'Ryggrad',
				image: '/images/Retorten/GSM RyggradINSTAGRAM.jpg',
				links: [
					{
						title: 'Spotify',
						href: 'https://open.spotify.com/artist/0MpfZnvT5mVp9lYVPCBzEn?si=HzxBf2UNR1Ocx3OvdpDdVA',
					},
					{
						title: 'Facebook',
						href: 'https://www.facebook.com/ryggrad',
					},
				],
				heading: '15:00 Ryggrad',
				description: `Med texter på svenska och låtar med ett driv från rot och rock kör Ryggrad med spelglädje och energi
				som kan skifta från politisk ilska till humoristisk ironi eller ren och hudlös äkthet.
				Alltid med största kärlek till låten, texten och musiken.`,
			},
			{
				name: 'Lucille',
				image: '/images/Retorten/GSM Lucille INSTAGRAM.jpg',
				links: [
					{
						title: 'Facebook',
						href: 'https://www.facebook.com/officiallucille',
					},
					{
						title: 'Instagram',
						href: 'https://www.instagram.com/lucilletheband/',
					},
				],
				heading: '17:00 Lucille',
				description: `Rocktrio från Gävle med rötter i både blues, alternativ rock och grunge!
				Spelar just nu in sin debut-EP så räkna med ett spelsuget band på scenen!`,
			},
			{
				name: 'The Linesmen',
				image: '/images/Retorten/GSM Linesmen INSTAGRAM.jpg',
				links: [
					{
						title: 'Soundcloud',
						href: 'https://on.soundcloud.com/8hQ4R',
					},
					{
						title: 'Facebook',
						href: 'https://www.facebook.com/KatyushaSweden',
					},
				],
				heading: '19:15 The Linesmen',
				description: `Bandet som i 22 år kallade sig Katyusha har konsekvent undvikit stil, strömmar och sammanhang
				-
				en gång med ena foten i post-punk, den andra i post-grunge. Balanserande med fiolstråken i den ena handen och manifestet i den andra. 
				Efter invasionen av Ukraina blev den gamla ryska folksången, 
				om flickan som väntar på sin soldat, allt för osmaklig som bandnamn
				-
				så de som alltså tidigare kallade sig Katyusha kommer därmed till skivmässan under det nya namnet: the Linesmen.`,
			},
			{
				name: 'Nonsa',
				image: '/images/Retorten/GSM Nonsa INSTAGRAM.jpg',
				links: [
					{
						title: 'Spotify',
						href: 'https://open.spotify.com/artist/6veF3rFsK5WwCg8MKTq70b?si=mrfRpUUMQ7mraAQuyXk5ww',
					},
					{
						title: 'Facebook',
						href: 'https://www.facebook.com/profile.php?id=100063451609989',
					},
				],
				heading: '21:00 Nonsa',
				description: `Gävlekvartetten
				Nonsa är ett gitarrdrivet band med influenser från indierock och punk med texter på svenska.
				Ett explosivt surfigt sound med gitarrsolon,
				höga trummor och pumpande bas blandas med lugna, svävande och melodiska bitar. Modern svensk indie med andra ord!`,
			},
		],
	};
}
