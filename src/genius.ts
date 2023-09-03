import { requestUrl } from "obsidian";
import { API_URL, CLIENT_ACCESS_TOKEN, USER_AGENT } from "./constants"


async function getResource(sub_url: string) {
    const headers = {"User-Agent":USER_AGENT, "Accept":"application/json", "Authorization":`Bearer ${CLIENT_ACCESS_TOKEN}`}
    const promise = requestUrl({url: `${API_URL}/${sub_url}`, headers: headers});
    
    return promise.then(
        (response) => {
            // if (response.status >= 400) {
            // throw new Error(`HTTP error: ${response.text}`);
            // }
            return response.json;
        },
        (error: Error) => {
            console.log(`HTTP error: ${error.message}`); 
            return error;
        });
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
    let result = await getSong("132077");
    console.log(result)
};