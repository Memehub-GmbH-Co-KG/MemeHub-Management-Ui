<script>
    import { createEventDispatcher } from 'svelte';

    export let small;
    export let title
    export let active;

    $: activeClass = active ? 'active' : '';
    const dispatch = createEventDispatcher();

    function click(e) {
        dispatch('click', e);
    }
</script>

<style>
    div {
        padding: 1em;
        font-family: 'Courier New', Courier, monospace;
        line-height: 1.5em;
        border-bottom: 1px solid var(--color-bg-a);
        background-color: var(--color-bg-b);
        color: var(--color-ft-b);
        font-size: var(--font-size-s);
        overflow-x: hidden;
    }
    div:hover {
        filter: brightness(1.1);
        cursor: pointer;
    }
    div.active {
        background-color: var(--color-a);
    }
    strong {
        font-size: var(--font-size-l);
        display: inline-block;
        margin-bottom: .4em;
    }
    small {
        font-size: var(--font-size-xs);
        color: var(--color-ft-b);
        filter: opacity(.6);
    }
</style>

<div on:click={click} class={activeClass}>
    {#if small}
        <small>{small}</small><br/>
    {/if}
    {#if title}
        <strong>{title}</strong><br/>
    {/if}
    <slot></slot>
</div>
