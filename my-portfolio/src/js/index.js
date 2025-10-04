const sesabtn = document.querySelector("#sesaBtn");
const robogalsbtn = document.querySelector("#robogalsBtn");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const div = document.querySelector("#hello");
const clubImg = document.querySelector("#clubPic");

//initial text
const helloText = "Hello, I am Caitlin!";

const buttons = document.querySelectorAll(".btn");

const sesaTitle = "SESA | MARKETING COORDINATOR";
const sesaDesc = "Software Engineering Students Association (SESA) aims to enhance the experience of software engineering students at UoA. As the Marketing Coordinator, I design graphics and promotional materials for events for students to connect, learn, and have fun. During my time in this role, I have established an iconic branding and mascot design for SESA.";
const robogalsTitle = "ROBOGALS AKL | MARKETING MANAGER";
const robogalsDesc = "Robogals AKL is an organization that aims to inspire and empower young women to pursue careers in STEM. As the Marketing Manager, I am responsible for creating promotional materials and managing our social media presence to engage with our community and attract new members. Furthermore I actively volunteer at our various workshops.";

//photos
const sesaPic = "src/assets/sesa.webp";
const robogalsPic = "src/assets/robogals.JPG";


//track typing operations
let titleController = { current: null };

function textTypingEffect(element, text, i = 0, typingController = null) {
  if (typingController && typingController.cancelled) {
    return;
  }
  
  if (i === 0) {
    element.textContent = "";
  }

  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  const timeoutId = setTimeout(() => textTypingEffect(element, text, i + 1, typingController), 50);

  if (typingController) {
    typingController.timeoutId = timeoutId;
  }
}

function startTyping(element, text, controller) {
  // Cancel previous typing for this element
  if (controller.current) {
    controller.current.cancelled = true;
    if (controller.current.timeoutId) {
      clearTimeout(controller.current.timeoutId);
    }
  }
  // Create new typing controller
  const typingController = { cancelled: false, timeoutId: null };
  controller.current = typingController;

  // Start typing
  textTypingEffect(element, text, 0, typingController);
}

//changing buttons
function setActiveButton(activeBtn){
// Reset all buttons to default state
  buttons.forEach(b => {
    b.classList.remove("bg-[#497852]");
    b.classList.add("bg-accent", "text-main");
  });
  
  // Set active button
  activeBtn.classList.remove("bg-accent");
  activeBtn.classList.add("bg-[#497852]", "text-main");
}


//Starting State
textTypingEffect(div, helloText);
title.textContent = sesaTitle;
description.textContent = sesaDesc;
setActiveButton(sesabtn);
clubImg.src = sesaPic;

//buttons for changing involvement text
sesabtn.addEventListener("click", () => {
  setActiveButton(sesabtn)
  startTyping(title, sesaTitle, titleController);
  description.textContent = sesaDesc;
  clubImg.src = sesaPic;
});

robogalsbtn.addEventListener("click", () => {
  setActiveButton(robogalsbtn);
  startTyping(title, robogalsTitle, titleController);
  description.textContent = robogalsDesc;
  clubImg.src = robogalsPic;
});

//scrolling reveal
// Select all elements you want to animate
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        // optional: stop observing after animation plays
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15 // 15% of the element must be visible
  }
);

// Watch each reveal element
reveals.forEach(reveal => {
  observer.observe(reveal);
});


