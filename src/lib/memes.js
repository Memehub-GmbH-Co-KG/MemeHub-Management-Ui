
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
            const oldest = currentMemes.reverse().find(m => m.post_date);
            if (oldest) query += `?olderThan=${oldest.post_date}`;

            const res = await fetch(`SERVER_HOST/memes${query}`, {
                headers: {
                    session: window.localStorage.getItem('session')
                }
            });
            const newMemes = await res.json();
            console.log("got memes", newMemes);
            memes.update(memes => {
                for (const meme of newMemes) {
                    memes.push(meme);
                }
                return memes;
            });
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