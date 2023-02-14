let accordion_content_one = document.querySelector("#collapseOne");
let accordion_content_two = document.querySelector("#collapseTwo");
let accordion_content_three = document.querySelector("#collapseThree");


let accordion_btn_one = document.querySelector("#headingOne button");
let accordion_btn_two = document.querySelector("#headingTwo button");
let accordion_btn_three = document.querySelector("#headingThree button");

let accordion_top_content_block = document.querySelector(".accordion_top_content_block");


let mobileCloseBtn = document.querySelector(".cross_bar");
let mobileOpenBtn = document.querySelector(".mobile_bars");
let mobileMenu = document.querySelector(".mobile_slide_menu");


// for popup

let popup_close_btn = document.querySelector(".popup_close_btn");
let popup = document.querySelector(".popup");

popup_close_btn?.addEventListener("click", function(){
popup.style.display = 'none';

});

$('.card-header').click(function () {
  $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
});


let allInfo ;
function accordionFunc(allInfo){
  // alert(allInfo);
  if(allInfo == 'Donation'){
    accordion_btn_one.disabled = true; 
    accordion_btn_two.disabled = false; 
    accordion_btn_three.disabled = false; 
  }
  if(allInfo == 'BILLING'){
    accordion_btn_one.disabled = false; 
    accordion_btn_two.disabled = true; 
    accordion_btn_three.disabled = false; 
  }
  if(allInfo == 'Payment'){
    accordion_btn_one.disabled = false; 
    accordion_btn_two.disabled = false; 
    accordion_btn_three.disabled = true; 
  }

}

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




// for mobile menu close 

mobileOpenBtn.addEventListener("click",function(){
mobileMenu.classList.add("active");

});

mobileCloseBtn.addEventListener("click",function(){
mobileMenu.classList.remove("active");

});



$('.multiple_items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
 
    ]
  });

$('.warrior_items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
 
    ]
  });