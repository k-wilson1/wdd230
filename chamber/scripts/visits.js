const msToDays = 86400000;
const theDateToday = new Date();

const todayElement = document.querySelector("#today");
const today = Date.now();

const lastVisit = localStorage.getItem('lastVisit');
const sidebarContent = document.getElementById('visits');

if (!lastVisit) {
    sidebarContent.innerHTML = "Welcome! Let us know if you have any questions.";
    localStorage.setItem('lastVisit', theDateToday.toISOString());
}
else {
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = today - lastVisitDate;

    const daysSinceLastVisit = Math.floor(timeDifference/msToDays);

    if (daysSinceLastVisit < 1){
        sidebarContent.innerHTML = "Back so soon! Awesome!";
    }
    else {
        const dayText = daysSinceLastVisit === 1 ? 'day' : 'days';
        sidebarContent.innerHTML = `You last visited ${daysSinceLastVisit} ${dayText} ago`;
    }
    localStorage.setItem('lastVisit', theDateToday.toISOString());
};
