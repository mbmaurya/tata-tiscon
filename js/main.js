
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                dots: true

            }
        }
    })
    $('.client-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                loop: false
            }
        }
    })
    $('.progrmme-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                dots: true,
                loop: false
            }
        }
    })
    $('.journey-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        responsiveClass: true,
	nav: true,
 	navText: ["<img src='images/myprevimage.png' width='100'>","<img src='images/mynextimage.png' width='100'>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                dots: false,
                loop: false
            }
        }
    })   

    $('.journey-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        responsiveClass: true,
	nav: true,
 	navText: ["<img src='images/myprevimage.png' width='100'>","<img src='images/mynextimage.png' width='100'>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                dots: false,
                loop: false
            }
        }
    }) 


	$('#btnSupport').click(function(){
		$('#dvStrength').removeClass('active_product');
		$('#dvDurability').removeClass('active_product');
		$('#dvSupport').addClass('active_product');
		$('#dvSupportDesc').show();
		$('#dvDurabilityDesc').hide();
		$('#dvStrengthDesc').hide();
	})
	
	$('#btnStrength').click(function(){
		$('#dvSupport').removeClass('active_product');
		$('#dvDurability').removeClass('active_product');
		$('#dvStrength').addClass('active_product');
		$('#dvSupportDesc').hide();
		$('#dvDurabilityDesc').hide();
		$('#dvStrengthDesc').show();
	})
	
	$('#btnDurability').click(function(){
		$('#dvStrength').removeClass('active_product');
		$('#dvSupport').removeClass('active_product');
		$('#dvDurability').addClass('active_product');
		$('#dvSupportDesc').hide();
		$('#dvDurabilityDesc').show();
		$('#dvStrengthDesc').hide();
	})
	
	
	$('#dvSD').click(function(){
		$('#dvSD').addClass('active_product_name');
		$('#dvSuperlinks').removeClass('active_product_name');
		$('#dvGFX').removeClass('active_product_name');
		$('#dvSDDesc').show();
		$('#dvSuperlinksDesc').hide();
		$('#dvGFXDesc').hide();
	})
	
	
	$('#dvSuperlinks').click(function(){
		$('#dvSD').removeClass('active_product_name');
		$('#dvSuperlinks').addClass('active_product_name');
		$('#dvGFX').removeClass('active_product_name');
		$('#dvSDDesc').hide();
		$('#dvSuperlinksDesc').show();
		$('#dvGFXDesc').hide();
	})
	
	
	$('#dvGFX').click(function(){
		$('#dvSD').removeClass('active_product_name');
		$('#dvSuperlinks').removeClass('active_product_name');
		$('#dvGFX').addClass('active_product_name');
		$('#dvSDDesc').hide();
		$('#dvSuperlinksDesc').hide();
		$('#dvGFXDesc').show();
	})

$(document).ready(function(){
  $("#product_tooltip_1").mouseover(function(){
    $('.product_tooltip_txt').show();
   $('.product_tooltip_txt_two').hide();
  });
  $("#product_tooltip_1").mouseout(function(){
    $('.product_tooltip_txt').hide();  
});
});

$(document).ready(function(){
  $("#product_tooltip_2").mouseover(function(){
    $('.product_tooltip_txt_two').show();
	 $('.product_tooltip_txt').hide();
  });
  $("#product_tooltip_2").mouseout(function(){
    $('.product_tooltip_txt_two').hide();  });
});


$(document).ready(function(){
  $("#about_us_tata_steel").click(function(){
    $('#tata_story').show();
    $('#tiscon_story').hide();
  });
});

/* $(document).ready(function(){
  $(".programm_section").hover(function(){
    $(".programm_section p").css("color", "white");
    }, function(){
    $(".programm_section p").css("color", "black");

  });
}); */

