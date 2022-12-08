let btnAlert = document.getElementById("alert");
btnAlert.addEventListener("click",()=>{
    alert("hello World");
})

let btnSomme = document.getElementById("somme");
btnSomme.addEventListener("click", ()=> {
    let div = document.createElement("div");
    div.innerText = 5 + 6;
    div.innerHTML = "5 + 6";
})




