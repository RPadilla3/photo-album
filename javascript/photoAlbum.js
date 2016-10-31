(function() {
    'use strict';

    $('.photos')
        .find('li')
        .on('click', function zoomIng(eventObj) {

            $(this).toggleClass('zoomed');
            $('main').addClass('zooming')
            $('.zoomed').append($('nav'))
            console.log(this);
        });
    $('.next')
        .on('click', function goRight(eventObj) {

            $(this).parent().parent().next('li')
            .toggleClass('zoomed')
            .append($('nav'));
        });

    $('.previous')
        .on('click', function goLeft(eventObj) {

            $(this).parent().parent().prev('li')
            .toggleClass('zoomed')
            .append($('nav'));
        });
    
})();
