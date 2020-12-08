var translateBtn = document.querySelector('.translate-btn');
var inputTxt = document.querySelector('.txt-input');
var outputDiv = document.querySelector('.output');
var darkModeBtn = document.querySelector('.icon-wrapper');
var htmlClass = document.querySelector('html');
var emoji = document.querySelector('.wave-emoji');
var iconContainer = document.querySelector('.icon-container');


var serverurl = "https://api.funtranslations.com/translate/binary.json";


// 


function getTranslationUrl(input)  {
    return serverurl + '?' + 'text=' + input
}


function translateTxt(){
    var inputText = inputTxt.value;
    fetch(getTranslationUrl(inputText))
        .then(response=>response.json())
        .then(json=>{
            var binaryText = json.contents.translated;
            outputHtml = `<h6>${binaryText}</h6>`
            outputDiv.innerHTML = outputHtml;
        })
        .catch(err=>console.log(err));
}


translateBtn.addEventListener('click',translateTxt);

//Dark mode
function darkMode(){
    if(darkModeBtn.classList.contains('active')){
        var html = `<div class="icon-container"><i class="fas fa-moon fa-2x icon"></i></div>`;
        htmlClass.style.filter = "invert(1) hue-rotate(180deg)";
        emoji.style.filter = "invert(1) hue-rotate(180deg)";
    }else{
        var html = `<div class="icon-container"><i class="fas fa-sun fa-2x icon"></i></div>`;
        htmlClass.style.filter = "invert(0) hue-rotate(0deg)";
        emoji.style.filter = "invert(0) hue-rotate(0deg)";
        
    }
    // var html = `<div class="icon-container"><i class="fas fa-moon fa-2x icon"></i></div>`;
    darkModeBtn.innerHTML = html;
    // htmlClass.style.filter = "invert(1) hue-rotate(180deg)";
    darkModeBtn.classList.toggle("active");
}

darkModeBtn.addEventListener('click',darkMode);
