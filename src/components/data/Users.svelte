<script>
    import { users } from '../../lib/users.js';
    import UserInfoCard from './UserInfoCard.svelte'
</script>

<style>
div {
    overflow-y: auto;
    margin: 0 1em;
}
</style>

<div>
    {#each $users as user}
        <UserInfoCard {user} />
    {/each}
</div>