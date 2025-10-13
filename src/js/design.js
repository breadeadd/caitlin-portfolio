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

//scene button changes
const sceneBtn = document.querySelector("#sceneBtn");
const scene1 = document.querySelector("#scene1");
const scene2 = document.querySelector("#scene2");
const scene3 = document.querySelector("#scene3");
const scene4 = document.querySelector("#scene4");

// Import images for proper bundling
import room1 from '../assets/glassHalfFull/scenes/blender/room1.png';
import room2 from '../assets/glassHalfFull/scenes/blender/room2.png';
import room3 from '../assets/glassHalfFull/scenes/blender/room3.png';
import room4 from '../assets/glassHalfFull/scenes/blender/room4.png';
import room1B from '../assets/glassHalfFull/scenes/blender/room1Before.png';
import room2B from '../assets/glassHalfFull/scenes/blender/room2Before.png';
import room3B from '../assets/glassHalfFull/scenes/blender/room3Before.png';
import room4B from '../assets/glassHalfFull/scenes/blender/room4Before.png';

let before = true;

//Starting states
scene1.src = room1B;
scene2.src = room2B;
scene3.src = room3B;
scene4.src = room4B;

sceneBtn.textContent = "AFTER";

function switchImages(){
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

sceneBtn.addEventListener("click", () => {
    switchImages();
})


