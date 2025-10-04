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