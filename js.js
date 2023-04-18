const modal = document.getElementById("modal__container");
const openBtn = document.getElementById("btn__open");
const closeBtn = document.getElementById("btn__close");
const logo = document.getElementById("logo");
const title1 = document.getElementById("modal__titles1")
const title2 = document.getElementById("modal__titles2")
const title3 = document.getElementById("modal__titles3")

openBtn.addEventListener('click', ()=> {
    modal.style.display = "block";
    logo.style.display = "none";
    openBtn.style.display = "none"
})

closeBtn.addEventListener('click',()=>{
    modal.style.display = "none";
    openBtn.style.display = "block"
    logo.style.display = "block";

})

title1.addEventListener('click', ()=>{
    modal.style.display = "none";
    logo.style.display = "block";
    openBtn.style.display = "block"

})
title2.addEventListener('click', ()=>{
    modal.style.display = "none";
    openBtn.style.display = "block"
    logo.style.display = "block";
})
title3.addEventListener('click', ()=>{
    logo.style.display = "block";
    openBtn.style.display = "block"
    modal.style.display = "none";
})
