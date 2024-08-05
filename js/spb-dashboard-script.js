function slideInSidebar(sidebar) {
  sidebar.style.transition = "transform 0.3s ease";
  sidebar.style.transform = "translateX(0)";
}

function slideOutSidebar(sidebar) {
  sidebar.style.transition = "transform 0.3s ease";
  sidebar.style.transform = "translateX(-100%)";
}

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  const mainContent = document.querySelector(".main-content");

  if (hamburger && sidebar && mainContent) {
    hamburger.addEventListener("click", function () {
      if (!sidebar.classList.contains("active")) {
        slideInSidebar(sidebar);
        sidebar.classList.add("active");
        mainContent.classList.add("shifted");
      } else {
        slideOutSidebar(sidebar);
        sidebar.classList.remove("active");
        mainContent.classList.remove("shifted");
      }
    });

    document.addEventListener("click", function (event) {
      if (
        !sidebar.contains(event.target) &&
        !hamburger.contains(event.target) &&
        sidebar.classList.contains("active")
      ) {
        slideOutSidebar(sidebar);
        sidebar.classList.remove("active");
        mainContent.classList.remove("shifted");
      }
    });
  }
});
function fadeIn(element, duration = 300) {
  element.style.opacity = 0;
  element.style.display = "block";
  element.style.transition = `opacity ${duration}ms`;
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
}

function fadeOut(element, duration = 300) {
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.display = "none";
  }, duration);
}

document.addEventListener("DOMContentLoaded", function () {
  const profileLink = document.getElementById("profile-link");
  const dropdown = document.getElementById("dropdown");

  if (profileLink && dropdown) {
    profileLink.addEventListener("click", function (event) {
      event.preventDefault();
      const isDropdownVisible = dropdown.style.display === "block";
      if (isDropdownVisible) {
        fadeOut(dropdown);
      } else {
        fadeIn(dropdown);
      }
    });

    document.addEventListener("click", function (event) {
      if (
        !profileLink.contains(event.target) &&
        !dropdown.contains(event.target) &&
        dropdown.style.display === "block"
      ) {
        fadeOut(dropdown);
      }
    });
  }
});
function pindahHalaman() {
  const body = document.querySelector("body");
  body.style.transition = "opacity 0.5s ease";
  body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "/Sistem_Pelaporan_Bulyying/Form_Laporan.html";
  }, 500);
}
