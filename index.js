document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '☀️';
    } else {
        themeToggle.innerHTML = '🌙';
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '🌙';
        }
    });
});