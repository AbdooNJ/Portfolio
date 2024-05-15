const menu_icon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const nav_links = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      nav_links.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*='" + id + "']")
        .classList.add("active");
    }
  });
};

menu_icon.onclick = () => {
  menu_icon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
for (const link of nav_links) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // Get the target section from the link's href attribute
    const targetSection = document.querySelector(link.getAttribute("href"));
    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
