
let accessToken;
const clientID = "96611cde952d4e659a54addb622eba58";
const redirect_uri = "http://localhost:3000/"
//let state = generateRandomString(16);
let state = "abcdefghijklmnop";

//localStorage.setItem(stateKey, state);
let scope = 'playlist-modify-public';

let Spotify = {

    async getAccessToken() {
        // If access token was already obtained return it
        if(accessToken) {
            console.log("Access token already set!");
            return accessToken
        };

        // Check if access token is in URL and return it
        const queryString = window.location.hash.substring(1);
        const urlParams = new URLSearchParams(queryString);
        const uriAccessToken = urlParams.get("access_token");
        const uriExpiresIn = urlParams.get("expires_in");
        const uriError = urlParams.get("error");

        if(uriAccessToken) {
            console.log("Parsed token from url!");
            window.setTimeout(() => accessToken = '', uriExpiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            accessToken = uriAccessToken;
            return accessToken;
        }

        // We will need to implement a way to check expiration
        // Wasn't in uri - create a request to get it from the spotify endpoint
        let url = 'https://accounts.spotify.com/authorize?';
        url += `client_id=${encodeURIComponent(clientID)}`;
        url += `&response_type=token`;
        url += `&scope=${encodeURIComponent(scope)}`;
        url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;

        try {
            const response = await fetch(url);
            console.log(response);
            if (response.ok) {
                console.log(`Redirecting to: ${response.url}`);
                window.location.replace(response.url);
            }
        } catch (error) {
            console.log(error);
        }
    },

    async search(term) {

        let url = `https://api.spotify.com/v1/search?type=track&q=${term}`
        let results;
        try {
            const accessToken = await this.getAccessToken();
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            console.log(`Track response:\n${response}`);

            if (response.ok) {
                const jsonResponse = await response.json();

                let items = jsonResponse['tracks']['items'];

                results = items.map( track => {
                    return {
                        'ID': track.id,
                        'Name': track.name,
                        'Artist': track.artists[0].name,
                        'Album': track.album.name,
                        'URI': track.uri
                    };
                });


               
            }
            else {
                console.log("Response encountered error! Implement this!");
            }

        } catch (err) {
            console.log(`Error: ${err}`);
        }
        return results;
    }

};


export default Spotify;