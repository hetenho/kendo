<script lang="ts">
  import Games from './../components/Games.svelte';
  import type { GamesTodayResponse } from '../types/game.ts';

  export let data: GamesTodayResponse;
</script>

<svelte:head>
  <title>Kendo</title>
  <meta name="description" content="Kendo app" />
</svelte:head>

<section>
  <Games {data} />
</section>

<style>
  section {
    padding-inline: 32px;
    margin: auto;
  }
</style>
