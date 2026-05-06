const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Por favor completá todos los campos.";
    return;
}

    formMessage.textContent = "Consulta enviada correctamente. Te responderemos pronto.";
    contactForm.reset();
});