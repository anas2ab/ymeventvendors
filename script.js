// =======================
// EmailJS Init
// =======================
(function () {
  // Only init if the EmailJS SDK is loaded on this page
  if (typeof emailjs !== "undefined") {
    emailjs.init(""); // Your public key
  }
})();

// =======================
// HERO VIDEO (only on pages that have it)
// =======================
const videoCarousel = document.querySelector(".video-carousel-container");

if (videoCarousel) {
  let currentVideoIndex = 0;

  const videoTrack = document.querySelector(".video-carousel-track");
  const videoSlides = document.querySelectorAll(".video-slide");
  const videoDots = document.querySelectorAll(".carousel-dots .dot");
  const totalVideos = videoSlides.length;

  function updateHeroVideo() {
    if (!videoTrack || totalVideos === 0) return;

    videoTrack.style.transform = `translateX(-${currentVideoIndex * 100}%)`;

    videoSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentVideoIndex);

      const vid = slide.querySelector("video");
      if (!vid) return;

      if (i === currentVideoIndex) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });

    videoDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentVideoIndex);
    });
  }

  function changeHeroVideo(direction) {
    currentVideoIndex =
      (currentVideoIndex + direction + totalVideos) % totalVideos;
    updateHeroVideo();
  }

  // If your HTML uses onclick="currentHeroVideo(1)" for dots,
  // this exposes the function globally:
  window.currentHeroVideo = function (index) {
    currentVideoIndex = index - 1;
    updateHeroVideo();
  };

  // Initialize
  updateHeroVideo();

  let autoVideoInterval = setInterval(() => changeHeroVideo(1), 6000);

  videoCarousel.addEventListener("mouseenter", () => {
    clearInterval(autoVideoInterval);
  });

  videoCarousel.addEventListener("mouseleave", () => {
    autoVideoInterval = setInterval(() => changeHeroVideo(1), 6000);
  });
}

// =======================
// CONTACT FORM (only if it exists)
// =======================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    if (!btn) return;

    btn.innerHTML = '<strong>Sending <span class="spinner"></span></strong>';
    btn.classList.add("loading");
    btn.disabled = true;

    if (typeof emailjs === "undefined") {
      alert("Email service loading...");
      btn.innerHTML = "Send Inquiry";
      btn.classList.remove("loading");
      btn.disabled = false;
      return;
    }

    const serviceID = "";
    const templateID = "";

    emailjs.sendForm(serviceID, templateID, this).then(
      (result) => {
        console.log("SUCCESS!", result.text);

        this.reset();

        btn.textContent = "Sent!";
        btn.style.background = "#13332e";
        btn.style.color = "#ffb000";
        btn.style.fontWeight = "bold";
        btn.classList.remove("loading");
        btn.disabled = false;

        setTimeout(() => {
          btn.textContent = "Send Inquiry";
          btn.style.background = "";
          btn.style.color = "#13332e";
          btn.style.fontWeight = "bold";
        }, 3000);

        alert("Thank you! We'll reply within 24 hours.");
      },
      (error) => {
        console.log(error);

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
}

// =======================
// NEWSLETTER FORM (only if it exists)
// =======================
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    if (!btn) return;

    const originalText = btn.textContent;

    btn.innerHTML = '<strong>Sending <span class="spinner"></span></strong>';
    btn.classList.add("loading");
    btn.disabled = true;

    if (typeof emailjs === "undefined") {
      alert("Loading...");
      btn.innerHTML = originalText;
      btn.classList.remove("loading");
      btn.disabled = false;
      return;
    }

    const serviceID = "";
    const templateID = "";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
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
        console.log(error);

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
}

// =======================
// MOBILE NAV MENU (safe on every page)
// =======================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const navLinks = document.querySelectorAll(".nav-link");

function toggleMenu() {
  if (!menuToggle || !navMenu || !menuOverlay) return;
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

function closeMenu() {
  if (!menuToggle || !navMenu || !menuOverlay) return;
  menuToggle.classList.remove("active");
  navMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

if (menuToggle && navMenu && menuOverlay) {
  menuToggle.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", closeMenu);
}

// Smooth-scroll ONLY for same-page hash links (#section)
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Allow normal navigation for links like:
    // "index.html", "index.html#services", "https://..."
    if (!href || !href.startsWith("#")) {
      closeMenu();
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    closeMenu();

    setTimeout(() => {
      const navHeight = 80;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 300);
  });
});

// =======================
// MOBILE DROPDOWN TOGGLE (only if dropdown exists)
// =======================
document.querySelectorAll(".dropdown > .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });
});
