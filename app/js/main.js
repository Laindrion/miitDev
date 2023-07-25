$(document).ready(function () {

    /**********************
    **********************
        STICKY HEADER
    **********************
    **********************/
    window.onscroll = function () { myFunction() };
    // Get the header
    var header = document.getElementById("header");
    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    /**********************
    **********************
        LANGUAGE BUTTON
    *********************
    **********************/
    $('.navbar__top-item-lang').click(function () {
        $('.navbar__top-item-lang__inner').toggleClass('active')
    })

    /**********************
    **********************
        HERO SLIDER
      **********************
      **********************/
    $('.hero__slider').slick({
        arrows: false,
        dots: true,
        fade: true
    })


    /**********************
    **********************
        HERO SLIDER
      **********************
      **********************/
    $('.advantages__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3
    })


});