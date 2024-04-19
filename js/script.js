let copyBtn = document.querySelector('#copy');

function getPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength = 16;
    let password = "";


    for(let i = 0; i < passwordLength ; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber + 1)
        //afficher le mot de passe
        
        document.querySelector('#password').value = password;
    }

}

function copyPass() {
    let inputPassword = document.querySelector('#password');

    if (inputPassword.value.length == 16) {
        //copier le mot de passe
        inputPassword.select();
        document.execCommand("copy");
        alert('Mot de passe copié !')

        copyBtn.Style.background = "#000"
    } else {
        // si non
        alert('Veuillez générer un Mot de passe');
    }
}

