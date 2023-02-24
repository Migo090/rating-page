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
for(let n =1;n<6;n++){
    document.getElementById(`${n}`).onclick = function (){
        return document.getElementById("result").innerText = `You selected ${n} out of 5`;
    }
}
