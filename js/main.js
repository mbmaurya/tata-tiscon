$(document).ready(function() {
    $(".testimonial-slider").slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});



$(".hero-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".product-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$('.program-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.testi-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
/* Product Jquery */

$('#btnSupport').click(function() {
    $('.dvStrength').removeClass('active_product');
    $('.dvDurability').removeClass('active_product');
    $('.dvSupport').addClass('active_product');
    $('#dvSupportDesc').show();
    $('#dvDurabilityDesc').hide();
    $('#dvStrengthDesc').hide();
})

$('#btnStrength').click(function() {
    $('.dvSupport').removeClass('active_product');
    $('.dvDurability').removeClass('active_product');
    $('.dvStrength').addClass('active_product');
    $('#dvSupportDesc').hide();
    $('#dvDurabilityDesc').hide();
    $('#dvStrengthDesc').show();
})

$('#btnDurability').click(function() {
    $('.dvStrength').removeClass('active_product');
    $('.dvSupport').removeClass('active_product');
    $('.dvDurability').addClass('active_product');
    $('#dvSupportDesc').hide();
    $('#dvDurabilityDesc').show();
    $('#dvStrengthDesc').hide();
})


$('#dvSD').click(function() {
    $('#dvSD').addClass('active_product_name');
    $('#dvSuperlinks').removeClass('active_product_name');
    $('#dvGFX').removeClass('active_product_name');
    $('#dvSDDesc').show();
    $('#dvSuperlinksDesc').hide();
    $('#dvGFXDesc').hide();
})


$('#dvSuperlinks').click(function() {
    $('#dvSD').removeClass('active_product_name');
    $('#dvSuperlinks').addClass('active_product_name');
    $('#dvGFX').removeClass('active_product_name');
    $('#dvSDDesc').hide();
    $('#dvSuperlinksDesc').show();
    $('#dvGFXDesc').hide();
})


$('#dvGFX').click(function() {
    $('#dvSD').removeClass('active_product_name');
    $('#dvSuperlinks').removeClass('active_product_name');
    $('#dvGFX').addClass('active_product_name');
    $('#dvSDDesc').hide();
    $('#dvSuperlinksDesc').hide();
    $('#dvGFXDesc').show();
})


/* /Product Jquery */
$(document).ready(function() {
    $("#product_tooltip_1").mouseover(function() {
        $('.product_tooltip_txt').show();
        $('.product_tooltip_txt_two').hide();
    });
    $("#product_tooltip_1").mouseout(function() {
        $('.product_tooltip_txt').hide();
    });
});

$(document).ready(function() {
    $("#product_tooltip_2").mouseover(function() {
        $('.product_tooltip_txt_two').show();
        $('.product_tooltip_txt').hide();
    });
    $("#product_tooltip_2").mouseout(function() {
        $('.product_tooltip_txt_two').hide();
    });
});


$(document).ready(function() {
    $("#aboutUsClick").click(function() {
        $('.storiesTata').show();
        $('.storiesTiscon').hide();
    });
});