const children1 = document.getElementsByClassName("open-close");
const children2 = document.getElementsByClassName("get---2");
let imgq = document.querySelectorAll(".img1");
let button1= document.querySelectorAll(".button-change");
for (let i =0; i<children1.length;i++){
    children2[i].style.display="none";
    children1[i].addEventListener( 'click',()=>{                
        let hold=children2[i];                
        if(hold.style.display === "none"){
            for(let i=0;i<children2.length;i++){
                children2[i].style.display="none";
                button1[i].innerHTML="-";
            }
            hold.style.display ="flex";
            button1[i].innerHTML="+";
        }
        else{
            hold.style.display ="none";
            button1[i].innerHTML="-";   
        };
    });
}