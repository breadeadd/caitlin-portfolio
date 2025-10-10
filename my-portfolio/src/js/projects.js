document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent link clicks from triggering flip
            if (e.target.tagName === 'A') {
                return;
            }
            
            // Toggle flip state
            this.classList.toggle('flipped');
        });
    });
});

//scrolling reveal
// Select all elements you want to animate
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "transition-discrete", "duration-15s");
        // optional: stop observing after animation plays
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5 // 70% of the element must be visible
  }
);

// Watch each reveal element
reveals.forEach(reveal => {
  observer.observe(reveal);
});