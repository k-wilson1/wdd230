const rentalsURL = "https://k-wilson1.github.io/wdd230/cozumel/data/links.json";
const cards = document.querySelector('#cards');

async function getRentals() {
    const response = await fetch(rentalsURL);
    if (response.ok) {
        const data = await response.json();
        displayRentals(data.rentals);
    }
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let type = document.createElement('h2');
        let persons = document.createElement('p');
        let img =  document.createElement('img');
        let reservations = document.createElement('h3');
        let reservationhalfday = document.createElement('p');
        let reservationfullday = document.createElement('p');
        let walkin = document.createElement('h3');
        let walkinhalfday = document.createElement('p');
        let walkinfullday = document.createElement('p');

        type.textContent = rental.type;
        persons.textContent = `Max Persons: ${rental.persons}`;
        img.setAttribute('src', rental.image);
        img.setAttribute('alt', rental.type);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '100');
        img.setAttribute('height', '100');
        reservations.textContent = "Reservations";
        reservationhalfday.textContent = `Half Day: ${rental.reservations[0].halfDay}`;
        reservationfullday.textContent = `Full Day: ${rental.reservations[0].fullDay}`;
    
        walkin.textContent = "Walk-in";
        walkinhalfday.textContent = `Half Day: ${rental.walkin[0].halfDay}`;
        walkinfullday.textContent = `Full Day: ${rental.walkin[0].fullDay}`;
        card.appendChild(type);
        card.appendChild(img);
        card.appendChild(persons);
        card.appendChild(reservations);
        card.appendChild(reservationhalfday);
        card.appendChild(reservationfullday);
        card.appendChild(walkin);
        card.appendChild(walkinhalfday);
        card.appendChild(walkinfullday);
        cards.appendChild(card);
    }
    );  
}
getRentals();
