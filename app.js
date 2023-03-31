let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountain_back = document.getElementById("mountain_back")
let mountain_front = document.getElementById("mountain_front")
let btn = document.getElementsByClassName("btn")
let text = document.getElementById("text")

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25+'px';  
    moon.style.top = value * 1.05+'px'; 
    mountain_back.style.top = value * 0.5+'px'; 
    mountain_front.style.top = value * 0+'px'; 
    text.style.marginTop = value *1.5 +'px';
    text.style.marginRight = value *4+'px';
    btn.style.marginTop = value * +'px';
    // moon.style.down = value +'px';

})