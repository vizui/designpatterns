'use strict';

/*
 * Toggle code visibility
 */
$('.pl-pattern .pl-preview+pre').toggle(0);
$('.pl-toggle-code').on('click', function () {
    // toggle the sibling pre element
    $(this).parent().next('.pl-preview+pre').toggle(250);
    $(this).toggleClass('active');
});

$('.nav-collapse').on('click', function () {
    $('body').toggleClass('pl-collapsed-nav');
});


/*
 * Use bootstrap's scrollspy plugin to highlight subnav based on scroll position
 */
$('body').scrollspy({ target: '.pl-sidebar > .active', offset: 125 });


/* enable masks */
$(':input').inputmask();

/* select2 things */
$('.select2').select2({
    minimumResultsForSearch: 4
});

/* enable tooltips */
$('[data-toggle="tooltip"]').tooltip({container: 'body', delay: { show: 200, hide: 0 } });


/* enable datepickers */
$('.datepicker').datepicker({
    // autoSize: true,
    // showButtonPanel: true,
    numberOfMonths: 1,
    showOtherMonths: true
    // changeMonth: true,
    // changeYear: true
});

/* find checkboxes with the indeterminate attr and set the indeterminate property */
$('input[type="checkbox"][indeterminate]').each(function () {
    this.indeterminate = true;
});
