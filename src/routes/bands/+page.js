/** @type {import('./$types').PageLoad} */
// @ts-nocheck
import WitchcraftLogo from '$lib/images/Witchcraft/Witchcraft Logo White.png?w=1000&webp';
import HorndalLogo from '$lib/images/Horndal/horndal_logo_neg_trans.png?w=1000&webp';
import VokonisLogo from '$lib/images/Vokonis/Vokonis_logo.jpg?w=1000&webp';
import CotSLogo from '$lib/images/CotS/Logo - Children of the Sun - White.png?w=1000&webp';
import WitchcraftImage from '$lib/images/Witchcraft/WITCHCRAFT2022.png?w=1000&webp';
import HorndalImage from '$lib/images/Horndal/FAV-Horndal_210106_Lake_HZ_01-1.jpeg?w=1000&webp';
import VokonisImage from '$lib/images/Vokonis/Vokonis photo Robert Hellström.jpg?w=1000&webp';
import CotSImage from '$lib/images/CotS/Children of the Sün 3_Photo Erik Hansen.jpg?w=1000&webp';

export async function load() {
	return {
		bands: [
			{
				name: 'Witchcraft',
				image: WitchcraftImage,
				logo: WitchcraftLogo,
				photoBy: 'Ronan Goasdoué',
				fbLink: 'https://www.facebook.com/witchcraft/',
				otherLinks: [{ title: 'Hemsida', href: 'https://witchcraftband.com/' }]
			},
			{
				name: 'Horndal',
				image: HorndalImage,
				logo: HorndalLogo,
				photoBy: '',
				fbLink: 'https://www.facebook.com/horndalmusic/',
				otherLinks: [
					{ title: 'Horndal på Bandcamp', href: 'https://horndal.bandcamp.com/album/lake-drinker' }
				]
			},
			{
				name: 'Vokonis',
				image: VokonisImage,
				logo: VokonisLogo,
				photoBy: 'Robert Hellström',
				fbLink: 'https://www.facebook.com/OfficialVokonis/',
				otherLinks: [
					{ title: 'Vokonis på Bandcamp', href: 'https://vokonis.bandcamp.com/album/odyssey' }
				]
			},
			{
				name: 'Children of the Sün',
				image: CotSImage,
				logo: CotSLogo,
				photoBy: 'Erik Hansen',
				fbLink: 'https://www.facebook.com/Childrenofthesuun/',
				otherLinks: [
					{
						title: 'Children of the Sün på Bandcamp',
						href: 'https://childrenofthesunofficial.bandcamp.com/music'
					}
				]
			}
		]
	};
}
