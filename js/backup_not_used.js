

$(document).ready(function () {
  // Make sure that one item keeps open in accordion
  const accordions = document.querySelectorAll(".accordion-collapse");
  let opening = false;
  accordions.forEach(function (el) {
    el.addEventListener("hide.bs.collapse", (event) => {
      if (!opening) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        opening = false;
      }
    });
    el.addEventListener("show.bs.collapse", (event) => {
      opening = true;
    });
  });

  let accordion_top_content_block = document.querySelector(".accordion_top_content_block");

  let mobileCloseBtn = document.querySelector(".cross_bar");
  let mobileOpenBtn = document.querySelector(".mobile_bars");
  let mobileMenu = document.querySelector(".mobile_slide_menu");

  // for popup

  let popup_close_btn = document.querySelector(".popup_close_btn");
  let popup = document.querySelector(".popup");

  popup_close_btn?.addEventListener("click", function () {
    popup.style.display = 'none';

  });

  // for price box  

 

  // for mobile menu close 

  mobileOpenBtn.addEventListener("click", function () {
    mobileMenu.classList.add("active");

  });

  mobileCloseBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");

  });

  $('.card-header').click(function () {
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
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

  $('#collapseOne').on('show.bs.collapse', function (e) {
    accordion_top_content_block.classList.remove("active");
  });
  $('#collapseThree').on('show.bs.collapse', function (e) {
    accordion_top_content_block.classList.remove("active");
  });
  $('#collapseTwo').on('show.bs.collapse', function (e) {

  $('#collapseTwo').on('hide.bs.collapse', function (e) {
    console.log("hide....");
    accordion_top_content_block.classList.remove("active");
  });
  $('#collapseTwo').on('show.bs.collapse', function (e) {
    console.log("show....");
    accordion_top_content_block.classList.add("active");
  });

})
});






var tabButtons=document.querySelectorAll(".price_box");


function priceCng(index){
  tabButtons.forEach(function(node){
    node.style.border="";
    
});
tabButtons[index].style.border="1px solid #000";


 };

// let donate_btn = document.querySelector(".donate_btn");
// donate_btn.addEventListener("click", function(){

// alert("hggh");
// });

let tab_one = document.querySelector('#collapseOne');
let tab_two = document.querySelector('#collapseTwo');

function nextBtn(index){
  // alert(index);
  if(index == 0 || index == 1){
tab_one.classList.remove("show");
tab_two.classList.add("show");
  }
}