const closeButton = document.querySelector('.fa.fa-times')
const images = document.querySelectorAll('.image-list .image-card img')
const selectedImage = document.querySelector('.gallery .selected-image img')
const nextButton = document.querySelector(".action.next");
const prevButton = document.querySelector(".action.prev");
const gallery = document.querySelector('.gallery')
var currentIndex = 0;
function showGlarrey() {
    gallery.classList.add("show");
    console.log(images[currentIndex])
    selectedImage.src = images[currentIndex].src
}
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index;
        showGlarrey()
    })
})
closeButton.addEventListener("click", () => {
    gallery.classList.remove("show");
});

nextButton.addEventListener("click", () => {
    currentIndex != images.length - 1 ? currentIndex++ : undefined;
    showGlarrey();
});
prevButton.addEventListener("click", () => {
    currentIndex != 0 ? currentIndex-- : undefined;
    showGlarrey();
});