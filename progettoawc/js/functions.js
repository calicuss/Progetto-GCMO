function SearchTrack(find = '') {
    url = "https://api.spotify.com/v1/search?type=track&limit=7&market=IT&q=" + find
    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + window.localStorage.getItem('access_token'),

        },
    })
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json()
            } else {
                return window.location.assign('./error404.html')
                return response.json().then(json => alert(json.status_message))
            }
        }
        )

}


function findamico(utenti, utente) {
    for (i = 0; i < utenti.length; i++) {
        if (utenti[i].email == utente) {
            return true
        } else {
            return false
        }
    }

}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

function findArtista(artisti, artista) {
    return artisti.some(a => a == artista)
}
function findGenere(generi, genere) {
    return generi.some(g => g == genere)
}

function SearchArtist(find = '') {
    url = "https://api.spotify.com/v1/search?q= " + find + "&type=artist&limit=5&market=IT"
    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + window.localStorage.getItem('access_token'),

        },
    })
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json()
            } else {
                return window.location.assign('./error404.html')
                return response.json().then(json => alert(json.status_message))
            }
        }
        )

}


function GetTrack(find = '') {
    url = "https://api.spotify.com/v1/tracks/" + find + "?market=IT"

    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + window.localStorage.getItem('access_token'),

        },
    })
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json()
            } else {
                return window.location.assign('./error404.html')
                return response.json().then(json => alert(json.status_message))
            }
        }
        )

}


function GetArtists(find = '') {
    url = "https://api.spotify.com/v1/artists/" + find

    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + window.localStorage.getItem('access_token'),

        },
    })
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json()
            } else {
                return window.location.assign('./error404.html')
                return response.json().then(json => alert(json.status_message))
            }
        }
        )

}


function GetGeneres() {
    url = "https://api.spotify.com/v1/recommendations/available-genre-seeds"

    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + window.localStorage.getItem('access_token'),

        },
    })
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json()
            } else {
                return window.location.assign('./error404.html')
                return response.json().then(json => alert(json.status_message))
            }
        }
        )

}
// mi da playlist richiesta
function GetPlaylist(playlists, nome) {

    for (var i = 0; i < playlists.length; i++) {
        if (playlists[i].nome == nome) {
            return playlists[i]
        }
    }
    //non trovata
    return -1
}



function getUtenteAttivo() {
    return window.localStorage.getItem('active_user')
}


function DatiUtente() {
    utente = JSON.parse(getUtenteAttivo())
    utenti = JSON.parse(window.localStorage.getItem('utenti'))
    nomeutente = document.getElementById('nome')
    mailutente = document.getElementById('email')
    passwordutente = document.getElementById('password')

    nomeutente.innerHTML += utente.nome
    mailutente.innerHTML += utente.email
    passwordutente.innerHTML += utente.password

}


function AggiornaUtente() {
    utenteAttivo = getUtenteAttivo()
    utenteAttivo = JSON.parse(utenteAttivo)
    utenti = window.localStorage.getItem('utenti')
    utenti = JSON.parse(utenti)
    for (var i = 0; i < utenti.length; i++) {
        if (utenti[i].email == utenteAttivo.email) {
            utenti[i] = utenteAttivo
        }
    }

    window.localStorage.setItem('utenti', JSON.stringify(utenti))
}


function LogoutProfilo() {
    utente = JSON.parse(getUtenteAttivo())
    utente = null
    window.localStorage.setItem('active_user', JSON.stringify(utente))

}

function TrovaCanzone(playlist, id) {

    for (var i = 0; i < playlist.canzoni.length; i++) {
        if (playlist.canzoni[i] == id) {
            return true
        }
    }
    return false
}
function TrovaNome(playlist, nome) {

    for (var i = 0; i < playlist.length; i++) {
        if (playlist[i].nome == nome) {
            return true
        }
    }
    return false
}
//mi restituisce indice della playlist condivisa

// function IndiceCondivisa(nomeutente, nomeplaylist) {
//     condivise = JSON.parse(window.localStorage.getItem('playlistCondivise'));
//     for (indicearray = 0; indicearray <= condivise.length; indicearray++) {
//         if (condivise[indicearray].nomeUtente == nomeutente && condivise[indicearray].nome == nomeplaylist) {
//             return indicearray;
//         } else {
//             return false
//         }
//     }
// }

//per gestione comunity
// function IndiceComunità(nomeutente, nomeplaylist) {
//     comunita = JSON.parse(window.localStorage.getItem('playlistComunità'));
//     for (indicearray = 0; indicearray <= comunita.length; indicearray++) {
//         if ((comunita[indicearray].nomeUtente == nomeutente) && (comunita[indicearray].nome == nomeplaylist)) {
//             return indicearray;
//         } else {
//             return false
//         }
//     }
// }


//mi trova la playlist condivisa da visualizzare 
function getPlaylistCondivisa(nomeUtente, nomePlaylist) {
    var pc = JSON.parse(window.localStorage.getItem('playlistCondivise'))
    for (var i = 0; i < pc.length; i++) {
        if (pc[i].nomeUtente == nomeUtente && pc[i].nome == nomePlaylist) {
            return pc[i]

        }
    }
    return false;
}

//mi restituisce indice della playlist importata
function IndiceImportata(nomeUtente, nomePlaylist) {
    var utente = JSON.parse(window.localStorage.getItem('active_user'))
    for (var i = 0; i < Object.keys(utente.playlist_importate).length; i++) {                       //serve davvero?
        if (utente.playlist_importate[i].nomeUtente == nomeUtente && utente.playlist_importate[i].nome == nomePlaylist) {
            return i
        }
    }
    return false
}

function findPlaylistImportata(playlist_importate, nomeUtente, nomePlaylist) {
    for (var i = 0; i < playlist_importate.length; i++) {
        if (playlist_importate[i].nomeUtente == nomeUtente && playlist_importate[i].nome == nomePlaylist) {
            return true
        }
    }
    return false


}
