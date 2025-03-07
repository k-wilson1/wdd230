const baseURL = "https://k-wilson1.github.io/wdd230/";

const linksURL = "https://k-wilson1.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data.lessons); 
    }
}
const displayLinks = (links) => {
    links.forEach((link) => {
        let linkUrl = document.createElement('a');
        let title = document.createElement('li');
        let lesson = document.createElement('ul');
       
        lesson.textContent = `${link.lesson}`;
        title.textContent = `${link.title}`;
        linkUrl.textContent = `${link.link}`;


        cards.appendChild(lesson);
        cards.appendChild(title);    
        cards.appendChild(linkUrl);


    }
        );
};
getLinks();
