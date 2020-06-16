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
