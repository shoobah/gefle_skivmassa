/** @type {import('./$types').PageLoad} */
// @ts-nocheck
export const prerender = true;

export async function load() {
	return {
		bands: [
			{
				name: 'Children of the Sün',
				image: '/images/CotS/Children of the Sün 3_Photo Erik Hansen.jpg',
				logo: '/images/CotS/Logo - Children of the Sun - White.png',
				photoBy: 'Erik Hansen',
				fbLink: 'https://www.facebook.com/Childrenofthesuun/',
				otherLinks: [
					{
						title: 'Children of the Sün på Bandcamp',
						href: 'https://childrenofthesunofficial.bandcamp.com/music',
					},
				],
				heading: '18:30 Children of the Sün',
				description: `Med en blandning av rock, blues och folkmusik har
				Arvika-bandet ett sound som är retro, men
				samtidigt rätt i tiden; klassisk stämsång och nostalgiska riff som på ett psykedeliskt och själfullt sätt
				framkallar känslor av frihet, kärlek och en stark koppling
				till naturen.`,
			},
			{
				name: 'Vokonis',
				image: '/images/Vokonis/Vokonis photo Robert Hellström.jpg',
				logo: '/images/Vokonis/Vokonis_logo.jpg',
				photoBy: 'Robert Hellström',
				fbLink: 'https://www.facebook.com/OfficialVokonis/',
				otherLinks: [
					{ title: 'Vokonis på Bandcamp', href: 'https://vokonis.bandcamp.com/album/odyssey' },
				],
				heading: '19:30 Vokonis',
				description: `Förkrossande fuzztyngd och oresonligt domedagsmangel samsas med bitterljuvt melankoliska
				melodier när Vokonis
				ömt kör över lyssnaren såväl från scenen som på skiva. En ändlös ökenkaravan
				av släpiga riff och progressivt psykedeliska drömpassager
				.
				Vokonis
				-
				en upplevelse bortom liv och
				död.`,
			},
			{
				name: 'Horndal',
				image: '/images/Horndal/FAV-Horndal_210106_Lake_HZ_01-1.jpg',
				logo: '/images/Horndal/horndal_logo_neg_trans.png',
				photoBy: '',
				fbLink: 'https://www.facebook.com/horndalmusic/',
				otherLinks: [
					{ title: 'Horndal på Bandcamp', href: 'https://horndal.bandcamp.com/album/lake-drinker' },
				],
				heading: '20:40 Horndal',
				description: `Horndal är bandet, Horndal är också den lilla bruksorten i Dalarna vars järnverk lades ner och
				samhället lämnades vind för våg, att vittra sönder och rosta i ensamhet. Bandets senaste album, Lake Drinker, 
				är en mörk historia smidd av lika delar kongenial hårdrocksdjävulsmyt och socialrealistisk
				verklighet. Det handlar om den oheliga alliansen mellan urgammal folktro och ultramoderna
				techjättar. Horndals kompromisslösa hårdrock är resultatet av en bruksorts kompromisser och avtal
				med Mammon och Djävulen. Samhällets eftermäle är avfolkning, kalhyggen, en fördärvad sjö`,
			},

			{
				name: 'Witchcraft',
				image: '/images/Witchcraft/WITCHCRAFT2022.jpg',
				logo: '/images/Witchcraft/Witchcraft Logo White.png',
				photoBy: 'Ronan Goasdoué',
				fbLink: 'https://www.facebook.com/witchcraft/',
				otherLinks: [{ title: 'Hemsida', href: 'https://witchcraftband.com/' }],
				heading: '22:00 Witchcraft',
				description: `I snart ett kvarts sekel har Witchcraft, med häxmästaren Magnus Pelander i spetsen, frammanat
				svartmagisk och sinnesutvidgande hårdrock med rötterna i 70-talets experimentella och psykedeliska
				anda. Sex plattor har det blivit, det ena bättre än det andra, med plågade, existentiella, vemodiga
				och suggestiva domedagsmelodier som gjorda för att avsluta en skivmässa i Gasklockorna.`,
			},
		],
		bands_retort: [
			{
				name: 'Josephine Sundblad',
				image: '/images/Retorten/GSM Josephine Skoglund INSTAGRAM.jpg',
				links: undefined,
				heading: '13:00 Josephine Sundblad',
				description: `Söderhamnstjejen Josephine Sundblad har sysslat och pluggat med musik hela sitt liv. 
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
