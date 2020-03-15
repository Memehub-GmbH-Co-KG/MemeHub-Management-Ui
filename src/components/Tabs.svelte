<script>
    export let tabs = [];
    export let currentTab = undefined;
</script>

<style>
    button {
        background-color: var(--color-b);
    }
    button.active {
        background-color: var(--color-a);
    }
</style>

<nav>
    {#each tabs as tab}
        <button on:click={() => currentTab = tab} class:active={currentTab === tab}>{tab.title}</button>
    {/each}
</nav>
{#if currentTab}
    <svelte:component this={currentTab.component} />
{/if}