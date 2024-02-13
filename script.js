const imgs = document.querySelectorAll(".gallery-block .photo");
const fullPage = document.querySelector("#fullpage");

imgs.forEach((img) => {
    img.addEventListener("click", function () {
        fullPage.style.backgroundImage = "url(" + img.src + ")";
        fullPage.style.display = "block";
        fullPage.style.WebkitAnimation = "fadeInFromNone 1s ease-in-out;"
    });
});