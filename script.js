function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    if (menuLinks.style.display === 'flex') {
        menuLinks.style.display = 'none';
    } else {
        menuLinks.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', function () {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });

    // Set the initial mode based on user preference or default to light mode
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPrefersDark) {
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
    }
});
