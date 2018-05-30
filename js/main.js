window.onload = () => {
    const ham = document.getElementById('ham');
    const main_nav = document.getElementById('main_nav');
    ham.addEventListener('click', function(e) {
        e.stopPropagation();
        main_nav.classList.toggle('active');
    });
    document.addEventListener('click', () => 
        main_nav.classList.remove('active'));
}