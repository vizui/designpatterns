'use strict';

(function() {
    /* enable masks */
    $(':input').inputmask();

    /* select2 things */
    $('.select2').select2({
        minimumResultsForSearch: 4
    });

    /* expandable rows */
    $('table[data-pl-expandable-rows] > tbody > tr').on('click', function() {
        var val = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !val);
        $(this).next('tr[data-pl-detail-row]').toggle();
    });

    /* container switch */
    $('.btn-fixed').click(function() {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('header .container-fluid, main').addClass('container').removeClass('container-fluid');
    });

    $('.btn-fluid').click(function() {
        $('[data-toggle="tooltip"]').tooltip('hide');
        $('header .container, main').addClass('container-fluid').removeClass('container');
    });

    /* Create Account terms agreement checkbox */
    $('#chk-agree').click(function() {
        $('.btn-primary').attr('disabled', !this.checked);
    });

    /* Create Account terms agreement button */
    $('.btn-primary').click(function() {
        location.href = 'createAcct-step2.html';
    });
})();
