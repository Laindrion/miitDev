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
        $('.navbar__top-item-lang__inner').toggleClass('active');

        $('.burger__navbar').removeClass('active');
        $('body').removeClass('modal__open');
    })

    /**********************
    **********************
      HEADER SEARCH
    **********************
    **********************/

    $('#header-search').click(() => {
        $('#navbar-search').addClass('active');
    })
    $('#close-search').click(() => {
        $('#navbar-search').removeClass('active');
    })

    /**********************
    **********************
      BURGER MENU
    **********************
    **********************/
    $('#burger-menu').click(function () {
        $('.burger__navbar').addClass('active');
        $('body').addClass('modal__open');

        $('.navbar__top-item-lang__inner').removeClass('active');
    })

    $('#burger-menu-close').click(() => {
        $('.burger__navbar').removeClass('active');
        $('body').removeClass('modal__open');
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
    });


    /**********************
    **********************
        ADVANTAGES SLIDER
      **********************
      **********************/
    $('.advantages__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

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
        nextArrow: $('.links__arrows-right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
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
    const submitBtn = document.getElementById('submit-btn')
    const prevBtn = document.getElementById('previous');
    const nextBtn = document.getElementById('next');
    let currentStep = 0;

    function updateButtons() {
        prevBtn.disabled = currentStep === 0;
        nextBtn.disabled = currentStep === steps.length - 1;

        if (currentStep === 0) {
            prevBtn.style.display = 'none'; // Hide the Previous button
        } else {
            prevBtn.style.display = 'block'; // Show the Previous button
        }

        if (currentStep === steps.length - 1) {
            nextBtn.style.display = 'none'; // Hide the Next button
            submitBtn.style.display = 'block'; // Show the Submit button
        } else {
            nextBtn.style.display = 'block'; // Show the Next button
            submitBtn.style.display = 'none'; // Hide the Submit button
        }
    }

    function validateInputs() {
        const inputs = stepContents[currentStep].querySelectorAll('input');
        const selects = stepContents[currentStep].querySelectorAll('select');

        for (const input of inputs) {
            if (input.value.trim() === '') {
                return false; // Return false if any input is empty
            }
        }

        for (const select of selects) {
            if (select.value.trim() === '') {
                return false; // Return false if any select is empty
            }
        }

        return true; // All inputs and selects are filled
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
            if (validateInputs()) {
                currentStep++;
                updateButtons();
                updateStepHighlight();
            } else {
                alert('Please fill in all the required fields before proceeding.');
            }
        }
    }

    function submitForm() {
        if (validateInputs()) {
            // Perform form submission logic here
        } else {
            alert('Please fill in all the required fields before submitting.');
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




    /**********************
    **********************
       MAP SLIDER
    **********************
    **********************/
    // Get the SVG map element and the list of regions
    const svgMap = document.getElementById('uzbekistan-map');
    const regionListItems = document.querySelectorAll('.region__list-item');
    const uzbekistanInfo = document.getElementById('uzbekistan-info');

    // Add click event listeners to each SVG region
    if (svgMap) {
        svgMap.querySelectorAll('path').forEach(function (region) {
            region.addEventListener('click', function () {
                // Reset the style of all list items and SVG regions
                regionListItems.forEach(function (item) {
                    item.classList.remove('active');
                });
                svgMap.querySelectorAll('path').forEach(function (region) {
                    region.removeAttribute('style');
                });

                // Get the region name from the data-region attribute
                const regionName = region.getAttribute('data-region');

                // Add active class to the corresponding list item
                const clickedListItem = document.querySelector(`.region__list-item[data-region="${regionName}"]`);
                clickedListItem.classList.add('active');

                // Change the fill color of the clicked SVG region
                region.style.fill = '#ffffff'; // Change to your desired color
                region.style.fillOpacity = '1'; // Change to your desired color

                if (uzbekistanInfo) {
                    region.style.fill = '#051A3B';
                }

                // Scroll to the clicked list item
                clickedListItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
        });
    }


    // Add click event listeners to each list item
    regionListItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Reset the style of all list items and SVG regions
            regionListItems.forEach(function (item) {
                item.classList.remove('active');
            });
            svgMap.querySelectorAll('path').forEach(function (region) {
                region.removeAttribute('style');
            });

            // Get the region name from the data-region attribute
            const regionName = item.getAttribute('data-region');

            // Add active class to the corresponding list item
            const clickedRegion = document.querySelector(`path[data-region="${regionName}"]`);
            clickedRegion.style.fill = '#fff'; // Change to your desired color
            clickedRegion.style.fillOpacity = '1';

            if (uzbekistanInfo) {
                clickedRegion.style.fill = '#051A3B';
            }

            item.classList.add('active');

            // Scroll to the clicked list item
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });


    /**********************
   **********************
      CONTRACT
   **********************
   **********************/

    const itemList = document.getElementById("currency-list");
    const addItemButton = document.getElementById("currency-add");
    if (addItemButton) {
        addItemButton.addEventListener("click", function () {
            const listItem = document.createElement("li");
            listItem.classList.add("currency__list-item", "row");

            const col1 = document.createElement("div");
            col1.classList.add("col-lg-8");
            const label1 = document.createElement("label");
            label1.textContent = "Валюта";
            const input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            label1.appendChild(input1);
            col1.appendChild(label1);
            listItem.appendChild(col1);

            const col2 = document.createElement("div");
            col2.classList.add("col-lg-3");
            const label2 = document.createElement("label");
            label2.textContent = "Стоимость контракта";
            const input2 = document.createElement("input");
            input2.setAttribute("type", "text");
            label2.appendChild(input2);
            col2.appendChild(label2);
            listItem.appendChild(col2);

            const col3 = document.createElement("div");
            col3.classList.add("currency__list-close", "col-lg-1");
            const closeButton = document.createElement("button");
            const closeImg = document.createElement("img");
            closeImg.setAttribute("src", "images/close-list.svg");
            closeImg.setAttribute("alt", "");
            closeButton.appendChild(closeImg);
            closeButton.addEventListener("click", function () {
                itemList.removeChild(listItem);
            });
            col3.appendChild(closeButton);
            listItem.appendChild(col3);

            itemList.appendChild(listItem);
        });
    }


    let contractSelect = document.getElementById('contract');
    let contractInnerCover = document.getElementById('contract-cover');
    let contractInner = document.getElementById('contract-inner');
    let contractInnerAdditional = document.getElementById('contract-additional');

    if (contractInner != null) {
        contractInner.remove();
    }

    if (contractInnerAdditional != null) {
        contractInnerAdditional.remove();
    }

    contractSelect.addEventListener('change', function () {
        if (contractSelect.value === 'Contract') {
            contractInnerAdditional.remove();
            contractInnerCover.append(contractInner);
        } else if (contractSelect.value === 'Additional agreement') {
            contractInner.remove();
            contractInnerCover.append(contractInnerAdditional);
        } else {
            contractInnerAdditional.remove();
            contractInner.remove();
        }
    })

});