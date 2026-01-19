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

// Replace YOUR_PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID with your EmailJS values
emailjs.init(""); // Your Public Key

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

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

      // Reset button after 3s
      setTimeout(() => {
        form.querySelector('button[type="submit"]').textContent =
          "Send Inquiry";
        form.querySelector('button[type="submit"]').style.background = "";
      }, 3000);

      alert("Thank you! We'll reply within 24 hours.");
    },
    (error) => {
      console.error("FAILED...", error);
      alert("Send failed. Try again or email info@ymeventvendors.ca");
    },
  );
});
