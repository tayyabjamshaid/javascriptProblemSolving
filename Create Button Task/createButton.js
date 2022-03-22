
let button=document.createElement("button")
button.id="btn"
button.innerText=0;
document.body.appendChild(button)
button.addEventListener("click",()=>{
 button.innerText= parseInt(button.innerText)+1;
})
