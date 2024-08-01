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

// Fungsi untuk toggle (menyembunyikan/menampilkan) sidebar
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}
