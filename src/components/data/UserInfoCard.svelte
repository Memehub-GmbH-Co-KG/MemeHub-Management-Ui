<script>
    import { currentUser } from '../../lib/users.js';
    export let user;

    $: _id = user._id;
    $: first_name = user. first_name;
    $: last_name = user.last_name;
    $: username = user.username;
    $: firstNameClass = first_name ? '' : 'unavailable';
    $: lastNameClass = last_name ? '' : 'unavailable';
    $: activeClass = $currentUser._id === _id ? 'active' : '';

    function handleClick() {
        currentUser.set(user);
    }
</script>

<style>
    div {
        padding: 1em;
        font-family: 'Courier New', Courier, monospace;
        line-height: 1.5em;
        border-bottom: 1px solid var(--color-bg-a);
        background-color: var(--color-bg-b);
        color: var(--color-ft-b);
    }
    div:hover {
        filter: brightness(1.1);
        cursor: pointer;
    }
    div.active {
        background-color: var(--color-a);
    }
    small {
        font-size: var(--font-size-xs);
        color: var(--color-ft-b);
    }
    .unavailable {
        filter: opacity(0.9) brightness(.4);
    }
</style>

<div on:click={handleClick} class={activeClass}>
    <small>{_id}</small><br/>
    <strong>@{username}</strong><br/>
    <span class={firstNameClass}>{first_name || '(no first name)'}</span>
    <span class={lastNameClass}>{last_name || '(no last name)'}</span>
</div>
