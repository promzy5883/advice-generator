const id = document.getElementById("id-no") as HTMLSpanElement;
const advice = document.getElementById("text") as HTMLParagraphElement;
const dice = document.getElementById("dice") as HTMLImageElement;
function getAdvice():any{
    dice.classList.add('load')
   return fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(data => {
     id.innerHTML = `# ${data.slip.id}`;
     advice.innerHTML = `"${data.slip.advice}"`
     dice.classList.remove("load");
    });
}

window.onload = function():any {
    getAdvice()
}