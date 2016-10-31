(function() {
    'use strict';

    $('.photos')
        .find('li')
        .on('click', function zoomIng(eventObj) {
            $(this).toggleClass('zoomed')
            $(this).closest('main').toggleClass('zooming')
            $(this).append($('nav'))

        });

    $('.next')
        .on('click', function goRight(e) {

            $(this).parent().parent().next('li')
                .toggleClass('zoomed')
                .append($('nav'))

        });

    $('.previous')
      .on('click', function goLeft(e) {

        $(this).parent().parent().prev('li')
            .toggleClass('zoomed')
            .append($('nav'))
          
      });

})();
