<script>
	import { state } from '$lib/stores/state';
</script>

<svelte:head>
	<meta name="description" content="Gefle Skivmässa. Startsida" />
</svelte:head>

<div class="page-content">
	<div class="imagebox">
		<img src="/images/FrontPoster.jpg" alt="Poster" />
	</div>
	<div>
		<a href={$state.ticketLink} target="_blank" rel="noreferrer">
			<img class="ticketButton" src="/icons/Köp biljett.png" alt="Köp biljetter" />
		</a>
	</div>
	<div class="logos-content">
		<div style="grid-row:1">
			<a href="https://www.gavle.se/" target="_blank" rel="noreferrer">
				<img class="kommun" src="/icons/Gavle_kommun.svg" alt="Gävle kommun" />
			</a>
		</div>
		<div>
			<a href="https://www.medborgarskolan.se/" target="_blank" rel="noreferrer">
				<img src="/icons/mebo_vit.svg" alt="Medborgarskolan" />
			</a>
		</div>
		<div>
			<a
				href="https://www.regiongavleborg.se/kultur/verksamhet/musik/"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/icons/region_gavleborg vit.svg" alt="Region gävleborg" />
			</a>
		</div>
		<div>
			<a href="https://www.gavle.se/gasklockorna" target="_blank" rel="noreferrer">
				<img src="/icons/gasklockorna loggo.png" alt="Gasklockorna" />
			</a>
		</div>
		<div>
			<a href="https://www.folkbildningsforum.se/" target="_blank" rel="noreferrer">
				<img src="/icons/Folkbildningsforum_Logo_Liggande.png" alt="Folkbildningsforum" />
			</a>
		</div>
		<div>
			<a href="https://musikhuset.nu/" target="_blank" rel="noreferrer">
				<img src="/icons/musikhuset-liggande.png" alt="Musikhuset" />
			</a>
		</div>
		<div>
			<a
				href="https://bookings.elite.se/ibe/details.aspx?propertyid=16745&nights=1&checkin=2023-05-06&group=8036464"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/icons/EliteGrand_logo.png" alt="Elite Grand Gävle" />
			</a>
		</div>
		<div>
			<img src="/icons/gunvor_goransson.svg" alt="Gunvor Göranssons Kulturstiftelse" />
		</div>
	</div>
</div>

<style>
	.page-content {
		display: grid;
		justify-items: center;
		gap: 20px;
		padding-top: 20px;
	}
	a {
		color: var(--text-color);
		text-decoration: underline;
		font-size: 1.5rem;
	}

	.ticketButton {
		width: 20vw;
		max-width: 200px;
		min-width: 100px;
	}
	.imagebox {
		display: grid;
		grid-auto-flow: column;
		gap: 10px;
	}

	.logos-content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		justify-items: center;
		align-items: center;
		width: 70vw;
		justify-items: center;
	}

	.logos-content img {
		height: 40px;
	}
	@media (max-width: 888px) {
		.imagebox img {
			width: 80vw;
		}

		.logos-content {
			grid-template-columns: repeat(2, 1fr);
			width: 90vw;
		}
	}
</style>
