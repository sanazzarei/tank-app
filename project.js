
var mail1= document.getElementById('11');

function func1(){
   console.log("user email is "+mail1.value);
}

var mail2= document.getElementById('22');

function func2(){
   console.log("user email is: "+mail2.value);
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-blue", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-blue";
}

