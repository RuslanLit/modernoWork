$(function() {

$(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    dots:true,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll:4,
    infinite: true

  });

var mixer = mixitup('.products__inner-box');


    
});
