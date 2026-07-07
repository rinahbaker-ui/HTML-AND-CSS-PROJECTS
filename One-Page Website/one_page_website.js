// Wait until the page has finished loading
document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".gallery-img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.dataset.large;
            lightboxImg.alt = this.alt;
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });

});