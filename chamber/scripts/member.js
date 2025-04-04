const membersURL = "https://k-wilson1.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(membersURL);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data.members);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let img =  document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');
        let other = document.createElement('p');

        name.textContent = member.name;
        img.setAttribute('src', member.image);
        img.setAttribute('alt', member.name);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '100');
        img.setAttribute('height', '100');
        phone.textContent = member.phone;
        address.textContent = member.address;
        website.textContent = member.website;
        level.textContent = `Membership Level: ${member.level}`;
        other.textContent = `Other details: ${member.other}`;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(level);
        card.appendChild(other);

        cards.appendChild(card);

    });
}

getMembers();

