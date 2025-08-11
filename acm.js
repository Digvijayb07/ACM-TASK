let btn = document.querySelector(".submitbtn");
let popup = document.querySelector(".popup");
let closebtn = document.querySelector(".closebtn");
let form=document.querySelector("form")


btn.addEventListener("click", (e) => {
    e.preventDefault(); 



    let inputs=document.querySelectorAll("input,select")
    let filled=true;

    inputs.forEach(e=>{
        if(!e.value){
            filled=false;
        }
    })


    if(filled){

        popup.classList.add("show");
    }
    else{
        alert("Please fill out the form")
    }




});

closebtn.addEventListener("click", () => {
    popup.classList.remove("show");
});