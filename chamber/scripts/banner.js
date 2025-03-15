document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeBtn = document.getElementById('close-banner');

    const currentDay = new Date().getDay();

    if (currentDay >= 1 && currentDay <=3){
        banner.style.display = 'show';
    }

    closeBtn.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});