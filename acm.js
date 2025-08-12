let btn = document.querySelector(".submitbtn");
let popup = document.querySelector(".popup");
let closebtn = document.querySelector(".closebtn");
let form = document.querySelector(".register-form");

form.addEventListener("submit", (e) => {
    let inputs = document.querySelectorAll("input, select");
    let filled = true;

    inputs.forEach(inp => {
        if (!inp.value) {
            filled = false;
        }
    });

    if (!filled) {
        e.preventDefault();
        alert("Please fill out the form");
    } else {
       
        setTimeout(() => {
            popup.classList.add("show");
            form.reset();
        }, 500);
    }
});

closebtn.addEventListener("click", () => {
    popup.classList.remove("show");
});
