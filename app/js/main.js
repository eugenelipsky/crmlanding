$(function () {
    $('.header__hero-slide').slick({
        arrows: false,
        dots: true
    });

    $('.resources__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: true
    });

    $('.quotes__slider').slick({
        variableWidth: true,
        arrows: false,
        dots: true
    });

    $('.faq__accordion').accordion({
        "transitionSpeed": 500,
        singleOpen: true
    });
});

