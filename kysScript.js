function kustuta(){
    let answer=document.getElementById("vastus");
    let pilt=document.getElementById("pilt");
    answer.innerHTML="";
    pilt.src="img/tyhi.png";
}
let sugu=null;
function loe(){
    let name=document.getElementById("nimi");
    let answer=document.getElementById("vastus");
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let valimata=document.getElementById("valimata");
    let pilt=document.getElementById("pilt");

    //radio valik

    if(mees.checked){
        sugu=mees.value;
        pilt.src="img/mees.png";
    } else if(naine.checked){
        sugu=naine.value;
        pilt.src="img/naine.png";
    } else if(valimata.checked){
        sugu=valimata.value;
        pilt.src="img/tyhi.png";
    } else {
       sugu="sa ei valinud";
    }

    answer.innerHTML="Tere päevast, "+sugu+" "+name.value;
}
function checkboxValik(){
    let answer=document.getElementById("vastus");
    let ilm1=document.getElementById("ilm1");
    let ilm2=document.getElementById("ilm2");
    let ilm3=document.getElementById("ilm3");
    let ilm4=document.getElementById("ilm4");

    let ilm="";
    if(ilm1.checked){
        ilm+=ilm1.value+", ";
    }
    if(ilm2.checked){
        ilm+=ilm2.value+", ";
    }
    if(ilm3.checked){
        ilm+=ilm3.value+", ";
    }
    if(ilm4.checked){
        ilm+=ilm4.value+", ";
    }
    if(ilm==""){
        ilm="sa ei valinud ilmateavet!";
    }
answer.innerHTML="Sinu valikud: "+ilm;
}
function selectValik(){
    let veeb=document.getElementById("veeb");
    let answer=document.getElementById("vastus");

    if(veeb.selectedIndex!=0){
        answer.innerHTML="Sa vaatad ilma "+veeb.value + " veebilehel";
        answer.style.color="red";
    } else{
        answer.innerHTML="sa ikka pead kuskil ilma teada!";
        answer.style.color="orange";
    }
}
function koikKoos(){

}
