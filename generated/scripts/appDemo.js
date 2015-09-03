'use strict';

(function() {
    /* enable masks */
    $(':input').inputmask();

    /* select2 things */
    $('.select2').select2({
        minimumResultsForSearch: 4
    });

    $('.btn-fixed').click(function() {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('header .container-fluid, main').addClass('container').removeClass('container-fluid');
    });

    $('.btn-fluid').click(function() {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('header .container, main').addClass('container-fluid').removeClass('container');
    });


    $('#chk-agree').click(function() {
        $('.btn-primary').attr('disabled', !this.checked);
    });

    $('.btn-primary').click(function() {
        location.href = 'createAcct-step2.html';
    });
})();
