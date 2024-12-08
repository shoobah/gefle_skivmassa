<script>
  // @ts-nocheck
  import "../app.css";
  import Header from "$lib/components/header.svelte";
  import { onNavigate } from "$app/navigation";
  import { state } from "$lib/stores/state.svelte";

  let innerHeight = 0;

  onNavigate((navigation) => {
    if (!document.startViewTransition) {
      return;
    }

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div
  class="main"
  style="--doc-height:{innerHeight}px; --content-height:{innerHeight -
    120 -
    66}px;"
>
  <Header />
  <div class="content">
    <slot />
  </div>
</div>

<svelte:window bind:innerHeight />
<svelte:body on:click={() => ($state.menuVisible = false)} />
