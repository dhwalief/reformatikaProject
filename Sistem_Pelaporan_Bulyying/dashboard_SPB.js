function pindahHalaman() {
  window.location.href = "/Sistem_Pelaporan_Bulyying/Form_Laporan.html";
}

document.addEventListener("DOMContentLoaded", (event) => {
  const profileLink = document.getElementById("profile-link");
  const dropdown = document.getElementById("dropdown");

  profileLink.addEventListener("click", (event) => {
    event.preventDefault();
    const isDropdownVisible = dropdown.style.display === "block";
    dropdown.style.display = isDropdownVisible ? "none" : "block";
  });

  // Close the dropdown if user clicks outside of it
  document.addEventListener("click", (event) => {
    if (
      !profileLink.contains(event.target) &&
      !dropdown.contains(event.target)
    ) {
      dropdown.style.display = "none";
    }
  });
});

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
}

document.getElementById("hamburger").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");

  sidebar.classList.toggle("active");
  mainContent.classList.toggle("shifted");
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  const mainContent = document.querySelector(".main-content");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("shifted");
  });
});
