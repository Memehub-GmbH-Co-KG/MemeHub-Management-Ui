
import { writable } from 'svelte/store';

export const memes = writable([]);
export const currentMeme = writable({});
let isWaiting = false;

export function getMoreMemes() {
    if (isWaiting) return;
    isWaiting = true;
    memes.subscribe(async currentMemes => {
        try {
            let query = '';
            const oldest = currentMemes.slice().reverse().find(m => m.post_date);
            if (oldest) query += `?olderThan=${oldest.post_date}`;

            const res = await fetch(`SERVER_HOST/memes${query}`, {
                headers: {
                    session: window.localStorage.getItem('session')
                }
            });
            const newMemes = await res.json();
            console.log("got memes", newMemes);
            memes.update(memes => memes.concat(newMemes));
        }
        catch (error) {
            console.error('cannot get memes', error);
        }
        finally{
            isWaiting = false;
        }
    })();
    
}

export async function markMemeAsRepost(memeId, isRepost) {
    try {
        const res = await fetch(`SERVER_HOST/memes/${memeId}/repost`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                session: window.localStorage.getItem('session')
            },
            body: JSON.stringify({ isRepost })
        });
        if (!res.ok)
            throw 'Request failed'
    }
    catch (error) {
        console.error(error);
    }
}

getMoreMemes();