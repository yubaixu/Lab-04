window.onload=function(){
    const menuToggle = document.getElementById("menu-toggle");
    const menuNav = document.getElementById("menu-nav");
    function toggleMenu(){
        console.log("called toggleMenu");
        menuNav.classList.toggle("menu-toggle");
    }

    menuToggle.addEventListener("click",toggleMenu);
}