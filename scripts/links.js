const baseURL = "https://k-wilson1.github.io/wdd230/";
const linksURL = "https://k-wilson1.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.lessons);
        } else {
            console.error('Failed to fetch links:', response.status);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayLinks = (lessons) => {
    
    lessons.forEach((lesson) => {
        const weekElement = document.createElement('div');
        weekElement.classList.add('lesson-container');
        
        const lessonTitle = document.createElement('h2');
        lessonTitle.textContent = `Lesson ${lesson.lesson}: `;

        weekElement.appendChild(lessonTitle);
    
        lesson.links.forEach(link => {
            const linkElement =document.createElement('a');
            linkElement.textContent = link.title;
            linkElement.setAttribute('href', link.url);
            linkElement.setAttribute('target', '_blank');

            weekElement.appendChild(linkElement);

        });

        cards.appendChild(weekElement);
    });
};
getLinks();