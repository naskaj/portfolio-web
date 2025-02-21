let project = document.querySelector(".prjct");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
// let fadeIn = document.querySelectorAll(".secs");

// window.addEventListener("scroll", function () {
//     let navbar = document.querySelector(".container");
//     navbar.classList.toggle("sticky", window.scrollY > 50);
// });

project.addEventListener("click", function () {
    let target = document.getElementById("projects");
    target.scrollIntoView({behavior: "smooth"});
})

about.addEventListener("click", function () {
    let target = document.getElementById("about");
    target.scrollIntoView({behavior: "smooth"});
})

contact.addEventListener("click", function() {
    let target = document.getElementById("contact");
    target.scrollIntoView({behavior: "smooth"});
})

window.addEventListener("scroll", function() {
    let windowHeight = window.innerHeight;

    fadeIn.forEach(fadeIn => {
        let topElement = fadeIn.getBoundingClientRect().top;
        if (topElement < windowHeight * 0.9) {
            fadeIn.classList.add("show");
        }
    })
})