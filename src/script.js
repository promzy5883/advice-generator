"use strict";
const id = document.getElementById("id-no");
const advice = document.getElementById("text");
const dice = document.getElementById("dice");
function getAdvice() {
    dice.classList.add('load');
    return fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(data => {
        id.innerHTML = `# ${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`;
        dice.classList.remove("load");
    });
}
window.onload = function () {
    getAdvice();
};
