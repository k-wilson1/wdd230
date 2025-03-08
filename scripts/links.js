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
    const weekContainer = {};  // Object to hold lessons grouped by week

    // Group lessons by week
    lessons.forEach((lesson) => {
        if (!weekContainer[lesson.week]) {
            weekContainer[lesson.week] = [];  // array for the week 
        }
        weekContainer[lesson.week].push(lesson);  // Add lesson to the correct week
    });

    // Now display each week and its lessons
    for (const week in weekContainer) {
        const weekElement = document.createElement('div');
        weekElement.classList.add('week-container');

        // Add a heading for the week
        const weekTitle = document.createElement('h2');
        weekTitle.textContent = `Week ${week}`;
        weekElement.appendChild(weekTitle);

        // Display each lesson under the week
        weekContainer[week].forEach((lesson) => {
            const lessonContainer = document.createElement('div');
            lessonContainer.classList.add('lesson-container');

            // Display lesson number as a heading
            const lessonTitle = document.createElement('h3');
            lessonTitle.textContent = `Lesson ${lesson.lesson}`;
            lessonContainer.appendChild(lessonTitle);

            // Loop through links in the current lesson
            lesson.links.forEach((link) => {
                const linkUrl = document.createElement('a');
                linkUrl.textContent = link.url;
                linkUrl.setAttribute('href', link.url);
                linkUrl.setAttribute('target', '_blank');

                // Append the link to the lesson container
                lessonContainer.appendChild(linkUrl);
            });

            // Append the lesson container to the week container
            weekElement.appendChild(lessonContainer);
        });

        // Append the week container to the cards section
        cards.appendChild(weekElement);
    }
};

getLinks();
