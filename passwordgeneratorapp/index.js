const dispalyScreen=document.querySelector("[displayscreen]");
const passwordLength=document.querySelector("[passwordlength]");
const slider=document.querySelector('[slider]');
const valueUppercase=document.querySelector('#Uppercase');
const valueLowercase=document.querySelector('#Lowercase');
const valueNumbers=document.querySelector('#Numbers');
const Symbols=document.querySelector('#Symbols');
const diffsymbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
const ultraBox=document.querySelectorAll('input[type=checkbox]');
const generateBtn=document.querySelector('#generatebutton');
const copybtn=document.querySelector('[copybtn]');
const messbtn=document.querySelector('[messbtn]');
const indicator=document.querySelector('[indicator]');




let lengthPassword=10;
let checkboxultra=0;
function helpSlider(){
    passwordLength.innerText=lengthPassword;
    slider.value=lengthPassword;
    const min = slider.min;
    const max = slider.max;
    slider.style.backgroundSize = ( (slider.value - min)*100/(max - min)) + "% 100%"

}


helpSlider();
colorbtn("#ccc");
slider.addEventListener('input',function(e) {
        lengthPassword=e.target.value;
        helpSlider();
        // console.log(e.target.value)
})
function getrandomInt(min,max){
     return   Math.floor(Math.random()*(max-min))+min;
}
function getrandomNum(){
    return getrandomInt(0,10);
}
function getrandomChar(){
    let character=String.fromCharCode(getrandomInt(65,91)) ;
    return character;
}
function getrandomCharSmall(){
    let character=String.fromCharCode(getrandomInt(97,123)) ;
    return character;
}
function symbols(){
    let rndx= getrandomInt(0,diffsymbols.length);
    return diffsymbols.charAt(rndx);
}
function mazo (){
    checkboxultra=0;
    ultraBox.forEach(function(checkmx){
        if(checkmx.checked)(
            checkboxultra++
           
        )
        console.log(checkboxultra)
    })

}
ultraBox.forEach(function(check){
    check.addEventListener('change', mazo)

})
async function message(){
   if(dispalyScreen.value){
    try{
        await navigator.clipboard.writeText(dispalyScreen.value);
        messbtn.innerText='copied';

    }
    catch{
        messbtn.innerText='failed';
    }
    messbtn.classList.add("active");
    setTimeout(function(){
        messbtn.classList.remove("active");
    },2000)
   }

}
copybtn.addEventListener('click',message);
function colorbtn(color){
    indicator.style.backgroundColor=color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function checkcolor(){
   let makeupper=false;
   let makelower=false;
   let makenumbers=false;
   let makesymbols=false;
   if(valueUppercase.checked){
    makeupper=true;
   }
 
   
   if(valueLowercase.checked){
    makelower=true;
   }
   if(valueNumbers.checked){
    makenumbers=true;
   }
   if(Symbols.checked){
    makesymbols=true;
   }
   if(makeupper && makenumbers && makelower && makesymbols){
    colorbtn('#7CFC00');

   }
   else if (makelower && makenumbers ){
    colorbtn('#FF7F50')
   }
   else if(makelower||makeupper||makenumbers || makelower){
    colorbtn('#FF0000')
   }
   

}
function shuffle(word){
   let arr= Array.from(word);
   for(let i=0;i<arr.length;i++){
    const j=getrandomInt(0,arr.length);
    let b=arr[j];
    arr[j]=arr[i];
    arr[i]=b;
   }
   let char=""
   arr.forEach(function(key){
        char+=key;
   })
   return char;
  

}
generateBtn.addEventListener('click',function(){
    let password=[];
let realPassword=""

    if(checkboxultra<1){
        return;
    }
    if(lengthPassword<checkboxultra){
        lengthPassword=checkboxultra
        helpSlider();
    }

    if(valueUppercase.checked){
        password.push(getrandomChar);
    }
    if(valueLowercase.checked){
        password.push(getrandomCharSmall);
    }
    if(valueNumbers.checked){
        password.push(getrandomNum);
    }
    if(Symbols.checked){
        password.push(symbols);
    }


for(let i=0;i<password.length;i++){
    realPassword+=password[i]();
}
for(let i=password.length;i<lengthPassword;i++){
    if(checkboxultra<1){
        return;
    }
    let num=getrandomInt(0,password.length);
    let func=password[num]();
    realPassword+=func;


    

}
let key=shuffle(realPassword)
dispalyScreen.value=key;
checkcolor();





})




