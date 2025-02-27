const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar(date) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${currentYear}`;

    daysContainer.innerHTML = "";

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        daysContainer.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = i;
        daysContainer.appendChild(dayCell);
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);