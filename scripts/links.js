const baseURL = "https://k-wilson1.github.io/wdd230/";

const linksURL = "https://k-wilson1.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayLinks(data); 
    }
}
const displayLinks = (links) => {
    links.forEach((link) => {
        let cards = document.createElement('section');
        let linkUrl = document.createElement('a');
        let title = document.createElement('p');
        let heading = document.createElement('h2');
        lesson.textContent = `${link.lesson}`;
        title.textContent = `${link.title}`;
        linkUrl.textContent = `${link.link}`;
        heading.textContent = `Learning Activities`;

        cards.appendChild(heading);
        cards.appendChild(lesson);
        cards.appendChild(title);    
        cards.appendChild(linkUrl);
    }
        )
}
getLinks();
