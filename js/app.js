// (() => {
//     "use strict";
//     function isWebp() {
//         function testWebP(callback) {
//             let webP = new Image;
//             webP.onload = webP.onerror = function() {
//                 callback(webP.height == 2);
//             };
//             webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//         }
//         testWebP((function(support) {
//             let className = support === true ? "webp" : "no-webp";
//             document.documentElement.classList.add(className);
//         }));
//     }
//     isWebp();
//     //!================
//     //!==========================
// })();
new Swiper('.faq__slider', {

    breakpoints: {
        768: {
            slidesPerView: 2,
        },

        1280: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    },

    navigation: {
        nextEl: '.faq__button--next',
        prevEl: '.faq__button--prev',
    },
});