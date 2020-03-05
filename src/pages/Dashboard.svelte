<script>
    import Users from '../components/data/Users.svelte';
</script>
<style>
    .dashboard {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "users memes other";

        width: 100%;
    }
</style>

<h1>Dashboard</h1>
<div class="dashboard">
    <Users />
    <div>2nd row</div>
    <div>3rd row</div>
</div>