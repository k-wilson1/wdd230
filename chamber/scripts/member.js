document.getElementById('date').value = Date.now();

const membersURL = "https://k-wilson1.github.io/wdd230/chamber/data/members.json";
const members = document.getElementById('members');

async function getMembers() {
    const response = await fetch(membersURL);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data.members);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const memberContainer = document.createElement('div');
        memberContainer.classList.add('member-container');

        const memberName = document.createElement('h2');
        memberName.textContent = member.name;
        memberContainer.appendChild(memberName);

        const memberImage = document.createElement('img');
        memberImage.src = member.image;
        memberImage.alt = member.name;
        memberContainer.appendChild(memberImage);

        const memberPhone = document.createElement('a');
        memberPhone.textContent = member.phone;
        memberPhone.href = `tel:${member.phone}`;  
        memberContainer.appendChild(memberPhone);

        const memberUrl = document.createElement('a');
        memberUrl.textContent = member.website;
        memberUrl.href = member.website;
        memberUrl.target = '_blank';
        memberContainer.appendChild(memberUrl);

        const memberLevel = document.createElement('p');  
        memberLevel.textContent = `Level: ${member.level}`;
        memberContainer.appendChild(memberLevel);

        const memberOther = document.createElement('p');  
        memberOther.textContent = `Other: ${member.other}`;
        memberContainer.appendChild(memberOther);

        members.appendChild(memberContainer);
    });
};

getMembers();

