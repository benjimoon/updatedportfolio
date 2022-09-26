const contactButton = document.querySelector(".contact-button");
const closeButton = document.querySelectorAll(".close-card");

closeButton.forEach(element => {
    element.addEventListener("click", function (event) {
        event.preventDefault();
const contactButton = document.querySelector(".contact-card");
contactButton.classList.add("hidden");
});
});

contactButton.addEventListener("click", function () {
    const contactButton = document.querySelector(".contact-card");
    contactButton.classList.toggle("hidden");
});
