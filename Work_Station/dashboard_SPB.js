// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save the user's preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Check the user's preference on page load
document.addEventListener("DOMContentLoaded", (event) => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
