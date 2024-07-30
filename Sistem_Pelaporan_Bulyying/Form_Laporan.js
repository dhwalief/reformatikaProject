document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btnSubmit = document.querySelector(".btn-submit a");
  const confirmSubmit = document.getElementById("confirm-submit");
  const cancelSubmit = document.getElementById("cancel-submit");

  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "block";
  });

  cancelSubmit.addEventListener("click", () => {
    modal.style.display = "none";
  });

  confirmSubmit.addEventListener("click", () => {
    // Submit the form
    document.querySelector("form").submit();
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
