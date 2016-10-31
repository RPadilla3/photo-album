(function() {
  'use strict';

    console.log($('main'));

    $('.photos')

        .find('li')
          .on('click', function zoomIng(eventObj) {
            $(this).toggleClass('zoomed')
        .find('main')
          .on('click', function zoomIn(eventObj) {
          $(this).toggleClass('zooming')

          })
    });

})();
