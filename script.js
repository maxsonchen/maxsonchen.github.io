function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function createStars() {
    const starsContainers = document.querySelectorAll('.stars-container');
    const numRoundStars = 35;
    const numDiamondStars = 15;
    
    starsContainers.forEach(starsContainer => {
        // Create round stars
        for (let i = 0; i < numRoundStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            const size = Math.random() * 3 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.animationDelay = Math.random() * 2 + 's';
            starsContainer.appendChild(star);
        }
        
        // Create diamond stars
        for (let i = 0; i < numDiamondStars; i++) {
            const diamondStar = document.createElement('div');
            diamondStar.className = 'diamond-star';
            diamondStar.style.left = Math.random() * 100 + '%';
            diamondStar.style.top = Math.random() * 100 + '%';
            const size = Math.random() * 6 + 6;
            diamondStar.style.width = size + 'px';
            diamondStar.style.height = size + 'px';
            diamondStar.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(diamondStar);
        }
    });
}

// Stardust trail
const starSymbols = ['✦', '✧', '⋆', '✩'];
const starColors = [
    'rgba(255, 255, 255, 0.9)',
    'rgba(230, 230, 230, 0.8)',
    'rgba(200, 150, 255, 0.7)',
    'rgba(180, 160, 255, 0.6)'
];

function createStardust(x, y) {
    if (Math.random() > 0.3) return;
    
    const stardust = document.createElement('div');
    stardust.className = 'stardust';
    
    const randomStar = starSymbols[Math.floor(Math.random() * starSymbols.length)];
    const randomColor = starColors[Math.floor(Math.random() * starColors.length)];
    
    stardust.textContent = randomStar;
    stardust.style.color = randomColor;
    
    const offsetX = (Math.random() - 0.5) * 80;
    const offsetY = (Math.random() - 0.5) * 80;
    
    stardust.style.left = (x + offsetX) + 'px';
    stardust.style.top = (y + offsetY) + 'px';
    
    document.body.appendChild(stardust);
    
    setTimeout(() => {
        if (stardust.parentNode) {
            stardust.remove();
        }
    }, 1500);
}

let customCursor;

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Create stars
    createStars();
    
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => page.classList.remove('active'));
    document.getElementById('landing-page').classList.add('active');
    
    // Create custom cursor
    customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    document.body.appendChild(customCursor);
});

document.addEventListener('mousemove', (e) => {
    // Update custom cursor position
    if (customCursor) {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    }
    
    // Create stardust trail
    createStardust(e.clientX, e.clientY);
});

// Leaving and entering
document.addEventListener('mouseenter', () => {
    if (customCursor) customCursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    if (customCursor) customCursor.style.opacity = '0';
});