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
        ADVANTAGES SLIDER
      **********************
      **********************/
    $('.advantages__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3
    })

    /**********************
    **********************
        LINKS SLIDER
    **********************
    **********************/
    $('.links__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        prevArrow: $('.links__arrows-left'),
        nextArrow: $('.links__arrows-right')
    })


    /**********************
    **********************
        ACCARDION
    **********************
    **********************/
    const accordionTitles = document.querySelectorAll(".accardion-btn");
    const accardionCloseBtns = document.querySelectorAll(".accardion-close");

    accordionTitles.forEach((accordionTitle) => {
        accordionTitle.addEventListener("click", () => {
            if (accordionTitle.classList.contains("accardion-active")) {
                accordionTitle.classList.remove("accardion-active");
            } else {
                const accordionTitlesWithIsOpen = document.querySelectorAll(".accardion-active");
                accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
                    accordionTitleWithIsOpen.classList.remove("accardion-active");
                });
                accordionTitle.classList.add("accardion-active");
            }
        });
    });

    accardionCloseBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            accordionTitles.forEach((accardionBtn) => {
                accardionBtn.classList.remove('accardion-active');
            })
        })
    })


    /**********************
    **********************
        TABS
    **********************
    **********************/

    const tabs = document.querySelectorAll('.tab-link');
    const all_list = document.querySelectorAll('.tab-content');


    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            tabs.forEach(tab => { tab.classList.remove('active') })
            tab.classList.add('active')

            all_list.forEach(list => { list.classList.remove('active') })
            all_list[index].classList.add('active')
        })
    })


    /**********************
   **********************
       APPLICATION FILL FORM
   **********************
   **********************/
    const steps = document.querySelectorAll('.application__fill-top__item');
    const stepContents = document.querySelectorAll('.application__fill-form');
    const prevBtn = document.getElementById('previous');
    const nextBtn = document.getElementById('next');
    let currentStep = 0;

    function updateButtons() {
        prevBtn.disabled = currentStep === 0;
        nextBtn.disabled = currentStep === steps.length - 1;
    }

    function updateStepHighlight() {
        steps.forEach((step, index) => {
            if (index === currentStep) {
                step.classList.add('active');
                stepContents[index].classList.add('active');
            } else {
                step.classList.remove('active');
                stepContents[index].classList.remove('active');
            }
        });
    }

    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateButtons();
            updateStepHighlight();
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            updateButtons();
            updateStepHighlight();
        }
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextStep);
        prevBtn.addEventListener('click', prevStep);

        updateButtons();
        updateStepHighlight();

    }



    map_modal_btn = document.getElementById('map_btn');
    map_modal = document.getElementById('application-map-modal');
    map_modal_close = document.getElementById('application__fill-form-modal__close')

    if (map_modal_btn) {
        map_modal_btn.addEventListener('click', function () {
            map_modal.classList.add('active');
        })

    }
    if (map_modal_close) {
        map_modal_close.addEventListener('click', function () {
            map_modal.classList.remove('active');
        })
    }

});