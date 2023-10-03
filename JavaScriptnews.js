function openPopup() {
    var popup = document.getElementById("newsletter-popup");
    var popupShown = localStorage.getItem("popupShown");
    if (!popupShown) {
        popup.style.display = "flex";
    }
}

function closePopup() {
    var popup = document.getElementById("newsletter-popup");
    popup.style.display = "none";

    // Armazene um valor no localStorage para indicar que a popup foi exibida
    localStorage.setItem("popupShown", "true");
}

function subscribe() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;

    if (email !== "") {
        // Simule o envio do email para um servidor (pode ser substituído pelo código real)
        console.log("Email inscrito:", email);

        // Chame a função sendEmail para enviar o email
        sendEmail(email);

        // Feche a popup após inscrição bem-sucedida
        closePopup();
    }
}


function sendEmail(email) {
    var subject = "Nova inscrição na newsletter";
    var body = "Novo inscrito: Seja muito bem vindo ao Minha vida é um livro" + email;

    // Substitua o seu endereço de email pelo destinatário adequado
    var recipient = "Guilhermecardoso_santos@hotmail.com";

    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
}
