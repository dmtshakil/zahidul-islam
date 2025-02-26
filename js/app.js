// side pannel 
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        toggleButton.textContent = '✖';
    } else {
        toggleButton.textContent = '☰';
    }
}
// side panel
$(document).ready(function(){
    $(window).scroll(function(){
        let scrollY = $(window).scrollTop();
        let rotateDegree = +2 - (scrollY * 0.05); // স্ক্রল করলে আরও বাঁকা হবে
        let newBottom = scrollY * 0.1; // স্ক্রল করলে নিচে নামবে
        
        $(".rotated-box").css({
            "transform": `translateX(-50%) rotate(${rotateDegree}deg)`,
            "bottom": `${newBottom}px`
        });
    });
});

let currentIndex = 0;
const images = ["img-2/img (1).png", "img-2/img (2).png", "img-2/img (3).png", "img-2/img (4).png", "img-2/img (5).png","img-2/img (6).png","img-2/img (7).png","img-2/img (8).png","img-2/img (9).png","img-2/img (10).png","img-2/img (11).png","img-2/img (12).png","img-2/img (13).png","img-2/img (14).png","img-2/img (15).png","img-2/img (16).png","img-2/img (17).png","img-2/img (18).png","img-2/img (19).png","img-2/img (20).png","img-2/img (21).png","img-2/img (22).png","img-2/img (23).png","img-2/img (24).png"];

function openModal(index) {
    currentIndex = index;
    $('#modalImage').attr('src', images[currentIndex]);
    $('#imageModal').modal('show');
}

$('#prevBtn').click(function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    $('#modalImage').attr('src', images[currentIndex]);
});

$('#nextBtn').click(function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    $('#modalImage').attr('src', images[currentIndex]);
});

// img end 

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});