const myNav = document.getElementById('nav-bar');
window.onscroll = function() {

    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }

}

// Animation
var typed = new typed("typing", {
    strings:["Developer", "Student", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});