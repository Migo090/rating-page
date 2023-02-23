link = `<footer><p class="link">
Challenge by 
<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
.
Coded by 
<a href="https://www.frontendmentor.io/profile/Migo090">Magdy Ali</a>
</p></footer>`
document.querySelector("body").innerHTML += link;
function display(){
    document.getElementById("rating-first").style.display = "none";
    document.getElementById("rating-second").style.display = "flex";
}
function rate(){
    for(let i =1;i<6;i++){
        choose = document.getElementById(i);
        if (choose.checked){
            document.getElementById("result").innerText = `You selected ${i} out of 5`;
        }
    }
}
