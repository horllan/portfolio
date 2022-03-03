function activateMenu() {
    document.querySelector(".menu-bar ul").classList.toggle("nav-item-disable")
}

parent.addEventListener("click", ()=>activateMenu())