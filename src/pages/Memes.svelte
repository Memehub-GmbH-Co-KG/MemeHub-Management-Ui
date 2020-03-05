<script>
    import Memes from '../components/data/Memes.svelte';
    import MemeDetails from '../components/data/MemeDetails.svelte';
    import { currentMeme } from '../lib/memes.js';

</script>
<style>
    .memes {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "memes details";

        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }
</style>

<div class="memes">
    <Memes />
    <MemeDetails meme={$currentMeme} />
</div>