document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btnSubmit = document.querySelector(".btn-submit a");
  const confirmSubmit = document.getElementById("confirm-submit");
  const cancelSubmit = document.getElementById("cancel-submit");

  if (btnSubmit) {
    btnSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "block";
    });
  }

  if (cancelSubmit) {
    cancelSubmit.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  if (confirmSubmit) {
    confirmSubmit.addEventListener("click", () => {
      // Submit the form
      document.querySelector("form").submit();
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Handle file input change event
document
  .getElementById("lampiran-bukti")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById("preview-image");
    const cameraIcon = document.querySelector(".camera img");
    const fileSizeDisplay = document.getElementById("file-size");

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
        cameraIcon.style.display = "none"; // Hide camera icon
      };

      reader.readAsDataURL(file);

      // Calculate and display file size
      const fileSizeInKB = (file.size / 1024).toFixed(2); // Size in KB
      fileSizeDisplay.textContent = `${fileSizeInKB} KB`;
    } else {
      previewImage.src = "";
      previewImage.style.display = "none";
      cameraIcon.style.display = "block"; // Show camera icon
      fileSizeDisplay.textContent = "";
    }
  });

// Redirect to laporanDiterima page
function laporanDiterima() {
  window.location.href = "/Sistem_Pelaporan_Bulyying/laporanDiterima.html";
}
