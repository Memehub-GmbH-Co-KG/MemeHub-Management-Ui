<script>
    import { memes } from '../../lib/memes.js';
    import MemeInfoCard from './MemeInfoCard.svelte'
</script>

<style>
div {
    overflow-y: auto;
    margin: 0 1em;
}
</style>

<div>
    {#each $memes as meme}
        <MemeInfoCard {meme} />
    {/each}
        
</div>