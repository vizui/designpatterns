'use strict';

/*
 * Toggle code visibility
 */
$('.pl-toggle-code').on('click', function () {
    // toggle the sibling pre element
    $(this).parent().next('.pl-preview+pre').toggle(250);
    $(this).toggleClass('active');
});


var autoCollapsed = false;
$('.nav-collapse').on('click', function () {
    autoCollapsed = false;
    $('body').toggleClass('pl-collapsed-nav');
});

/* collapse sidebar when necessary */
var checkNav = function () {
    var collapsed = $('body').hasClass('pl-collapsed-nav'),
        width = $(this).width();

    if (width <= 767 && !collapsed) {
        autoCollapsed = true;
        $('body').addClass('pl-collapsed-nav');
    } else if (width > 767 && autoCollapsed) {
        $('body').removeClass('pl-collapsed-nav');
    }
};

$(window).on('resize', checkNav);
$(document).on('ready', checkNav);



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
