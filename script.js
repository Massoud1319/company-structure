//making the moving scroll to top when button clicked 
let myBtn = document.querySelector(".scroll-button");
myBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
/////
// var fff =document.querySele
var overlayIcons = document.querySelectorAll(".overlay-icon");
// console.log(overlayIcon);
var overlay = document.querySelectorAll(".overlay");

overlayIcons.forEach((icon, index) => {

    icon.onclick = function() {
        overlay[index].classList.toggle("change-display")
        if (overlay[index].classList.contains("change-display")) {
            overlay[index].style.display = "block";
            // console.log("changed")

        } else {
            overlay[index].style.display = "none";
            // console.log("un changed")

        }
    }
})


/////////////////////
document.querySelectorAll(".overlay-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("change")
        icon.nextElementSibling.classList.toggle("change")
    })
})