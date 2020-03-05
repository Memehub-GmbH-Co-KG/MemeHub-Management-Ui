<script>
    import { pages, currentPage } from '../lib/pages';
    import SidebarItem from './SidebarItem.svelte';
    
</script>

<style>
    nav {
        background-color: var(--color-bg-b);
        color: var(--color-ft-b);
        grid-area: sidebar;
    }
    ul {
        padding: 1rem 0;
        margin: 0;
        font-size: 1.8em;
        font-weight: 300;
    }

</style>

<nav>
    <ul>
    {#each pages as page}
        <SidebarItem {page} active={page.id === $currentPage.id} />
    {/each}
    </ul>
</nav>