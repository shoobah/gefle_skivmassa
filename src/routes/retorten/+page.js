/** @type {import('./$types').PageLoad} */
// @ts-nocheck
import JosephineSkoglund from '$lib/images/Retorten/GSM Josephine Skoglund INSTAGRAM.jpg?w=500&webp';
import Linesmen from '$lib/images/Retorten/GSM Linesmen INSTAGRAM.jpg?w=500&webp';
import Nonsa from '$lib/images/Retorten/GSM Nonsa INSTAGRAM.jpg?w=500&webp';
import Ryggrad from '$lib/images/Retorten/GSM RyggradINSTAGRAM.jpg?w=500&webp';
import TrickySmile from '$lib/images/Retorten/GSM Tricky smile INSTAGRAM.jpg?w=500&webp';

export async function load() {
	return {
		bands: [
			{
				name: 'Josephine Skoglund',
				image: JosephineSkoglund,
				link: 'https://www.facebook.com/'
			},
			{
				name: 'Linesmen',
				image: Linesmen,
				link: 'https://www.facebook.com/'
			},
			{
				name: 'Nonsa',
				image: Nonsa,
				link: 'https://www.facebook.com/'
			},
			{
				name: 'Ryggrad',
				image: Ryggrad,
				link: 'https://www.facebook.com/'
			},
			{
				name: 'Tricky Smile',
				image: TrickySmile,
				link: 'https://www.facebook.com/'
			}
		]
	};
}
