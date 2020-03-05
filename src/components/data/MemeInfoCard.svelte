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
</style>

<InfoCard on:click={handleClick} small="{meme.post_date} - {meme.type}" title="@user" active={$currentMeme === meme}>
    <div class="split">
        <div>
            {#if meme.votes && Object.keys(meme.votes).length > 0}
            {#each Object.keys(meme.votes) as vote}
                <span>{vote}: {meme.votes[vote].length}</span><br/>
            {/each}
            {:else}
                <span class="unavailable">(no votes)</span>
            {/if}
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
