const rentalsURL = "https://k-wilson1.github.io/wdd230/cozumel/data/links.json";
const cards = document.querySelector('#cards');

async function getRentals() {
    const response = await fetch(rentalsURL);
    if (response.ok) {
        const data = await response.json();
        console.log(rentalsURL);
        displayRentals(data.rentals);
    }
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let type = document.createElement('h2');
        let persons = document.createElement('p');
        let reservations = document.createElement('h1');
        let reservationhalfday = document.createElement('p');
        let reservationfullday = document.createElement('p');
        let walkin = document.createElement('h1');
        let walkinhalfday = document.createElement('p');
        let walkinfullday = document.createElement('p');

        type.textContent = rental.type;
        persons.textContent = `Max Persons: ${rental.persons}`;
        reservations.textContent = "Reservations";
        reservationhalfday.textContent = `Half Day: ${rental.reservationhalfday}`;
        reservationfullday.textContent = `Full Day: ${rental.reservationfullday}`;
        walkin.textContent = "Walk-in";
        walkinhalfday.textContent = `Half Day: ${rental.walkinhalfday}`;
        walkinfullday.textContent = `Full Day: ${rental.walkinfullday}`;
        card.appendChild(type);
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
