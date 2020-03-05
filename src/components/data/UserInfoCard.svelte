<script>
    import { currentUser } from '../../lib/users.js';
    import InfoCard from './InfoCard.svelte'
    export let user;

    $: firstNameClass = user.first_name ? '' : 'unavailable';
    $: lastNameClass = user.last_name ? '' : 'unavailable';

    function handleClick() {
        if ($currentUser === user)
            return currentUser.set({});
        
        currentUser.set(user);
    }
</script>

<InfoCard on:click={handleClick} small={user._id} title="@{user.username}" active={$currentUser === user}>
    <span class={firstNameClass}>{user.first_name || '(no first name)'}</span>
    <span class={lastNameClass}>{user.last_name || '(no last name)'}</span>
</InfoCard>
