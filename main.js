// main.js

let currentSlideIndex = 0;
const slideTitles = [
  "Portal Mahasiswa",
  "Lentera",
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
