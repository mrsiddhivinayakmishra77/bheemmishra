// Navbar Background Change
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 80) {
    header.style.background = "rgba(5,11,24,0.95)";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    header.style.background = "rgba(0,0,0,0.6)";
    header.style.boxShadow = "none";
  }
});

// Fade Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(
  ".about-box,.edu-card,.journey-card,.skill-card,.achievement-card,.project-card,.blog-card,.contact-card"
).forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(60px)";
  el.style.transition = "all .8s ease";
  observer.observe(el);
});

// Typing Effect
const text = "UPSC Civil Services Aspirant";
let i = 0;

const title = document.querySelector(".hero-text h3");

if (title) {
  title.innerHTML = "";

  function typing() {
    if (i < text.length) {
      title.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 80);
    }
  }

  typing();
}

// Button Animation
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.08)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// Welcome Message
window.onload = function () {
  console.log("Welcome to Bheem Mishra Portfolio");
};
