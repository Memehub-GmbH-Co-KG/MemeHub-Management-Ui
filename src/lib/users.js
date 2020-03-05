
import { writable } from 'svelte/store';

export const users = writable([]);
export const currentUser = writable({});

async function getUsers() {
    try {
        const res = await fetch('SERVER_HOST/users', {
            headers: {
                session: window.localStorage.getItem('session')
            }
        });
        const u = await res.json();
        users.set(u);
    }
    catch (error) {
        console.error('cannot get users', error);
    }
}

getUsers();