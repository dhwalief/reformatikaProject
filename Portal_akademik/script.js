// script.js
let burger = document.querySelector('.burger');
		let close = document.querySelector('.close');
		let sidenav = document.querySelector('#sidenav');

		// Burger click function
		burger.addEventListener('click', function () {
			sidenav.classList.add('active');
		});
		// Close click function
		close.addEventListener('click', function () {
			sidenav.classList.remove('active');
		});
// navbar bar
document.addEventListener("DOMContentLoaded", (event) => {
	const profileLink = document.getElementById("profile-link");
	const jatuh = document.getElementById("jatuh");
  
	profileLink.addEventListener("click", (event) => {
	  event.preventDefault();
	  const isjatuhVisible = jatuh.style.display === "block";
	  jatuh.style.display = isjatuhVisible ? "none" : "block";
	});
  
	// Close the jatuh if user clicks outside of it
	document.addEventListener("click", (event) => {
	  if (
		!profileLink.contains(event.target) &&
		!jatuh.contains(event.target)
	  ) {
		jatuh.style.display = "none";
	  }
	});
  });
  
//   window.onclick = function(event) {
// 	if (event.target == sidenav) {
// 		sidenav.style.display = 'none';
// 	}
// }

// function openSidebar() {
//     document.getElementById("sidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

// function closeSidebar() {
//     document.getElementById("sidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }