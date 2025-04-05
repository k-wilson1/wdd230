document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeBtn = document.getElementById('close-banner');

    closeBtn.addEventListener('click', function() {
        banner.style.display = 'none';
    });

});