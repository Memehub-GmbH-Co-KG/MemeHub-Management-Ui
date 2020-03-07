<script>
    import { currentMeme } from '../../lib/memes.js';
    import InfoCard from './InfoCard.svelte'
    export let meme;

    function handleClick() {
        if ($currentMeme === meme)
            return currentMeme.set({});
        
        currentMeme.set(meme);
    }
</script>

<style>
    .split {
        display: flex;
        justify-content: space-between;
    }
    .split > * {
        flex-grow: 1;
        flex-basis: 50%;
    }
    img {
        width: 6rem;
        height: 6rem;
    }
</style>

<InfoCard on:click={handleClick} small="{meme.post_date} - {meme.type}" title="@user" active={$currentMeme === meme}>
    <div class="split">
        <div>
            <img src="memes/{meme.image.path}" alt="meme"/>
        </div>
        <div>
            {#if meme.categories && meme.categories.length > 0}
                {#each meme.categories || [] as category}
                    <span>#{category}</span><br>
                {/each}
            {:else}
                <span class="unavailable">(no categories)</span>
            {/if}
        </div>    
    </div>
    
</InfoCard>
