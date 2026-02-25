const links = document.querySelectorAll(".nav a");
const indicator = document.querySelector(".indicator");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav a.active").classList.remove("active");
    link.classList.add("active");
    indicator.style.left = `${6 + index * 84}px`;
  });
});

const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "🌙" : "☀️";
};
