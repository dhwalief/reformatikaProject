document.addEventListener("DOMContentLoaded", function () {
  // Function to navigate to a specific page
  function pindahHalaman() {
    window.location.href = "/Sistem_Pelaporan_Bulyying/Form_Laporan.html";
  }

  // Toggle profile dropdown visibility
  const profileLink = document.getElementById("profile-link");
  const dropdown = document.getElementById("dropdown");

  if (profileLink && dropdown) {
    profileLink.addEventListener("click", function (event) {
      event.preventDefault();
      const isDropdownVisible = dropdown.style.display === "block";
      dropdown.style.display = isDropdownVisible ? "none" : "block";
    });

    // Close the dropdown if user clicks outside of it
    document.addEventListener("click", function (event) {
      if (
        !profileLink.contains(event.target) &&
        !dropdown.contains(event.target)
      ) {
        dropdown.style.display = "none";
      }
    });
  }

  // Toggle sidebar and adjust main content
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  const mainContent = document.querySelector(".main-content");

  if (hamburger && sidebar && mainContent) {
    hamburger.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      mainContent.classList.toggle("shifted");
    });
  }
});
