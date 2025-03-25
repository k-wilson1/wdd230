let thumbnails = document.querySelectorAll('.thumbnail img');
let mainImage = document.querySelector('.hero-image img');

for (let i=0; i < thumbnails.length; i++ ) {
    thumbnails[i].addEventListener('click', function() {
        mainImage.src = this.src;
    });
}