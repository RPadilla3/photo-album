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

        //Create a function to remove the class .zooming when finished with the
        //and also when the image ('ul') is clicked
        
    $('.zooming')
      .on('click', function removeMain(eventObj) {
            $(this).parent()
            .toggleClass('zooming');

      })
})();
