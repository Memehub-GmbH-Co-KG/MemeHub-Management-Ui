<script>
    import { currentPage } from '../lib/pages';
    export let page;
    export let active;

    $: className = active ? 'active' : '';

    function handleClick() {
        currentPage.set(page);
    }
</script>

<style>
    li {
        padding: 1rem 2rem;
        list-style-type: none;
        border-bottom: 1px solid var(--color-bg-a);
        background-color: var(--color-bg-b);
        font-size: var(--font-size-l);
    }
    li:first-child {
        border-top: 1px solid var(--color-bg-a);
    }
    li:hover {
        filter: brightness(1.1);
        cursor: pointer;
    }
    li.active {
        background-color: var(--color-a);
        filter: brightness(1);
    }
</style>

<li class="{className}" on:click={handleClick}>
    {page.name}
</li>