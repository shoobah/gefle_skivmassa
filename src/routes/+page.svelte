<script>
  import { appState } from "$lib/stores/state.svelte";
  import startimage from "$lib/images/carousel/_PAS6551.jpg";
  // import SoundsFairLogo from "$lib/images/icons/Sounds_Fair_vit.png";

  let mobile = $state(false);

  $effect(() => {
    mobile = window.innerWidth < 888;
  });
</script>

<svelte:head>
  <meta name="description" content="Gefle Skivmässa. Startsida" />
</svelte:head>

<div class="grid justify-items-center gap-5 pt-5">
  <div class="grid auto-cols-max grid-flow-col gap-2.5">
    <a href={appState.ticketLink} target="_blank">
      {#if mobile}
        <img src={startimage} alt="Poster" class="w-[80vw] md:w-[50vw]" />
      {:else}
        <img src={startimage} alt="Poster" class="w-[80vw] md:w-[50vw]" />
      {/if}
    </a>
  </div>
  <div
    class="grid w-[90vw] grid-cols-1 items-center justify-items-end gap-5 md:w-[50vw] md:grid-cols-1"
  >
    <!-- <div>
      <img
        src={SoundsFairLogo}
        alt="Blackbird Artists"
        class="transition-filter h-[30px] brightness-[0.6] duration-200 ease-in-out hover:brightness-100 md:h-[40px]"
      />
    </div> -->
  </div>
  <div>
    <article>
      <p>
        Gefle Skivmässa hålls i Stora Gasklockan, lördag 10 maj mellan kl 12-16.<br
        />
        Entré 50 kr löses på plats med Swish eller kort, alternativt köper du en
        förköpsbiljett.<br />
        Med förköpsbiljett kommer du in redan kl 11:30<br />
        <br />
        <a href={appState.ticketLink}> Förköp </a><br />
        <a href="/form"> Vill du sälja skivor? </a>
      </p>
    </article>
  </div>
</div>
