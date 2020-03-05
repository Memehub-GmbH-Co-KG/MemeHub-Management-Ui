<script>
  import TelegramWidget from './components/TelegramWidget.svelte';
  import HelloWorld from './components/HelloWorld.svelte';
  import Header from "./components/Header.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Status from "./components/Status.svelte";
  import { currentPage } from './lib/pages';

  const session = window.localStorage.getItem('session');
</script>

<style>
  main {
    grid-area: main;
    background-color: var(--color-bg-a);
    overflow-y: hidden;
  }
</style>
<Status />
<Header class="header" />
<Sidebar class="sidebar" />
<main >
  {#if session}
    <svelte:component this={$currentPage.component} />
  {:else}
    <TelegramWidget />
  {/if}
</main>
