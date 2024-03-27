



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".m-nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".m-nav-link").forEach(n =>n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    body.classList.remove("active")
}))

document.onclick = (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    }
}

