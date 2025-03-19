const membersURL = "https://k-wilson1.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#member-highlight');

async function getMembers() {
    const response = await fetch(membersURL);
    if ( response.ok) {
        const data = await response.json();
        console.log(data.members);
        displayRandomMembers(data.members);
    }
}
function shuffleArray(array) {
    let result = [];
    let tempArray = [...array];

    while (tempArray.length) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        result.push(tempArray.splice(randomIndex, 1)[0]);
    }
    return result;
}
const displayRandomMembers = (members) => {
    const silverOrGoldMembers = members.filter(member => member.level === "Silver" || member.level === "Gold");

    const randomMembers = shuffleArray(silverOrGoldMembers).slice(0,2);

    randomMembers.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let level = document.createElement('p');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');
        

        name.textContent = member.name;
        phone.textContent = member.phone;
        address.textContent = member.address;
        website.textContent = member.website;
        website.href = member.website;
        level.textContent = `Membership Level: ${member.level}`;

        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(level);
        
        if (member.level === "Silver" || member.level === "Gold") {
            console.log('Appending card:', cards);
            
            cards.appendChild(card);
        };
        
    });
}
getMembers();