window.addEventListener("scroll" , function(){
    var nav = document.querySelector(".header-class");
    nav.classList.toggle("sticky",window.scrollY > 0)
})

window.addEventListener("click" , function(){
    var link = document.querySelector(".nav-link");
    nav.classList.toggle("navlink",window.onclick)
})