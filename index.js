

const randomInput = document.querySelector("#random");
const digitNum = document.querySelector("#digit-num");
const resultScreen = document.querySelector("#comb-result");
const heading = document.getElementById("heading");
const start = document.getElementById("start");
const go = document.getElementById("go");
const zoomScreen = document.getElementById("zoom");
const fontChange = document.getElementById("font-change");
const adjustFontSize = document.getElementById("adjust-font-size");
const fontSize = document.getElementById("font-size");
const fontColor = document.getElementById("font-color");
let data = [];
let btnDownloadCsv = document.querySelector("#download");

let randomList = [];
let randomElement, randomElements, screen, copiedText, interval, many;
let i = 0;
many = '';



resultScreen.value = "";
    digitcomb = Number(digitNum.value) + 2;
    screen = resultScreen.textContent;
    heading.textContent = "Random " + digitNum.value + " Digit Number Generator";

    for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
        many += randomElement+ "\n";
        console.log(randomElement);
        randomList.push( Object(Number(randomElement))  );
        resultScreen.value += randomElement;    
    };


document.querySelector("#spin").addEventListener ("mousedown", function () {
    resultScreen.value = "";
    digitcomb = Number(digitNum.value) + 2;
    screen = resultScreen.textContent;
    heading.textContent = "Random " + digitNum.value + " Digit Number Generator";
    randomList = [];


    for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
        randomElements = randomElement + '\xa0\xa0\xa0\xa0\xa0 ';
        randomList.push(randomElements)
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

    randomList = [];
    for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
        randomElements = randomElement + '\xa0\xa0\xa0\xa0\xa0 ';
        randomList.push(randomElements)
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

        randomList = [];

        for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
            randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
            randomElements = randomElement + '\xa0\xa0\xa0\xa0\xa0 ';
            randomList.push(randomElements);
            resultScreen.value += randomElement;   
        };
    };
    

});

adjustFontSize.addEventListener("click", function () {
    resultScreen.style.fontSize = fontSize.value + "px";
    resultScreen.style.color = String(fontColor.value) ;
})

function infinteLoop () {
    resultScreen.value = "";
    randomList = [];
    for (i = 0; i <= (Number(randomInput.value) -1) ; i ++)  {
        randomElement = Math.random().toString().slice(2, digitcomb) + '\xa0\xa0\xa0\xa0\xa0 ';
        randomElements = randomElement + '\xa0\xa0\xa0\xa0\xa0 ';
        randomList.push(randomElements)
        resultScreen.value += randomElement;
    }
};


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

zoomScreen.addEventListener("click", function () {

    if (zoomScreen.textContent === ' Zoom') {
        resultScreen.style.height = "500px";
        zoomScreen.innerHTML = '<i class="fa-solid fa-minimize"></i> Shrink';
    } else if (zoomScreen.textContent === ' Shrink') {
        resultScreen.style.height = "200px";
        zoomScreen.innerHTML = '<i class="fa-solid fa-expand"></i> Zoom';
    }
    
})



// csv download function section 
let list = Object.assign({}, randomList);

console.log(list)
data = [
    
    list,
];


btnDownloadCsv.addEventListener("click", function () {
    downloadCsv("random_combination.csv", json2csv.parse(data, {
        header: false,
        includeEmptyRows: true,
        delimiter: '\n',
        
    }));
});

function downloadCsv(filename, csvData) {
    const element = document.createElement("a");

    element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
    element.setAttribute("download", filename);
    element.style.display = "none";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

