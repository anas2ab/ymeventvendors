// EmailJS Init - MUST be at top of script.js
(function () {
  emailjs.init(""); // Your actual public key
})();

let currentVideoIndex = 0;
const videoSlides = document.querySelectorAll(".video-slide");
const videoDots = document.querySelectorAll(".carousel-dots .dot");
const totalVideos = videoSlides.length;

function updateHeroVideo() {
  document.querySelector(".video-carousel-track").style.transform =
    `translateX(-${currentVideoIndex * 100}%)`;
  videoSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentVideoIndex);
    const vid = slide.querySelector("video");
    if (i === currentVideoIndex) {
      vid.play().catch((e) => console.log("Autoplay prevented"));
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  });
  videoDots.forEach((dot, i) =>
    dot.classList.toggle("active", i === currentVideoIndex),
  );
}

function changeHeroVideo(direction) {
  currentVideoIndex =
    (currentVideoIndex + direction + totalVideos) % totalVideos;
  updateHeroVideo();
}

function currentHeroVideo(index) {
  currentVideoIndex = index - 1;
  updateHeroVideo();
}

// Auto-advance every 6 seconds
setInterval(() => changeHeroVideo(1), 6000);

// Pause on hover
document
  .querySelector(".video-carousel-container")
  .addEventListener("mouseenter", () => {
    clearInterval(autoVideoInterval);
  });
document
  .querySelector(".video-carousel-container")
  .addEventListener("mouseleave", () => {
    autoVideoInterval = setInterval(() => changeHeroVideo(1), 6000);
  });

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = this.querySelector('button[type="submit"]');

  // Add spinner
  btn.innerHTML = '<strong>Sending <span class="spinner"></span></strong>';
  btn.classList.add("loading");
  btn.disabled = true;

  if (typeof emailjs === "undefined") {
    alert("Email service loading...");
    return;
  }

  const serviceID = ""; // Your keys
  const templateID = "";
  const form = this;

  emailjs.sendForm(serviceID, templateID, form).then(
    (result) => {
      console.log("SUCCESS!", result.text);
      form.reset(); // Clear all fields
      form.querySelector('button[type="submit"]').textContent = "Sent!";
      form.querySelector('button[type="submit"]').style.background = "#13332e";
      form.querySelector('button[type="submit"]').style.color = "#ffb000";
      form.querySelector('button[type="submit"]').style.fontWeight = "bold";
      btn.classList.remove("loading");
      btn.disabled = false;

      // Reset button after 3s
      setTimeout(() => {
        form.querySelector('button[type="submit"]').textContent =
          "Send Inquiry";
        form.querySelector('button[type="submit"]').style.background = "";
        form.querySelector('button[type="submit"]').style.fontWeight = "bold";
        form.querySelector('button[type="submit"]').style.color = "#13332e";
      }, 3000);

      alert("Thank you! We'll reply within 24 hours.");
    },
    (error) => {
      btn.innerHTML = "Error";
      btn.style.fontWeight = "bold";
      btn.style.color = "white";
      btn.style.background = "red";
      alert("Send failed! Try again or email contact@ymeventvendors.ca");
      setTimeout(() => {
        btn.innerHTML = "Send Inquiry";
        btn.style.color = "#13332e";
        btn.style.background = "#ffb000";
        btn.classList.remove("loading");
        btn.disabled = false;
      }, 2000);
    },
  );
});

// Newsletter subscription
document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    // Add spinner
    btn.innerHTML = '<strong>Sending <span class="spinner"></span></strong>';
    btn.classList.add("loading");
    btn.disabled = true;

    if (typeof emailjs === "undefined") {
      alert("Loading...");
      return;
    }

    const serviceID = ""; // Same service
    const templateID = ""; // Create new template

    emailjs.sendForm(serviceID, templateID, this).then(
      (result) => {
        btn.innerHTML = "Subscribed!";
        btn.style.fontWeight = "bold";
        btn.style.color = "#ffb000";
        btn.style.background = "#13332e";
        btn.classList.remove("loading");
        btn.disabled = false;
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.fontWeight = "bold";
          btn.style.color = "#13332e";
          btn.style.background = "#ffb000";
        }, 2000);
        this.reset();
      },
      (error) => {
        btn.innerHTML = "Error";
        btn.style.fontWeight = "bold";
        btn.style.color = "white";
        btn.style.background = "red";
        alert(
          "Subscription failed! Try again or email contact@ymeventvendors.ca",
        );
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = "#13332e";
          btn.style.background = "#ffb000";
          btn.classList.remove("loading");
          btn.disabled = false;
        }, 2000);
      },
    );
  });

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", closeMenu);

// Toggle function
function toggleMenu() {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

function closeMenu() {
  menuToggle.classList.remove("active");
  navMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// Link clicks - ONLY nav links
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const target = document.querySelector(href);

    if (target) {
      closeMenu(); // Close FIRST

      // Scroll AFTER close animation (100ms)
      setTimeout(() => {
        const navHeight = 80;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 300); // Matches CSS transition
    }
  });
});
