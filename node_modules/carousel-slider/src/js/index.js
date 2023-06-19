(function() {

    function stackSlides() {
        this.stacked = true
        const $thisCarousel = $(this)

        // set padding-bottom for each carousel-item that has a
        // background-image
        if ($thisCarousel.children('.carousel-item').children().length > 0) {
            const slideHeight = $($thisCarousel).css('padding-bottom')
            const slideWidth = $($thisCarousel).css('width')

            let paddingBottom =
                +slideHeight.substring(0, slideHeight.length - 2) /
                +slideWidth.substring(0, slideWidth.length - 2)

            paddingBottom = paddingBottom * 100 + '%' || '0'

            $thisCarousel.children('.carousel-item').each((index, item) => {
                if ($(item).css('background-image') !== 'none') {
                    $(item).css('padding-bottom', paddingBottom)
                }
            })
        }

        // replace carousel styles and functionality with stacked ones
        this.stopAutoSlide()
        $thisCarousel.find('.dot').removeClass('active')
        $thisCarousel.children()
            .addClass('stacked')
            .removeClass(
                `appear-from-left
                appear-from-right
                hide-to-left
                hide-to-right
                fade-out
                fade-in`
            )
        $thisCarousel.addClass('stacked')
    }

    function initCarousel(index, carousel) {
        if (this.stacked === false) return false

        this.stacked = false
        const $thisCarousel = $(this)
        const $carouselItems = $thisCarousel.find('.carousel-item')
        const quant = $carouselItems.length
        let waitTime = 5000
        let activeIndex = 0
        let nextIndex = 1
        let isAutoSlideOn = true

        // remove stacked styles
        $thisCarousel.removeClass('stacked')
        $thisCarousel.children().removeClass('stacked')
        $thisCarousel.children('.carousel-item').css('padding-bottom', '0')

        // hide all carousel items except the first one
        $carouselItems.addClass('fade-out')
        $carouselItems.removeClass('active')
        $carouselItems[0].classList.remove('fade-out')
        $carouselItems[0].classList.add('active')

        // create the dots
        $('.carousel .dots').html(function() {
            let dotElements = ``
            $carouselItems.each((index) => {
                const active = (index === 0) ? 'active' : ''
                dotElements += `<span data-index="${index}" class="dot ${active}"></span>`
            })
            return dotElements
        })

        function slideCarousel(e, direction) {
            const $dots = $thisCarousel.find('.dot')

            // hide current carousel-item
            const opposite = (direction === 'left') ? 'right' : 'left'
            $carouselItems[activeIndex].classList.remove('appear-from-left', 'appear-from-right', 'fade-in', 'active')
            $carouselItems[activeIndex].classList.add(`hide-to-${opposite}`)

            // calculate the index of the next carousel-item to show
            if (direction === 'left') {
                nextIndex = (activeIndex - 1 + quant) % quant
            }
            else {
                nextIndex = (activeIndex + 1 + quant) % quant
            }

            // show next carousel-item
            $carouselItems[nextIndex].classList.remove('hide-to-left', 'hide-to-right', 'fade-out')
            $carouselItems[nextIndex].classList.add(`appear-from-${direction}`, 'active')

            // update dots' UI
            $dots.removeClass('active')
            $dots[nextIndex].classList.add('active')

            activeIndex = nextIndex

            if (isAutoSlideOn === true) {
                restartAutoSlide()
            }
        }

        $thisCarousel.find('.left-btn').click(e => slideCarousel(e, 'left'))
        $thisCarousel.find('.right-btn').click(e => slideCarousel(e, 'right'))

        function onDotClick(thisDot) {
            const nextIndex = thisDot.dataset.index
            const $dots = $thisCarousel.find('.dot')

            if (+nextIndex === +activeIndex) return;

            // fade out active carousel-item
            $carouselItems[activeIndex].classList.remove('appear-from-left', 'appear-from-right', 'fade-in', 'active')
            $carouselItems[activeIndex].classList.add('fade-out')

            // fade in next carousel-item
            $carouselItems[nextIndex].classList.remove('hide-to-left', 'hide-to-right', 'fade-out')
            $carouselItems[nextIndex].classList.add('fade-in', 'active')

            // update dots' UI
            $dots.removeClass('active')
            $dots[nextIndex].classList.add('active')

            activeIndex = +nextIndex

            if (isAutoSlideOn === true) {
                restartAutoSlide()
            }
        }

        $thisCarousel.find('.dots').click(e => {
            if (e.target.classList.contains('dot')) {
                onDotClick(e.target)
            }
        })

        // isAutoSlideOn functionality
        let autoSlider = setInterval(() => slideCarousel(null, 'right'), waitTime)
        function restartAutoSlide() {
            if (autoSlider) clearTimeout(autoSlider)
            autoSlider = setInterval(() => slideCarousel(null, 'right'), waitTime)
        }

        // functions avaible to the user
        this.waitTime = function(time) {
            waitTime = +time
            restartAutoSlide()
            isAutoSlideOn = true
        }

        this.stopAutoSlide = function() {
            clearTimeout(autoSlider)
            isAutoSlideOn = false
        }

        this.stackSlides = stackSlides
        this.initCarousel = initCarousel

        $('.carousel .dots, #left-btn, #right-btn').click(e => {
            $(e.currentTarget).closest('.carousel')[0].stopAutoSlide()
        })

        if (quant <= 1) {
            this.stopAutoSlide()

            $('.carousel .dots, #left-btn, #right-btn').hide()
        }
    }

    if ($('.carousel').length) {
        $('.carousel').each(initCarousel)
    }

})()