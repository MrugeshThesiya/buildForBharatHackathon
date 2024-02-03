var button =  document.getElementById("button")
button.addEventListener("click",function(event){
    event.preventDefault();
    console.log("button clicked");
    button.style.display="none";
})