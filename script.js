// Visit Counter //
const countEl = document.getElementById("visits");

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/jimmy-phan/website/?amount=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value;
    });
}

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

window.onscroll = function() {myFunction()};

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky") 
        } else {
            navbar.classList.remove("sticky");
        }
    }

window.onload = function(){
    updateVisitCount();
};

// Auto-Type function //
var typed = new Typed(".auto-type", {
    strings: [
        "Computer Science Student",
        "Future Software Developer",
        "Aspiring Data Analyst",
        "Fascinated by Integration and Applications",
        "Cat Dad",
        "Fitness Fanatic",
        "Trying to better myself",
        "Volleyball Enthusiast",
        "Click the About Me tab above to find out more!"
    ],
    typeSpeed: 100,
    backSpeed: 125,
    loop: true
})

// Cards Hover //

const handleOnMouseMove= e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.querySelectorAll(".card")){
    card.onmousemove = e => handleOnMouseMove(e);
}