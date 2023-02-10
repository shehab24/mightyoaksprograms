let accordion_content_one = document.querySelector("#collapseOne");
let accordion_content_two = document.querySelector("#collapseTwo");
let accordion_content_three = document.querySelector("#collapseThree");


let accordion_btn_one = document.querySelector("#headingOne button");
let accordion_btn_two = document.querySelector("#headingTwo button");
let accordion_btn_three = document.querySelector("#headingThree button");

let accordion_top_content_block = document.querySelector(".accordion_top_content_block");



accordion_btn_one.addEventListener("click", function(){
    accordion_top_content_block.classList.remove("active");
    if(!accordion_content_one.classList.contains('show')){
        
        accordion_content_one.classList.add("show");
    }

});

accordion_btn_two.addEventListener("click", function(){
    accordion_top_content_block.classList.add("active");
   
    if(!accordion_content_two.classList.contains('show')){
       
        accordion_content_two.classList.add("show");
     
    }

});

accordion_btn_three.addEventListener("click", function(){
    accordion_top_content_block.classList.remove("active");
   
    if(!accordion_content_three.classList.contains('show')){
       
        accordion_content_three.classList.add("show");
     
    }

});

