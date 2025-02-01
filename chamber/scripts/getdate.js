const options= {year:'numeric'};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString('en-US', options);

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").textContent = new Date().toLocaleTimeString('en-US');

//This is for the hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    
});