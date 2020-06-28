$(document).ready(function () {
  $(".testimonial-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
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
  responsive: [
    {
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
  responsive: [
    {
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

$(".program-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".testi-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

/* discovery slider */

$(".discovery-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  variableWidth: true,
  variableHeight: true,
  useTransform: true,
  focusOnSelect: false,
});

/* /discovery slider */

/*gallery lightbox */

$(".gallery-img").click(function () {
  $("#image").attr("src", $(this).data("img"));
  $("#image-lightbox").modal({ show: true });
});
$(".g-img").each(function (index, i) {
  $(".img-list").append(
    `<div><img src=${i.src} class="img-fluid grid-img" /></div>`
  );
});
$(".grid-img").click(function () {
  $("#image").attr("src", $(this).attr("src"));
});
$(".img-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: false,
});

/* /gallery lightbox */

/* Product Jquery */

$("#btnSupport").click(function () {
  $(".dvStrength").removeClass("active_product");
  $(".dvDurability").removeClass("active_product");
  $(".dvSupport").addClass("active_product");
  $("#dvSupportDesc").show();
  $("#dvDurabilityDesc").hide();
  $("#dvStrengthDesc").hide();
});

$("#btnStrength").click(function () {
  $(".dvSupport").removeClass("active_product");
  $(".dvDurability").removeClass("active_product");
  $(".dvStrength").addClass("active_product");
  $("#dvSupportDesc").hide();
  $("#dvDurabilityDesc").hide();
  $("#dvStrengthDesc").show();
});

$("#btnDurability").click(function () {
  $(".dvStrength").removeClass("active_product");
  $(".dvSupport").removeClass("active_product");
  $(".dvDurability").addClass("active_product");
  $("#dvSupportDesc").hide();
  $("#dvDurabilityDesc").show();
  $("#dvStrengthDesc").hide();
});

$("#dvSD").click(function () {
  $("#dvSD").addClass("active_product_name");
  $("#dvSuperlinks").removeClass("active_product_name");
  $("#dvGFX").removeClass("active_product_name");
  $("#dvSDDesc").show();
  $("#dvSuperlinksDesc").hide();
  $("#dvGFXDesc").hide();
});

$("#dvSuperlinks").click(function () {
  $("#dvSD").removeClass("active_product_name");
  $("#dvSuperlinks").addClass("active_product_name");
  $("#dvGFX").removeClass("active_product_name");
  $("#dvSDDesc").hide();
  $("#dvSuperlinksDesc").show();
  $("#dvGFXDesc").hide();
});

$("#dvGFX").click(function () {
  $("#dvSD").removeClass("active_product_name");
  $("#dvSuperlinks").removeClass("active_product_name");
  $("#dvGFX").addClass("active_product_name");
  $("#dvSDDesc").hide();
  $("#dvSuperlinksDesc").hide();
  $("#dvGFXDesc").show();
});

/* /Product Jquery */
$(document).ready(function () {
  $("#product_tooltip_1").mouseover(function () {
    $(".product_tooltip_txt").show();
    $(".product_tooltip_txt_two").hide();
  });
  $("#product_tooltip_1").mouseout(function () {
    $(".product_tooltip_txt").hide();
  });
});

$(document).ready(function () {
  $("#product_tooltip_2").mouseover(function () {
    $(".product_tooltip_txt_two").show();
    $(".product_tooltip_txt").hide();
  });
  $("#product_tooltip_2").mouseout(function () {
    $(".product_tooltip_txt_two").hide();
  });
});

$(document).ready(function () {
  $("#aboutUsClick").click(function () {
    $(".storiesTata").show();
    $(".storiesTiscon").hide();
  });
});
$(document).ready(function () {
  $(".mason-testimonial-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
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

  $(".expert-testimonial-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".map").maphilight({
    alwaysOn: true,
    fillColor: "1A366F",
    fillOpacity: "1",
    strokeColor: "1A266F",
    strokeWidth: 5,
    strokeOpacity: 0.5,
  });

  $(".plus-desc").mouseenter(function () {
    var id = $(this).attr("id");
    $(".plus-info").each(function (index) {
      var dataAttr = $(this).attr("data-infofor");
      if (id == dataAttr) {
        $(this).addClass("d-inline-block");
      }
    });
  });

  $(".plus-desc").mouseleave(function () {
    var id = $(this).attr("id");
    $(".plus-info").each(function (index) {
      var dataAttr = $(this).attr("data-infofor");
      if (id == dataAttr) {
        $(this).removeClass("d-inline-block");
      }
    });
  });

  $(".plus-desc").click(function () {
    $(this).addClass("active");
    var id = $(this).attr("id");
    $(".plus-info").each(function (index) {
      var dataAttr = $(this).attr("data-infofor");
      if (id == dataAttr) {
        $(this).removeClass("d-none");
        $(this).addClass("activated");
        var dataAttrTab = $(this).attr("data-tab");
        $("#" + dataAttrTab).tab("show");
        console.log(dataAttrTab);
      } else {
        $(this).removeClass("activated");
        $(this).addClass("d-none");
      }
    });
    $(".plus-desc").not(this).removeClass("active");
  });
});

// basera

$(".navbar-nav li").on("click", function () {
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
});

// $(".path").on('click', function() {
//   $(this).siblings().removeClass('focus');
//   $(this).addClass('focus')
//   $('#journey-carousel').carousel($(this).data('index') -1);
// });
$("#journey-carousel").on("slide.bs.carousel", function () {
  // $(`.path[data-index=${$('.carousel-item').data('id')}]`).addClass('focus');
  // if($('.carousel-item').hasClass('active')) {
  //   $(`.path[data-index='3']`).addClass('focus');
  //   console.log($('.carousel-item').data('id  '))
  // }
  // $('.carousel-item').each(function(i, e) {
  //   if($(e).hasClass('active')) {
  //     $(`.path[data-index=${i+2}]`).addClass('focus');
  //   }
  // })
});
$(".right-arrow").on("click", function () {
  $("#journey-carousel").carousel("next");
});
$(".left-arrow").on("click", function () {
  $("#journey-carousel").carousel("prev");
});
