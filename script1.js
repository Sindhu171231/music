document.addEventListener('DOMContentLoaded', () => {
    const centralButton = document.querySelector('#central-button');
    const menu = document.querySelector('#menu');
    
    centralButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
