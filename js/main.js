$(document).ready(function() {
    const accordions = document.querySelectorAll(".accordion-collapse");
    let opening = !1;
    accordions.forEach(function(el) {
        el.addEventListener("hide.bs.collapse", (event) => {
            if (!opening) {
                event.preventDefault();
                event.stopPropagation()
            } else {
                opening = !1
            }
        });
        el.addEventListener("show.bs.collapse", (event) => {
            opening = !0
        })
    });
    let accordion_top_content_block = document.querySelector(".accordion_top_content_block");
    let mobileCloseBtn = document.querySelector(".cross_bar");
    let mobileOpenBtn = document.querySelector(".mobile_bars");
    let mobileMenu = document.querySelector(".mobile_slide_menu");
    let popup_close_btn = document.querySelector(".popup_close_btn");
    let popup = document.querySelector(".popup");
    popup_close_btn ? .addEventListener("click", function() {
        popup.style.display = 'none'
    });
    mobileOpenBtn.addEventListener("click", function() {
        mobileMenu.classList.add("active")
    });
    mobileCloseBtn.addEventListener("click", function() {
        mobileMenu.classList.remove("active")
    });
    $('.card-header').click(function() {
        $(this).find('i').toggleClass('fas fa-plus fas fa-minus')
    });
    $('.multiple_items').slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.warrior_items').slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('#collapseOne').on('show.bs.collapse', function(e) {
        accordion_top_content_block.classList.remove("active")
    });
    $('#collapseThree').on('show.bs.collapse', function(e) {
        accordion_top_content_block.classList.remove("active")
    });
    $('#collapseTwo').on('show.bs.collapse', function(e) {
        $('#collapseTwo').on('hide.bs.collapse', function(e) {
            console.log("hide....");
            accordion_top_content_block.classList.remove("active")
        });
        $('#collapseTwo').on('show.bs.collapse', function(e) {
            console.log("show....");
            accordion_top_content_block.classList.add("active")
        })
    })
});
var tabButtons = document.querySelectorAll(".price_box");

function priceCng(index) {
    tabButtons.forEach(function(node) {
        node.style.border = ""
    });
    tabButtons[index].style.border = "1px solid #000"
};
let accTabCon = document.querySelector(".accordion_top_content_block");
let tab_one = document.querySelector('#collapseOne');
let tab_two = document.querySelector('#collapseTwo');
let tab_three = document.querySelector('#collapseThree');

function nextBtn(index) {
    if (index == 0 || index == 1) {
        tab_one.classList.remove("show");
        tab_two.classList.add("show");
        accTabCon.classList.add("active")
    }
    if (index == 2) {
        tab_two.classList.remove("show");
        accTabCon.classList.remove("active");
        tab_three.classList.add("show")
    }
}