// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the navigation menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Change the menu icon
    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    }

});


// Close menu after clicking a navigation link
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ============================
// AUTOMATIC FOOTER YEAR
// ============================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();