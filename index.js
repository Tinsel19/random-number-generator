// alert("Ohayo")

const randomInput = document.querySelector("#random");
const digitNum = document.querySelector("#digit-num");
const resultScreen = document.querySelector("#comb-result");
const heading = document.getElementById("heading");

let randomList = [];
let randomElement, screen;

document.querySelector("#spin").addEventListener ("click", function () {
    randomList = [];
    resultScreen.value = "";
    digitcomb = Number(digitNum.value) + 2;
    screen = resultScreen.textContent;
    heading.textContent = "Random " + digitNum.value + " Digit Number Generator";
    for (i = 0; i <= Number(randomInput.value) ; i ++) {
        
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
        console.log(randomElement);
        randomList.push(randomElement);

        resultScreen.value += randomElement;

    }
})