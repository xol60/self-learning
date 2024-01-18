const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal");
const iconCloseModal = document.querySelector(".modal_header i");
const buttonCloseModal = document.querySelector(".modal_footer button");

function toggleModal() {
    modal.classList.toggle("hide");
}

openModalBtn.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

modal.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
});
