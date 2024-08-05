// Fade-in effect
function fadeIn(element, duration = 400) {
  element.style.opacity = 0;
  element.style.display = "block";

  let last = +new Date();
  const tick = function () {
    element.style.opacity =
      +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();

    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

// Fade-out effect
function fadeOut(element, duration = 400) {
  element.style.opacity = 1;

  let last = +new Date();
  const tick = function () {
    element.style.opacity =
      +element.style.opacity - (new Date() - last) / duration;
    last = +new Date();

    if (+element.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    } else {
      element.style.display = "none";
    }
  };

  tick();
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btnSubmit = document.querySelector(".btn-submit a");
  const confirmSubmit = document.getElementById("confirm-submit");
  const cancelSubmit = document.getElementById("cancel-submit");

  if (btnSubmit) {
    btnSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      fadeIn(modal, 400); // Apply fade-in effect
    });
  }

  if (cancelSubmit) {
    cancelSubmit.addEventListener("click", () => {
      fadeOut(modal, 400); // Apply fade-out effect
    });
  }

  if (confirmSubmit) {
    confirmSubmit.addEventListener("click", () => {
      document.querySelector("form").submit();
    });
  }

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      fadeOut(modal, 400); // Apply fade-out effect
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
        previewImage.style.transform = "scale(1.1)";
        cameraIcon.style.display = "none"; // Hide camera icon

        // Animate the image preview (scale down to normal)
        setTimeout(() => {
          previewImage.style.transition = "transform 0.5s ease";
          previewImage.style.transform = "scale(1)";
        }, 100);
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
// Redirect to laporanDiterima page with fade-out effect
function laporanDiterima() {
  const body = document.querySelector("body");
  body.style.transition = "opacity 0.5s ease";
  body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "/Sistem_Pelaporan_Bulyying/laporanDiterima.html";
  }, 500);
}
