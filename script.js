

function darkmodebutton() {
    document.body.classList.toggle("darkmodetheme")
    document.querySelector(".h1").classList.toggle("darkmode_title")
    document.querySelector(".color_nav").classList.toggle("tset")
}

document.querySelector(".darkmode").addEventListener("click", darkmodebutton)
