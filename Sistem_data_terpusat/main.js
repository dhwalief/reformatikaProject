// main.js

let currentSlideIndex = 0;

const slideTitles = [
  "Portal Akademik",
  "Lentera Pengetahuan",
  "Manajemen Organisasi",
  "Laporan Bullying",
];

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const sliderTitle = document.getElementById("slider-title");

  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  slides[currentSlideIndex].classList.add("active");
  sliderTitle.textContent = slideTitles[currentSlideIndex];

  const sliderWrapper = document.querySelector(".slider-wrapper");
  sliderWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function plusSlides(n) {
  showSlide(currentSlideIndex + n);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlideIndex);

  let startX = 0;
  let endX = 0;

  document.querySelector(".slider").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  document.querySelector(".slider").addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  document.querySelector(".slider").addEventListener("touchend", () => {
    if (startX > endX + 50) {
      plusSlides(1);
    } else if (startX < endX - 50) {
      plusSlides(-1);
    }
  });

  // Automatic slide change
  setInterval(() => {
    plusSlides(1);
  }, 10000); // Change slide every 5 seconds

  // Typing effect
  const text = "Selamat Datang di Pusat Data UIN Alauddin Makassar";
  const speed = 100;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typedText").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
  const textLine1 = document.getElementById("typing-text-line1");
  const textLine2 = document.getElementById("typing-text-line2");
  const subText = document.getElementById("typing-subtext");

  const textToTypeLine1 = "Selamat Datang di Pusat Data";
  const textToTypeLine2 = "UIN Alauddin Makassar";
  const subTextToType =
    "Menjelajahi Dunia Data: Akurat, Terintegrasi, dan Andal!";

  let index1 = 0;
  let index2 = 0;
  let subTextIndex = 0;

  function typeTextLine1() {
    if (index1 < textToTypeLine1.length) {
      textLine1.textContent += textToTypeLine1.charAt(index1);
      index1++;
      setTimeout(typeTextLine1, 20);
    } else {
      typeTextLine2();
    }
  }

  function typeTextLine2() {
    if (index2 < textToTypeLine2.length) {
      textLine2.textContent += textToTypeLine2.charAt(index2);
      index2++;
      setTimeout(typeTextLine2, 20);
    } else {
      typeSubText();
    }
  }

  function typeSubText() {
    if (subTextIndex < subTextToType.length) {
      subText.textContent += subTextToType.charAt(subTextIndex);
      subTextIndex++;
      setTimeout(typeSubText, 20);
    }
  }

  typeTextLine1();
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;

    // Create a new card element
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    // Add content to the card
    contactCard.innerHTML = `
    <img src="https://via.placeholder.com/50" alt="${name}">
    <div class="card-content">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p class="rating">${"★".repeat(rating) + "☆".repeat(5 - rating)}</p>
    </div>
  `;

    // Append the card to the contact cards container
    const contactCards = document.getElementById("contactCards");
    contactCards.appendChild(contactCard);

    // Clear the form fields
    document.getElementById("contactForm").reset();
  });

// Dropdown
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

//Login
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "loginPage.html";
  }

  document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    window.location.href = "loginPage.html";
  });
});
