function registrazione() {
    event.preventDefault()

    if (localStorage.getItem('utenti') == null) {
        localStorage.setItem('utenti', '[]');
        RegistraUtente()
    } else {
        RegistraUtente()
    }



    function RegistraUtente() {
        utenti = window.localStorage.getItem("utenti");
        if (utenti == null) {
            users = []
        } else {
            utenti = JSON.parse(utenti);
        }
        utente = {
            nome: document.getElementById('Nome').value,
            cognome: document.getElementById('Cognome').value,
            email: document.getElementById('email').value,
            password: document.getElementById('Password').value,
            playlists: [],
            artisti_preferiti: [],
            playlist_importate: [],
            amici: [],
            privacy: document.getElementById('Privacy').checked,

        }

        for (var i = 0; i < utenti.length; i++) {
            if (utente.email == utenti[i].email) {
                alert('utente già registrato');
                return
            }
            bool = false
        }
        var check = controlloRegistrazione()
        if (check) {

            utenti.push(utente);

            window.localStorage.setItem("utenti", JSON.stringify(utenti));
            window.localStorage.setItem("active_user", JSON.stringify(utente));
            alert('registrazione completata')
            location.href = './home.html'
        }
    }
}

function controlloRegistrazione() {
    var nome = document.getElementById('Nome').value
    var email = document.getElementById('email').value
    var password = document.getElementById('Password').value
    var conferma = document.getElementById('ConfermaPassword').value
    var email_reg_exp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;

    if ((nome == "") || (nome == "undefine")) {
        alert('campo nome obbligatorio')
        return false;
    } else if (password !== conferma) {
        alert('le password non corrispondono')
        return false;
    } else if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
        alert("Inserire un indirizzo email corretto.");
        return false;
    } else {
        return true
    }
}

