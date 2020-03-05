
import { writable } from 'svelte/store';

export const memes = writable([]);
export const currentMeme = writable({});
let isWaiting = false;

function getMoreMemes() {
    if (isWaiting) return;
    isWaiting = true;
    memes.subscribe(async currentMemes => {
        try {
            let query = '?amount=8';
            const oldest = currentMemes.reverse().find(m => m.post_date);
            if (oldest) query += `&olderThan=${oldest.post_date}`;

            const res = await fetch(`SERVER_HOST/memes${query}`, {
                headers: {
                    session: window.localStorage.getItem('session')
                }
            });
            const m = await res.json();
            memes.set(m);
        }
        catch (error) {
            console.error('cannot get memes', error);
        }
        finally{
            isWaiting = false;
        }
    })();
    
}

getMoreMemes();