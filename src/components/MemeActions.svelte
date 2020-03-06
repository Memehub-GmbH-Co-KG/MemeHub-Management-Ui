<script>
    import { markMemeAsRepost } from '../lib/memes';
    export let meme;

    function markAsRepost() {
        markMemeAsRepost(meme._id, true);
    }
    
</script>

{#if !meme.isRepost}
     <button on:click={markAsRepost}>Mark as Repost</button>

{:else}
    <span>(is a repost)</span>
{/if}

