<script>
    import Users from '../components/data/Users.svelte';
    import Memes from '../components/data/Memes.svelte';
    import Logs from '../components/data/Logs.svelte'; 
</script>
<style>
    .dashboard {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }
</style>

<div class="dashboard">
    <Users />
    <Memes />
    <Logs />
</div>