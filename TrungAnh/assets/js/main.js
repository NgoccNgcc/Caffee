var swiper = new Swiper(".slide__header__banner", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper = new Swiper(".slide__products__item", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    loop: true,
  });

  var swiper = new Swiper(".slide__products__item_2", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    loop: true,
  });