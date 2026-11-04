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