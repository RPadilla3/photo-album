(function() {
  'use strict';

    console.log($('main'));

    $('.photos')
        .find('li')
          .on('click', function zoomIng(eventObj) {
            $(this).toggleClass('zoomed')
            $(this).closest('main').toggleClass('zooming')
            $(this).append( $('nav') );

    });

})();
