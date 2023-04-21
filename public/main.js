document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = document.location.href;

    navLinks.forEach(link => {
      if (currentPage.includes(link.getAttribute("href"))) {
        link.style.color = "lightblue";
      }
    });
  });