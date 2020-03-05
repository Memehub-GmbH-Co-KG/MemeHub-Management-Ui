<script>
    const status = window.localStorage.getItem('session') ? 'ok' : 'no session';
    console.log('current session:', window.localStorage.getItem('session'));
</script>

<style>
    div {
        background-color: var(--color-a);
        color: var(--color-b);
        grid-area: status;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

<div>
    <pre>Status: {status}</pre>
</div>
