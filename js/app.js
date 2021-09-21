let toggleBtn = document.querySelector('.toggle-btn');

$(document).ready(function () {
    $('.toggle-btn').click(function (e) {
        e.preventDefault();
        $('.navbar-ul').slideToggle({
            duration: 'fast',
            start: function () {
                $('.navbar-ul').css({
                    display: 'flex'
                });
            }
        });
        $('.toggle-btn').toggleClass('open');
    });
    let line = $('.line');
    for (let i = 0; i < line.length; i++) {
        $(line[i]).click(() => {
            if ($('.active-line') != null) {
                $('.active-line').removeClass('active-line');
            }
            $(line[i]).addClass('active-line');
            let carouselWidth = $('.carousel-team-content').width();
            $('.carousel-item').css({
                transform: `translateX(${i * (-carouselWidth)}px)`
            })
        })

    }
    let countSlid = 0;
    setInterval(() => {
        if (countSlid != 2) {
            $(line[countSlid]).click();
            countSlid++;
        } else {
            countSlid = 0;
            $(line[countSlid]).click();
            countSlid++;
        }
    }, 5000)
    let lineText = $('.line-text');
    for (let i = 0; i < lineText.length; i++) {
        $(lineText[i]).click(() => {
            if ($('.active-line-text') != null) {
                $('.active-line-text').removeClass('active-line-text');
            }
            $(lineText[i]).addClass('active-line-text');
            let cardTextWidth = $('.card-text-row').width();
            $('.card-text-row').css({
                transform: `translateX(${i * (-cardTextWidth)}px)`
            })
        })
    }
    let count = 0;
    setInterval(() => {
        if (count != 3) {
            $(lineText[count]).click();
            count++;
        } else {
            count = 0;
            $(lineText[count]).click();
            count++;
        }
    }, 5000);
    window.addEventListener("scroll", function (e) {
        if (scrollY >= 600) {
            $('.scroll-top').css({
                display: 'block'
            })
        } else {
            $('.scroll-top').css({
                display: 'none'
            })
        }
    });
    $('.top-up').click(() => {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

});