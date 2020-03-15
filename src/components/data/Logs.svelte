<script>
    import { logs } from '../../lib/logs.js';
    import InfoCard from './InfoCard.svelte'

    let currentLog = undefined;
</script>

<style>
    div {
        overflow-y: auto;
        margin: 0 1em;
    }
</style>

<div>
    {#each $logs as log}
        <InfoCard small={log.time} title={log.message}>
            {#if log.detail}
                <span>{log.detail}</span>
            {:else}
                <span class="unavailable">(no details)</span>
            {/if}
        </InfoCard>
    {/each}
        
</div>