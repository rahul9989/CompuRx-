function testimonialCarousel() {
    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    })
}

function clientsCarousel() {
    $('#client-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
}

function contactPopup() {
    $('.contact-btn').on('click', function() {
        $(this).hide();
        $('.contact-popup form').fadeIn();
    })
    $('.fa-window-close').on('click', function() {
        $(this).parent('form').hide();
        $('.contact-btn').fadeIn();
    });
}

$(document).ready(function() {
    testimonialCarousel();
    clientsCarousel();
    contactPopup();
});