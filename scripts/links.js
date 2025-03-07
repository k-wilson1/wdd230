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
const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        lesson.links.forEach((link) => {    
            let linkUrl = document.createElement('a');
            let title = document.createElement('li');
            let lessonText = document.createElement('ul');

            lessonText.textContent = `Lesson ${lesson.lesson}`;
            title.textContent = `${link.title}`;
            linkUrl.textContent = link.url;
            linkUrl.setAttribute('href', `${link.link}`);
            linkUrl.setAttribute('target', '_blank');


            cards.appendChild(lessonText);
            cards.appendChild(title);    
            cards.appendChild(linkUrl);


    });
});
};
getLinks();
