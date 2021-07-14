const slider = document.querySelector("#slider");
let sliderSec = document.querySelectorAll(".slidersec");
let sliderSeclast = sliderSec[sliderSec.length -1];
const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");
console.log("miau");
slider.insertAdjacentElement('afterbegin', sliderSeclast);


function NextSlider(){
    let sliderSecfirst= document.querySelectorAll(".slidersec")[0];
    slider.style.marginLeft ="-200%";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
    slider.style.transition ="none";    
    slider.insertAdjacentElement('beforeend', sliderSecfirst);
    slider.style.marginLeft ="-100%";
    },500);
    }
    
    function PrevSlider(){
        let sliderSec= document.querySelectorAll(".slidersec");
        let sliderSeclast = sliderSec[sliderSec.length -1];
        slider.style.marginLeft ="0%";
        slider.style.transition ="all 0.5s";
        setTimeout(function(){
        slider.style.transition ="none";    
        slider.insertAdjacentElement('afterbegin', sliderSeclast);
        slider.style.marginLeft ="-100%";
        },500);
        }
        btnright.addEventListener('click', function(){
           NextSlider(); 
        });
        btnleft.addEventListener('click', function(){
            PrevSlider(); 
         });
         setInterval(function(){ NextSlider();},8000);