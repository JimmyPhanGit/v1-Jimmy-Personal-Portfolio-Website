// navbar //
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

// ABOUTMETEXT animation //

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        var aboutMeTitle = document.querySelector('#ABOUTME h1');
        var aboutMeTextSection = document.getElementById('ABOUTMETEXT');

        if (isInViewport(aboutMeTitle)) {
            aboutMeTextSection.classList.add('appear');
        }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the section is already in the viewport on page load
    handleScroll();

// Auto-Type function //
var typed = new Typed(".auto-type", {
    strings: [
        "Software Developer",
        "Dabbles in Data, UI/UX, Project Management",
        "Cat Dad",
        "Fitness Fanatic",
        "Always Trying to better myself",
        "Volleyball Enthusiast",
        "Marathoner",
        "Click Hobbies to find out more!"
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