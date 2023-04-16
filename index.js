// alert("Ohayo")

const randomInput = document.querySelector("#random");
const digitNum = document.querySelector("#digit-num");
const resultScreen = document.querySelector("#comb-result");
const heading = document.getElementById("heading");
const start = document.getElementById("start");
const go = document.getElementById("go");
const zoomScreen = document.getElementById("expand");
const fontChange = document.getElementById("font-change");
const adjustFontSize = document.getElementById("adjust-font-size");
const fontSize = document.getElementById("font-size");
const fontColor = document.getElementById("font-color");

let randomList = [];
let randomElement, screen, copiedText, interval;
let i = 0;



resultScreen.value = "";
    digitcomb = Number(digitNum.value) + 2;
    screen = resultScreen.textContent;
    heading.textContent = "Random " + digitNum.value + " Digit Number Generator";

    for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
        console.log(randomElement);
        // randomList.push(randomElement);
        resultScreen.value += randomElement;    
    };


document.querySelector("#spin").addEventListener ("mousedown", function () {
    resultScreen.value = "";
    digitcomb = Number(digitNum.value) + 2;
    screen = resultScreen.textContent;
    heading.textContent = "Random " + digitNum.value + " Digit Number Generator";


    for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
        console.log(randomElement);
        resultScreen.value += randomElement;    
    };
    interval = setInterval(infinteLoop, 100);
    start.style.backgroundColor = "red";
    start.textContent = "stop";
});

go.addEventListener ("mousedown", function () {
    resultScreen.value = "";
    digitcomb = Number(digitNum.value) + 2;
    screen = resultScreen.textContent;
    heading.textContent = "Random " + digitNum.value + " Digit Number Generator";

    for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
        console.log(randomElement);
        resultScreen.value += randomElement;    
    };
    start.style.backgroundColor = "red";
    start.textContent = "stop";
});

start.addEventListener ("click", function () {
    resultScreen.value = "";
    digitcomb = Number(digitNum.value) + 2;
    screen = resultScreen.textContent;
    heading.textContent = "Random " + digitNum.value + " Digit Number Generator";
    
    if (start.textContent === "start") {
        interval = setInterval(infinteLoop, 100);
        start.style.backgroundColor = "red";
        start.textContent = "stop";
    } else if (start.textContent === "stop") {
        clearInterval(interval);

        start.style.backgroundColor = "green";
        start.textContent = "start";

        resultScreen.value = "";
        digitcomb = Number(digitNum.value) + 2;
        screen = resultScreen.textContent;
        heading.textContent = "Random " + digitNum.value + " Digit Number Generator";

        for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
            randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
            console.log(randomElement);
            // randomList.push(randomElement);
            resultScreen.value += randomElement;    
        };
    };
    

});

adjustFontSize.addEventListener("click", function () {
    resultScreen.style.fontSize = fontSize.value + "px";
    resultScreen.style.fontColor = String(fontColor.value) ;
})

function infinteLoop () {
    resultScreen.value = "";
    for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
        console.log(randomElement);
        resultScreen.value += randomElement;    
    };
}


go.addEventListener("mouseup", function () {
    start.style.backgroundColor = "green";
    start.textContent = 'start';
});

document.getElementById("spin").addEventListener("mouseup", function () {
    clearInterval(interval);
    start.style.backgroundColor = "green";
    start.textContent = 'start';
});

document.getElementById("copy").addEventListener("click", function () {
    resultScreen.select();
    document.execCommand("copy");
    alert("copied");
} );