// =======================
// EmailJS Init
// =======================
const emailJsConfig = window.EMAILJS_CONFIG || {};

(function () {
  // Only init if the EmailJS SDK is loaded on this page
  if (typeof emailjs !== "undefined" && emailJsConfig.publicKey) {
    emailjs.init(emailJsConfig.publicKey);
  }
})();

if (document.querySelector(".mobile-cta-bar")) {
  document.body.classList.add("has-mobile-cta");
}

// =======================
// HERO VIDEO (only on pages that have it)
// =======================
const videoCarousel = document.querySelector(".video-carousel-container");

if (videoCarousel) {
  let currentVideoIndex = 0;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const prefersReducedData =
    navigator.connection && navigator.connection.saveData;
  const lowBandwidthConnection =
    navigator.connection &&
    /(^|\b)(slow-2g|2g)(\b|$)/.test(navigator.connection.effectiveType || "");
  const shouldMinimizeVideoLoad =
    prefersReducedMotion || prefersReducedData || lowBandwidthConnection;

  const videoTrack = document.querySelector(".video-carousel-track");
  const videoSlides = document.querySelectorAll(".video-slide");
  const videoDots = document.querySelectorAll(".carousel-dots .dot");
  const totalVideos = videoSlides.length;

  function ensureVideoSource(videoElement) {
    if (!videoElement) return;

    const source = videoElement.querySelector("source[data-src]");
    if (!source) return;

    if (!source.getAttribute("src")) {
      source.setAttribute("src", source.getAttribute("data-src") || "");
      videoElement.load();
    }
  }

  function updateHeroVideo() {
    if (!videoTrack || totalVideos === 0) return;

    videoTrack.style.transform = `translateX(-${currentVideoIndex * 100}%)`;

    videoSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentVideoIndex);

      const vid = slide.querySelector("video");
      if (!vid) return;

      if (i === currentVideoIndex) {
        ensureVideoSource(vid);
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
  if (shouldMinimizeVideoLoad) {
    videoTrack.style.transform = "translateX(0%)";
    videoSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === 0);
    });
    videoDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === 0);
    });
  } else if ("requestIdleCallback" in window) {
    window.requestIdleCallback(updateHeroVideo, { timeout: 1200 });
  } else {
    window.addEventListener("load", updateHeroVideo, { once: true });
  }

  let autoVideoInterval = null;
  if (!shouldMinimizeVideoLoad) {
    autoVideoInterval = setInterval(() => changeHeroVideo(1), 6000);
  }

  videoCarousel.addEventListener("mouseenter", () => {
    if (autoVideoInterval) {
      clearInterval(autoVideoInterval);
    }
  });

  videoCarousel.addEventListener("mouseleave", () => {
    if (!shouldMinimizeVideoLoad) {
      autoVideoInterval = setInterval(() => changeHeroVideo(1), 6000);
    }
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

    const serviceID = emailJsConfig.serviceID || "";
    const contactFormTemplateID = emailJsConfig.contactFormTemplateID || "";

    if (!serviceID || !contactFormTemplateID) {
      alert(
        "Email form is not configured yet. Please add your EmailJS config.",
      );
      btn.innerHTML = "Send Inquiry";
      btn.classList.remove("loading");
      btn.disabled = false;
      return;
    }

    emailjs.sendForm(serviceID, contactFormTemplateID, this).then(
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

    const serviceID = emailJsConfig.serviceID || "";
    const newsletterTemplateID = emailJsConfig.newsletterTemplateID || "";

    if (!serviceID || !newsletterTemplateID) {
      alert(
        "Newsletter form is not configured yet. Please add your EmailJS config.",
      );
      btn.innerHTML = originalText;
      btn.classList.remove("loading");
      btn.disabled = false;
      return;
    }

    emailjs.sendForm(serviceID, newsletterTemplateID, this).then(
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
// TRUST SECTION REVEAL ANIMATION
// =======================
const trustSection = document.querySelector(".trust-section");

if (trustSection) {
  const trustTargets = [
    trustSection.querySelector(".trust-intro"),
    ...trustSection.querySelectorAll(".stats-grid .stat-card"),
    ...trustSection.querySelectorAll(".reviews-grid .review-card"),
  ].filter(Boolean);
  const statNumberElements = Array.from(
    trustSection.querySelectorAll(".stat-number"),
  );
  let hasAnimatedStats = false;

  trustTargets.forEach((element) => {
    element.classList.add("trust-reveal");
  });

  const showTrust = () => {
    trustTargets.forEach((element) => {
      element.classList.add("trust-visible");
    });

    if (!hasAnimatedStats) {
      animateTrustNumbers();
      hasAnimatedStats = true;
    }
  };

  function animateTrustNumbers() {
    if (statNumberElements.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    statNumberElements.forEach((element) => {
      const finalValue = element.textContent.trim();
      const match = finalValue.match(/^(\d[\d,]*)([^\d]*)$/);
      if (!match) return;

      const numericPart = Number.parseInt(match[1].replace(/,/g, ""), 10);
      const suffix = match[2] || "";

      if (!Number.isFinite(numericPart) || numericPart <= 0) return;
      if (reducedMotion) {
        element.textContent = finalValue;
        return;
      }

      const duration = 1200;
      const startTime = performance.now();

      const step = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(numericPart * eased);

        element.textContent = `${current.toLocaleString()}${suffix}`;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          element.textContent = finalValue;
        }
      };

      window.requestAnimationFrame(step);
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showTrust();
  } else if ("IntersectionObserver" in window) {
    const trustObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          showTrust();
          observer.disconnect();
        });
      },
      { threshold: 0.2 },
    );

    trustObserver.observe(trustSection);
  } else {
    showTrust();
  }
}

// =======================
// LIGHTWEIGHT SECTION REVEALS
// =======================
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const revealGroups = [
  { selector: ".services .card", stagger: 70 },
  { selector: ".pricing .tier-card", stagger: 90 },
  { selector: ".faq-home .faq-item", stagger: 55 },
  { selector: ".blog-preview .blog-preview-card", stagger: 70 },
  { selector: ".contact form", stagger: 0 },
];

const revealElements = [];

revealGroups.forEach(({ selector, stagger }) => {
  const elements = Array.from(document.querySelectorAll(selector));

  elements.forEach((element, index) => {
    element.classList.add("scroll-reveal");
    element.style.setProperty("--reveal-delay", `${index * stagger}ms`);
    revealElements.push(element);
  });
});

if (revealElements.length > 0) {
  const showElement = (element) => {
    element.classList.add("reveal-visible");
  };

  if (prefersReducedMotion) {
    revealElements.forEach(showElement);
  } else if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          showElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -5% 0px" },
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(showElement);
  }
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

// =======================
// MOBILE BACKDROP DECK (index page)
// =======================
const backdropDeck = document.querySelector(".backdrop-grid");

if (backdropDeck) {
  const mobileDeckQuery = window.matchMedia("(max-width: 768px)");
  let startX = 0;
  let startY = 0;
  let isAnimating = false;

  const getCards = () =>
    Array.from(backdropDeck.querySelectorAll(".backdrop-item"));

  function updateDeckClasses() {
    const cards = getCards();

    cards.forEach((card, index) => {
      card.classList.remove(
        "deck-top",
        "deck-second",
        "deck-third",
        "deck-rest",
        "swipe-out-left",
        "swipe-out-right",
        "swipe-in-right",
      );

      if (index === 0) {
        card.classList.add("deck-top");
      } else if (index === 1) {
        card.classList.add("deck-second");
      } else if (index === 2) {
        card.classList.add("deck-third");
      } else {
        card.classList.add("deck-rest");
      }
    });
  }

  function cycleTopCard(direction) {
    if (!mobileDeckQuery.matches || isAnimating) return;

    const cards = getCards();
    if (cards.length < 2) return;

    if (direction > 0) {
      const previousCard = cards[cards.length - 1];
      backdropDeck.insertBefore(previousCard, cards[0]);
      updateDeckClasses();

      const incomingTopCard = backdropDeck.querySelector(
        ".backdrop-item.deck-top",
      );
      if (incomingTopCard) {
        incomingTopCard.classList.add("swipe-in-right");
        incomingTopCard.addEventListener(
          "animationend",
          () => {
            incomingTopCard.classList.remove("swipe-in-right");
          },
          { once: true },
        );
      }

      return;
    }

    const topCard = cards[0];
    const directionClass = "swipe-out-left";

    isAnimating = true;
    topCard.classList.add(directionClass);

    const onAnimationComplete = (event) => {
      if (event.propertyName !== "transform") return;

      topCard.removeEventListener("transitionend", onAnimationComplete);
      topCard.classList.remove(directionClass);
      backdropDeck.appendChild(topCard);
      updateDeckClasses();
      isAnimating = false;
    };

    topCard.addEventListener("transitionend", onAnimationComplete);
  }

  function handleTouchStart(event) {
    if (!mobileDeckQuery.matches) return;

    const firstTouch = event.touches[0];
    if (!firstTouch) return;

    startX = firstTouch.clientX;
    startY = firstTouch.clientY;
  }

  function handleTouchEnd(event) {
    if (!mobileDeckQuery.matches || isAnimating) return;

    const endTouch = event.changedTouches[0];
    if (!endTouch) return;

    const deltaX = endTouch.clientX - startX;
    const deltaY = endTouch.clientY - startY;

    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY)) return;

    cycleTopCard(deltaX < 0 ? -1 : 1);
  }

  function handleDeckTap(event) {
    if (!mobileDeckQuery.matches || isAnimating) return;

    const topCard = backdropDeck.querySelector(".backdrop-item.deck-top");
    if (!topCard) return;

    const bounds = topCard.getBoundingClientRect();
    const tapX = event.clientX;
    const relativeX = tapX - bounds.left;

    if (relativeX <= bounds.width * 0.35) {
      cycleTopCard(1);
      return;
    }

    if (relativeX >= bounds.width * 0.65) {
      cycleTopCard(-1);
    }
  }

  function initializeBackdropDeck() {
    if (mobileDeckQuery.matches) {
      updateDeckClasses();
    } else {
      getCards().forEach((card) => {
        card.classList.remove(
          "deck-top",
          "deck-second",
          "deck-third",
          "deck-rest",
          "swipe-out-left",
          "swipe-out-right",
          "swipe-in-right",
        );
      });
    }
  }

  backdropDeck.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });
  backdropDeck.addEventListener("touchend", handleTouchEnd, { passive: true });
  backdropDeck.addEventListener("click", handleDeckTap);
  mobileDeckQuery.addEventListener("change", initializeBackdropDeck);
  initializeBackdropDeck();
}

// =======================
// MOBILE HOW-IT-WORKS SCROLL STEPPER (index page)
// =======================
const howItWorksSection = document.querySelector(".how-it-works");
const howItWorksStepsContainer = document.querySelector(".steps-container");

if (howItWorksSection && howItWorksStepsContainer) {
  const mobileStepsQuery = window.matchMedia("(max-width: 768px)");
  const steps = Array.from(howItWorksStepsContainer.querySelectorAll(".step"));
  const stepHoldDuration = 1000;
  let activeIndex = -1;
  let pendingIndex = null;
  let lastStepChangeAt = 0;
  let rafPending = false;

  function setActiveStep(index) {
    if (activeIndex === index) return;

    activeIndex = index;
    steps.forEach((step, stepIndex) => {
      step.classList.toggle("step-active", stepIndex === index);
    });

    howItWorksSection.classList.toggle("step-end", index >= steps.length - 1);
  }

  function updateStepFromScroll() {
    if (!mobileStepsQuery.matches || steps.length === 0) return;

    const rect = howItWorksSection.getBoundingClientRect();
    const scrollDistance = Math.max(rect.height - window.innerHeight, 1);
    const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
    const maxIndex = Math.max(steps.length - 1, 0);
    let targetIndex = Math.min(
      maxIndex,
      Math.max(0, Math.floor(progress * (maxIndex + 1))),
    );

    if (activeIndex >= 0) {
      if (targetIndex > activeIndex + 1) {
        targetIndex = activeIndex + 1;
      } else if (targetIndex < activeIndex - 1) {
        targetIndex = activeIndex - 1;
      }
    }

    if (targetIndex === activeIndex) {
      pendingIndex = null;
      return;
    }

    const now = Date.now();
    if (now - lastStepChangeAt < stepHoldDuration) {
      pendingIndex = targetIndex;
      return;
    }

    pendingIndex = null;
    setActiveStep(targetIndex);
    lastStepChangeAt = now;
  }

  function flushPendingStep() {
    if (pendingIndex === null) return;

    const now = Date.now();
    if (now - lastStepChangeAt < stepHoldDuration) return;

    setActiveStep(pendingIndex);
    pendingIndex = null;
    lastStepChangeAt = now;
  }

  function scheduleScrollUpdate() {
    if (!mobileStepsQuery.matches || rafPending) return;

    rafPending = true;
    window.requestAnimationFrame(() => {
      updateStepFromScroll();
      flushPendingStep();
      rafPending = false;
    });
  }

  function initializeHowItWorksMobile() {
    if (mobileStepsQuery.matches) {
      howItWorksSection.classList.add("mobile-step-scroll");
      howItWorksSection.style.setProperty("--step-count", String(steps.length));
      setActiveStep(0);
      pendingIndex = null;
      lastStepChangeAt = Date.now();
      updateStepFromScroll();
    } else {
      howItWorksSection.classList.remove("mobile-step-scroll", "step-end");
      howItWorksSection.style.removeProperty("--step-count");
      activeIndex = -1;
      pendingIndex = null;
      lastStepChangeAt = 0;
      steps.forEach((step) => {
        step.classList.remove("step-active");
      });
    }
  }

  window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
  window.addEventListener("resize", scheduleScrollUpdate);
  mobileStepsQuery.addEventListener("change", initializeHowItWorksMobile);
  initializeHowItWorksMobile();
}

// =======================
// HOMEPAGE BLOG PREVIEW SORT (newest first)
// =======================
const blogPreviewGrid = document.querySelector(".blog-preview .grid");

if (blogPreviewGrid) {
  const previewCards = Array.from(
    blogPreviewGrid.querySelectorAll(".blog-preview-card"),
  );

  previewCards
    .sort((firstCard, secondCard) => {
      const firstDate = Date.parse(firstCard.dataset.published || "1970-01-01");
      const secondDate = Date.parse(
        secondCard.dataset.published || "1970-01-01",
      );

      return secondDate - firstDate;
    })
    .forEach((card) => {
      blogPreviewGrid.appendChild(card);
    });
}
