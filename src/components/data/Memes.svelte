<script>
    import { memes, getMoreMemes } from '../../lib/memes.js';
    import MemeInfoCard from './MemeInfoCard.svelte';
    import InfoCard from './InfoCard.svelte';

</script>

<style>
    div {
        overflow-y: auto;
        margin: 0 1em;
    }
    .load-more {
        margin-left: auto;
        margin-right: auto;
        display: block;
        height: 3rem;
        width: 8rem;
        font-size: var(--font-size-l);
        background-color: var(--color-bg-a);
        color: var(--color-font-a);
        border: none;
        transform: none;
        outline:none;
    }
    .load-more:hover {
        cursor: pointer;
        transform: none;
        outline:none;
    }
    button.load-more:active, button.load-more:focus, button.load-more:selected {
        transform: none;
        outline:none;
    }
</style>

<div class="scrollbar">
    {#each $memes as meme (meme._id)}
        <MemeInfoCard {meme} />
    {/each}
    <InfoCard on:click={getMoreMemes}>
        <button on:click={getMoreMemes} class="load-more">Load more</button>    
    </InfoCard>
</div>