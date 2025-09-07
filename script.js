function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
});


function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const numStars = 50;
    
    for (let i = 0; i < numStars; i++) {
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
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');

    createStars();

    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => page.classList.remove('active'));

    document.getElementById('landing-page').classList.add('active');
});