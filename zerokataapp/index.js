const playername=document.querySelector("[playername]");
const box=document.querySelectorAll(".box");
const btn=document.querySelector("[btn]");
let answer="";
let count=0;
let arr=["","","","","","","","",""];
const arrp=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
let player="X";

function btnfun(){
    arr=["","","","","","","","",""];
    player="X";
    count=0;
    answer="";
    box.forEach(function(boxes){
        boxes.innerText="";
        boxes.style.pointerEvents = "all";
        boxes.classList.remove("color-green");
    });
    btn.classList.remove("active");
    playername.innerText=`Current Player - ${player}`;



}












playername.innerText=`Current Player - ${player}`;
box.forEach(function(herobox,index){
    herobox.addEventListener('click',function(){
        valuecreator(herobox,index);
        
        
    })
});

function  valuecreator(herobox,index){
    if (herobox.innerText==="" ){
        
       
        herobox.innerText=player;
        
        arr[index]=player;
        console.log(arr[index]);
        checkresult(herobox);
        if(answer=="winner"){
            playername.innerText=`Winner Player - ${player}`;
            return;
        }
        box[index].style.pointerEvents = "none";
        count++;
        if(count==9){
            playername.innerText=`Game Tied !`;
            btn.classList.add("active");
            return;
        }
       
        swap();
        playername.innerText=`Current Player - ${player}`;
        
    }
    
}

function swap(){
    if(player=="X"){
        player="O"
    }
    else{
        player="X"
    }
}
function checkresult(herobox){
    arrp.forEach(function(indexo){
        if( arr[indexo[0]]===arr[indexo[1]] && arr[indexo[1]]===arr[indexo[2]] &&arr[indexo[2]]===`${player}`){
            // arr[indexo[0]].
            box.forEach((box) => {
                box.style.pointerEvents = "none";
            })
            box[indexo[0]].classList.add("color-green");
            box[indexo[1]].classList.add("color-green");
            box[indexo[2]].classList.add("color-green");
            
            answer="winner";
            btn.classList.add("active");
            
            
           
            
            

        }
    })
}
btn.addEventListener('click',btnfun);


