
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});


function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
