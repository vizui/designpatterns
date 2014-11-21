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
$('body').scrollspy({ target: '.pl-sidebar > .nav > .active', offset: 125 });


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


/* closable toast examples */
$('.pl-closable-toasts .toast .close').each(function () {
    $(this).on('click', function () {
        $(this).closest('.toast').animate({
            right: '-100%',
            opacity: 0
        }, 150, 'swing', function () {
            $(this).hide(150);
        });
    });
});

/* quick and dirty working toast examples */
$('.show-toasts').each(function () {
    var showToastButton = $(this);

    // get toasts and move to body
    var selector = showToastButton.attr('data-toast-target');
    var toastContainer = $(selector);
    toastContainer.hide();
    $(document.body).append(toastContainer);

    var closers = toastContainer.find('.close');
    var closersCount = closers.length;
    var closedCount = 0;
    closers.each(function () {
        $(this).on('click', function () {
            if (closersCount === ++closedCount) {
                closedCount = 0;
                setTimeout(function () {
                    toastContainer.hide();
                }, 150);
            }
        });
    });

    var showToast = function (toastEl) {
        toastEl.css({right: '-100%', opacity: 0, display: 'block'});
        toastEl.animate({
            right: '0',
            opacity: 1
        }, 150, 'swing', function () {
            if (toastEl.next().length) {
                setTimeout(function () {
                    showToast(toastEl.next());
                }, 1000);
            }
        });
    };

    // show the toasts on click
    showToastButton.on('click', function() {
        toastContainer.find('.toast').hide().css({right: 0, opacity: 1});
        toastContainer.toggle();
        if (toastContainer.css('display') === 'block') {
            toastContainer.css({
                position: 'fixed',
                top: '42px',
                right: '0px',
                zIndex: '10000'
            });
            closedCount = 0;
            showToast($(toastContainer.find('.toast')[0]));
        }
    });
});
