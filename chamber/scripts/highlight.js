const membersURL = "https://k-wilson1.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#highlight');

async function getMembers() {
    const response = await fetch(membersURL);
    if ( response.ok) {
        const data = await response.json();
        displayMembers(data.members);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');

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
        
        if (level === "Silver" || level === "Gold") {
            cards.appendChild(card);
        };
        
    });
}
getMembers();