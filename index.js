const mdiv= document.querySelector(".GET-INVOLVED");
const items =mdiv.children;
for(let i =1 ;i <items.length;i++){
    let hed =items[i].querySelector(".open-close");
    let hold=items[i].querySelector(".get---2");
    let image = hed.querySelector("#img1");
    hold.style.display="none";
    hed.addEventListener( 'click',()=>{
        if(hold.style.display === "none"){
            hold.style.display ="flex";
            image.src = "images/plus-sign-svgrepo-com.svg";
        }
        else{
            hold.style.display ="none";
            image.src = "images/minus-svgrepo-com.svg";   
        };
    });
};