{const hideButton = document.querySelector(".hideButton");
const imageJacek = document.querySelector(".imageJacek");
const hidePhotoCss = document.querySelector(".hidePhotoCss");
hideButton.addEventListener("click", () => {
    imageJacek.classList.toggle("hidePhotoCss");
    hideButton.innerText = imageJacek.classList.contains("hidePhotoCss") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
})};




