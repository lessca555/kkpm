const navbarNav = document.querySelector(".navbar-nav");

//ketika hambuerger menu di klik
document.getElementById("hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.getElementById("hamburger")

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})