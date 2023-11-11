const keyK = document.querySelector('.card.key p:last-child')
const locationK = document.querySelector('.card.location p:last-child')
const whichK = document.querySelector('.card.which p:last-child')
const codeK = document.querySelector('.card.code p:last-child')
const box = document.querySelector('.box')
document.addEventListener("keydown", (event) => {
    box.classList.remove('hide')
    document.querySelector('.alert').classList.add('hide')
    document.querySelector('.title').innerText = event.which
    keyK.innerHTML = event.key
    locationK.innerHTML = event.location
    whichK.innerHTML = event.which
    codeK.innerHTML = event.code
})