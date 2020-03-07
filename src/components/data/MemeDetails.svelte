<script>
    import MemeActions from '../MemeActions.svelte';
    export let meme;
</script>

<style>
    div.meme-details {
        width: 100%;
        overflow: hidden;
        overflow-y: scroll;
    }
    pre {
        background-color: var(--color-bg-b);
        padding: 1em;
    }
    .no-meme {
        display: block;
        text-align: center;
        margin-top: 35%;
        font-size: var(--font-size-xl);
        font-style: italic;
    }
    .image-wrapper {
        text-align: center;
    }
    img {
        height: 30rem;
    }
</style>

<div class="meme-details scrollbar">
    {#if meme._id}
        <div class="image-wrapper">
            <img src="memes/{meme.image.path}" alt="meme" />
        </div>
        <h2>Actions</h2>
            <MemeActions {meme} />
        <h2>Raw Data</h2>
        <pre>{JSON.stringify(meme, null, 2)}</pre>
    {:else}
        <span class="no-meme unavailable">Select a Meme to show details.</span>
    {/if}
</div>
