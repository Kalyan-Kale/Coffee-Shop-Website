let navbar = document.querySelector("#navbar");
let input = document.querySelector(".search-form");
let cart = document.querySelector(".cart-items-container");
let val = 1;

document.querySelector("#menu-btn").onclick = () => {
    if(val==1){
        navbar.style.right = "0";
        navbar.style.opacity = "1";
        val=0;
    }
    else{
        navbar.style.right = "-100%";
        navbar.style.opacity = "0";
        val=1;
    }
    input.classList.remove("active")
    cart.classList.remove("active")
}

document.querySelector(".fa-cart-shopping").onclick = () =>{
    cart.classList.toggle("active")
    navbar.classList.remove("active")
    input.classList.remove("active")
}

document.querySelector(".fa-magnifying-glass").onclick = () =>{
    input.classList.toggle("active")
    navbar.classList.remove("active")
    cart.classList.remove("active")
}

window.onscroll = () =>{
    navbar.classList.remove("active")
    input.classList.remove("active")
    cart.classList.remove("active")
}
