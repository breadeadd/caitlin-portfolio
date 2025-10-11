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


