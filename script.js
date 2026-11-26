const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById
("closeModal");

contactBtn.addEventListener("click", () => {
    contactModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_0svb8tj", "template_95agzon", this)
        .then(() => alert("Message sent!"))
        .catch((error) => console.log(error));
});