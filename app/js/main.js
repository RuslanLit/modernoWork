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

   $(".js-range-slider").ionRangeSlider({
     type: "double",
     min: 0,
     max: 1000,
     from: 0,
     to: 600,
     prefix: "$"
   });

   $('.list-mode button').on('click', function () {
     $('.list-mode button').removeClass('active');
     $(this).toggleClass('active');
   });

   $('.icon-th-list').on('click', function() {
     $('.product-page__items>.product__item').addClass('list');
   });

   $('.icon-th-large').on('click', function () {
     $('.product-page__items>.product__item').removeClass('list');
   });
    
  $('.menu__btn').on('click', function() {
    $('.menu__list').slideToggle();
  });

  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  })

  $('.product-one__tabs .tab, .settings__tabs .tabs').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

var mixer = mixitup('.products__inner-box');


});
