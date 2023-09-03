import { requestUrl } from "obsidian";
import { API_URL, CLIENT_ACCESS_TOKEN, USER_AGENT } from "./constants"


async function getResource(api_path: string) {
    const headers = {"User-Agent":USER_AGENT, "Accept":"application/json", "Authorization":`Bearer ${CLIENT_ACCESS_TOKEN}`}
    const promise = requestUrl({url: `${API_URL}/${api_path}`, headers: headers});
    
    return promise.then(
        (response) => {
            return response.json;
        },
        (error: Error) => {
            console.log(`HTTP error: ${error.message}`); 
            return error;
        });
}

export async function getLyrics(songId: string) {
    return getResource(`referents?song_id=${songId}`)
}

export async function getReferent(id: string) {
    return getResource(`referents/${id}`)
}

export async function getSong(id: string) {
    return getResource(`songs/${id}`)
};

export async function getAlbum(id: string) {
    return getResource(`albums/${id}`)
}

export async function getArtist(id: string) {
    return getResource(`artists/${id}`)
}

export async function test() {
    // let result = await getSong("132077");
    // let result = await getReferent("14894350")
    let result = await getResource(`web_pages/lookup?raw_annotatable_url=https%3A%2F%2Fdocs.genius.com`)
    console.log(result)
};