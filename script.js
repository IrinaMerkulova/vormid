//randompic() - võtab pildid massiivist ja lehe värskendamisel muudab pildi
function randompic(){
    //massiiv piltidest
    const images = [
        'img/mees.png',
        'img/naine.png',
        'img/tyhi.png'
    ];
    //juhuslikult määrataud pildid
    const randomIndex = Math.floor(Math.random() * images.length);
    // pildid võetakse massiivist
    const randomImage = images[randomIndex];

    const img = document.getElementById('random-img');
    img.src = randomImage;
}
// kontrollib kas pildiaadress  on sama, mis  on select loetelus, kui jah -->õige, ei -->vale
function imgChoice(){
    const img = document.getElementById('random-img');
    if(document.getElementById("valik5").value==img.getAttribute("src"))
    {
        document.getElementById("vastus2").innerHTML="õige";
    }
    else{
        document.getElementById("vastus2").innerHTML="vale";
    }

}


//let  vastus2=document.getElementById("vastus2");
//let  kogus2=document.getElementById("kogus2");
//let  pilt=document.getElementById("pilt");

const dollar=1.16;
const sek=10.65;
const rub=84.20;
const frank=1.077;
// kontrollib id=kogus ei ole tühi
function validateForm() {
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
        alert("Sisesta kogus! ");
        return false;
    }
}
function radioChange(event) {
    validateForm();
    let  vastus=document.getElementById("vastus");
    let  kogus=document.getElementById("kogus");
    let inputValue=kogus.value;
    if (event.target.id === "dollar") {
        vastus.innerHTML = calculate(inputValue, dollar) + " $";
        //pilt.src="img/dollar.png";
    } else if (event.target.id === "rub") {
        vastus.innerHTML = calculate(inputValue, rub) + " ₽";
        //pilt.src="img/.png";
    } else if (event.target.id === "sek") {
        vastus.innerHTML = calculate(inputValue, sek) + " SEK";
        //pilt.src="img/.png";
    } else if (event.target.id === "frank") {
        vastus.innerHTML = calculate(inputValue, frank) + " CHF";
        //pilt.src="img/dollar.png";
    }
}

function calculate(val, currency){
    return (val*currency).toFixed(3);
    // toFixed(3) -? 3 märki peale komat

}
function selectOptionChange(event){
    tyhistaRadioValik();
    tyhistaText();
    tyhistaCheckboxValik();
    validateForm();
    let  vastus=document.getElementById("vastus");
    let  kogus=document.getElementById("kogus");
    let inputValue=kogus.value;
    if (event.target.value === "dollar") {
        vastus.innerHTML = calculate(inputValue, dollar) + " $";
        //pilt.src="img/dollar.png";
    } else if (event.target.value === "rub") {
        vastus.innerHTML = calculate(inputValue, rub) + " ₽";
        //pilt.src="img/.png";
    } else if (event.target.value === "kroon") {
        vastus.innerHTML = calculate(inputValue, sek) + " SEK";
        //pilt.src="img/.png";
    } else if (event.target.value === "frank") {
        vastus.innerHTML = calculate(inputValue, frank) + " CHF";
       //pilt.src="img/.png";
    }
}






//tyhista elemendid

//radio valikud name="valuuta" tühistatakse
function tyhistaRadioValik(){
    var elem=document.getElementsByName("valuuta");
    for(var i=0; i<elem.length; i++){
        elem[i].checked=false;
    }
}
//input type=text id=type1 tühistatakse
function tyhistaText(){
    var inptt=document.getElementById("type1");
    inptt.value = "";
}
//checkbox name="valik2" tyhistatakse kõik elemendid!
function tyhistaCheckboxValik(){
    var elem=document.getElementsByName("valik2");
    for(var i=0; i<elem.length; i++){
        elem[i].checked=false;
    }
}
//tyhista select

