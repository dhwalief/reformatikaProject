// ? SIDEBAR
const sideBar = document.querySelector("#sidebar");
const menubtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menubtn.addEventListener('click', () => {
    sideBar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none';
})


// navbar
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
  