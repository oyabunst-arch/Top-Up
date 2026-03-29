let currentIndex = 0;
const cards = document.querySelectorAll('.card');

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev-card', 'next-card');
        
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('prev-card');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('next-card');
        }
    });
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + cards.length) % cards.length;
    updateCards();
}

// Set initial positions on load
updateCards();