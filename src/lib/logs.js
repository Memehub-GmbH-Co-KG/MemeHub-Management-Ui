
import { writable } from 'svelte/store';

export const logs = writable([]);
let isWaiting = false;

function getMoreLogs() {
    if (isWaiting) return;
    isWaiting = true;
    logs.subscribe(async currentLogs => {
        try {
            let query = '';
            const oldest = currentLogs.reverse().find(l => l.time);
            if (oldest) query += `?olderThan=${oldest.time}`;

            const res = await fetch(`SERVER_HOST/logs`, {
                headers: {
                    session: window.localStorage.getItem('session')
                }
            });
            const l = await res.json();
            logs.set(l);
        }
        catch (error) {
            console.error('cannot get logs', error);
        }
        finally{
            isWaiting = false;
        }
    })();
    
}

getMoreLogs();