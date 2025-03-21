const button= document.querySelector('#join');
button.textContent = 'Join Us!';
button.id= 'join';
button.className= 'join';


button.addEventListener('click', () => {
    window.location.href = 'join.html';
    //alert('Welcome to the Chamber of Commerce! We look forward to working with you.');
});


