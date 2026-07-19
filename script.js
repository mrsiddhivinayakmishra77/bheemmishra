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
};// ===== BHEEM AI =====

const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");

chatBtn.onclick = () => {
  chatBox.style.display = "block";
};

closeChat.onclick = () => {
  chatBox.style.display = "none";
};

function replyAI(){

let input = document.getElementById("userInput");

let msg = input.value.trim();

if(msg=="") return;

let body = document.getElementById("chat-body");

body.innerHTML += `<div class="user">${msg}</div>`;

let ans="Sorry, I don't know this yet.";

let q = msg.toLowerCase();

if(q.includes("upsc"))
ans="UPSC conducts the Civil Services Examination every year in three stages: Prelims, Mains and Interview.";

else if(q.includes("ias"))
ans="To become an IAS Officer you need to clear the UPSC Civil Services Examination.";

else if(q.includes("history"))
ans="History is an important subject for UPSC. Start with NCERT books and then Spectrum Modern History.";

else if(q.includes("geography"))
ans="Study NCERT Geography first, then G.C. Leong and Atlas practice.";

else if(q.includes("polity"))
ans="Read Indian Polity by M. Laxmikanth along with the Constitution.";

else if(q.includes("economy"))
ans="Start with NCERT and basic Economy concepts. Follow the Budget and Economic Survey.";

else if(q.includes("environment"))
ans="Study Shankar IAS Environment Book and current affairs.";

else if(q.includes("science"))
ans="Read NCERT Science and follow current science developments.";

else if(q.includes("current"))
ans="Read PIB, PRS, The Hindu and Indian Express daily.";

else if(q.includes("ncert"))
ans="Read NCERT Books from Class 6 to 12 carefully.";

else if(q.includes("laxmikanth"))
ans="Indian Polity by M. Laxmikanth is the standard book for UPSC Polity.";

else if(q.includes("hello"))
ans="Hello 👋 Welcome to Bheem AI.";

else if(q.includes("hi"))
ans="Hi 😊 How can I help you with UPSC?";

body.innerHTML += `<div class="bot">${ans}</div>`;

input.value="";

body.scrollTop = body.scrollHeight;

}document.getElementById("userInput").addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        replyAI();
    }
});
