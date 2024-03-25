<script>
  import { fade } from "svelte/transition";
  export let url = "";
</script>

{#key url}
  <div in:fade={{ duration: 500, delay: 0 }}>
    <slot />
  </div>
{/key}
