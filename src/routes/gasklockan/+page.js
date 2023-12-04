/** @type {import('./$types').PageLoad} */
// @ts-nocheck
export async function load() {
	return {
		bands: [
			{
				name: 'Children of the Sün',
				image: '/images/Gas/children of the sun_2.jpg',
				links: [
					{
						title: 'Facebook',
						href: 'https://www.facebook.com/Childrenofthesuun/',
					},
					{
						title: 'Bandcamp',
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
				image: '/images/Gas/Vokonis.jpg',
				links: [
					{ title: 'Facebook', href: 'https://www.facebook.com/OfficialVokonis/' },
					{ title: 'Bandcamp', href: 'https://vokonis.bandcamp.com/album/odyssey' },
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
				image: '/images/Gas/Horndal.jpg',
				links: [
					{ title: 'Facebook', href: 'https://www.facebook.com/horndalmusic/' },
					{ title: 'Bandcamp', href: 'https://horndal.bandcamp.com/album/lake-drinker' },
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
				image: '/images/Gas/Witchcraft Gefle Skivmaassa.jpg',
				links: [
					{ title: 'Facebook', href: 'https://www.facebook.com/witchcraft/' },
					{ title: 'Hemsida', href: 'https://witchcraftband.com/' },
				],
				heading: '22:00 Witchcraft',
				description: `I snart ett kvarts sekel har Witchcraft, med häxmästaren Magnus Pelander i spetsen, frammanat
				svartmagisk och sinnesutvidgande hårdrock med rötterna i 70-talets experimentella och psykedeliska
				anda. Sex plattor har det blivit, det ena bättre än det andra, med plågade, existentiella, vemodiga
				och suggestiva domedagsmelodier som gjorda för att avsluta en skivmässa i Gasklockorna.`,
			},
		],
	};
}
