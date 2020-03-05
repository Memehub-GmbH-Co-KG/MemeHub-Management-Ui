<script>
    export let meme;
</script>

<style>
    div {
        width: 100%;
        overflow: hidden;
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
</style>

<div>
    {#if meme._id}
        <h2>Raw Data</h2>
        <pre>{JSON.stringify(meme, null, 2)}</pre>
    {:else}
        <span class="no-meme unavailable">Select a Meme to show details.</span>
    {/if}
</div>
