document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar-menu li a");
  const sections = document.querySelectorAll(".content-section");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      sections.forEach((section) => (section.style.display = "none"));
      document.querySelector(this.getAttribute("href")).style.display = "block";
    });
  });

  // Display the first section by default
  document.querySelector(".sidebar-menu li a").click();
});
