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
};/* ===== BHEEM AI 2.0 ===== */

const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("userInput");
const body = document.getElementById("chat-body");
const typing = document.getElementById("typing");

chatBtn.addEventListener("click", () => {
  chatBox.style.display = "block";
});

closeChat.addEventListener("click", () => {
  chatBox.style.display = "none";
});

function timeNow() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes().toString().padStart(2, "0");
  return h + ":" + m;
}

async function sendMessage() {

  let msg = input.value.trim();

  if (msg === "") return;

  body.innerHTML += `
  <div class="user">
    ${msg}
    <span class="time">${timeNow()}</span>
  </div>`;

  body.scrollTop = body.scrollHeight;

  input.value = "";

  typing.style.display = "block";

  try {

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDfUKnFQFKQulGjYhwc2QIu2QobEtb9lF4",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: msg
              }
            ]
          }
        ]
      })
    }
  );

const data = await response.json();
console.log(data);
alert(JSON.stringify(data));

typing.style.display = "none";

  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response received.";

  body.innerHTML += `
  <div class="bot">
    🤖 ${reply}
    <span class="time">${timeNow()}</span>
  </div>`;

  body.scrollTop = body.scrollHeight;

} catch (error) {

  typing.style.display = "none";

  body.innerHTML += `
  <div class="bot">
    ❌ Error connecting to Gemini.
    <span class="time">${timeNow()}</span>
  </div>`;
  }

}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e){

if(e.key==="Enter"){

sendMessage();

}

});// ===== UPSC Countdown =====

const examDate = new Date("May 24, 2027 09:30:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const gap = examDate - now;

const days = Math.floor(gap/(1000*60*60*24));
const hours = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((gap%(1000*60*60))/(1000*60));
const seconds = Math.floor((gap%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days+" Days "+
hours+" Hours "+
minutes+" Min "+
seconds+" Sec Left";

}

setInterval(updateCountdown,1000);

updateCountdown();if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.log("SW Error:", err));
  });
}// ===== MODEL PRACTICE =====

const startPractice = document.getElementById("startPractice");

let questions = [];

fetch("questions.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
  })
  .catch(err => console.log("Questions Load Error:", err));

let current = 0;

if(startPractice){

startPractice.addEventListener("click",showQuestion);

}

function showQuestion(){

const box = document.getElementById("practiceBox");

let q = questions[current];

box.innerHTML = `
<h3>📚 Model Practice</h3>

<p><b>Q${current+1}.</b> ${q.question}</p>

<button class="optionBtn" onclick="checkAnswer(0)">A. ${q.options[0]}</button><br><br>

<button class="optionBtn" onclick="checkAnswer(1)">B. ${q.options[1]}</button><br><br>

<button class="optionBtn" onclick="checkAnswer(2)">C. ${q.options[2]}</button><br><br>

<button class="optionBtn" onclick="checkAnswer(3)">D. ${q.options[3]}</button>

`;

}

window.checkAnswer=function(selected){

let q=questions[current];

const buttons=document.querySelectorAll(".optionBtn");

buttons.forEach(btn=>btn.disabled=true);

if(selected===q.answer){

buttons[selected].style.background="green";

}else{

buttons[selected].style.background="red";

buttons[q.answer].style.background="green";

}

setTimeout(()=>{

current++;

if(current<questions.length){

showQuestion();

}else{

document.getElementById("practiceBox").innerHTML=`
<h3>🎉 Practice Completed</h3>
<p>More Questions Coming Soon...</p>
`;

}

},1500);

}
