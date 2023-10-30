const sun = document.querySelector('.sun');

sun.addEventListener('click', () => {
    sun.style.animationPlayState = 'paused';
    setTimeout(() => {
        sun.style.animationPlayState = 'running';
    }, 1000);
});
