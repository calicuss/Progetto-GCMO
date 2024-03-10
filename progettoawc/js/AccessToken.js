//get a list of categories : https://accounts.spotify.com/v1/browse/categories
//get a category's of playlist: https://api.spotify.com/v1/browse/categories/{category_id}/playlists
//get a playlist item: https://api.spotify.com/v1/playlists/{playlist_id/tracks}
//get a track: https://api.spotify.com/v1/tracks/{id}



const client_id = ""
const client_secret = ""
var url = "https://accounts.spotify.com/api/token"

var access_token = window.localStorage.getItem('access_token')
var tokenExpires = window.localStorage.getItem('tokenExpires')

fetch(url, {
    method: "POST",
    headers: {
        Authorization: "Basic " +
            btoa(`${client_id}:${client_secret}`),
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
})
    .then((response) => response.json())
    .then(tokenResponse => {
        
        window.localStorage.setItem('access_token', tokenResponse.access_token)
        window.localStorage.setItem('tokenExpires', tokenResponse.expires_in)

    }

    )


var access_token = window.localStorage.getItem('access_token')
console.log(access_token)



var tokenExpires = window.localStorage.getItem('tokenExpires')






