document.addEventListener('DOMContentLoaded', function() {
    function handleSubmit(event) {
        event.preventDefault();

        let formt = event.target;
        let formData = new FormData(formt);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ":" + pair[1]);
        }
    }
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
};

const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const message = document.querySelector("#message");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pw1.value !== pw2.value) {
        message.textContent = "❗Passwords do not match";
        message.style.visibility = "visible";
        pw2.style.backgroundColor = "#fff0f3";
        pw2.value = "";
        pw2.focus();
    } else {
        message.style.display = "none";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000";
    }
};