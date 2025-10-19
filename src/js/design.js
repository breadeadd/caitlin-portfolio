//scrolling reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(reveal => observer.observe(reveal));

//scene button changes
const sceneBtn = document.querySelector("#sceneBtn");
const scene1 = document.querySelector("#scene1");
const scene2 = document.querySelector("#scene2");
const scene3 = document.querySelector("#scene3");
const scene4 = document.querySelector("#scene4");

// Images as URL strings
const room1 = '/caitlin-portfolio/images/glassHalfFull/scenes/blender/room1.png';
const room2 = '/caitlin-portfolio/images/glassHalfFull/scenes/blender/room2.png';
const room3 = '/caitlin-portfolio/images/glassHalfFull/scenes/blender/room3.png';
const room4 = '/caitlin-portfolio/images/glassHalfFull/scenes/blender/room4.png';
const room1B = '/caitlin-portfolio/images/glassHalfFull/scenes/blender/room1Before.png';
const room2B = '/caitlin-portfolio/images/glassHalfFull/scenes/blender/room2Before.png';
const room3B = '/caitlin-portfolio/images/glassHalfFull/scenes/blender/room3Before.png';
const room4B = '/caitlin-portfolio/images/glassHalfFull/scenes/blender/room4Before.png';

let before = true;

// Starting states
scene1.src = room1B;
scene2.src = room2B;
scene3.src = room3B;
scene4.src = room4B;

sceneBtn.textContent = "AFTER";

function switchImages() {
  if (before) {
    scene1.src = room1;
    scene2.src = room2;
    scene3.src = room3;
    scene4.src = room4;
    sceneBtn.textContent = "BEFORE";
    before = false;
  } else {
    scene1.src = room1B;
    scene2.src = room2B;
    scene3.src = room3B;
    scene4.src = room4B;
    sceneBtn.textContent = "AFTER";
    before = true;
  }
}

sceneBtn.addEventListener("click", switchImages);
