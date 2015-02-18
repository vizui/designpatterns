'use strict';
(function () {

    /*
     * Add toggle code functionality
     */
    $('.pl-preview').each(function () {
        var el = $(this);
        var next = el.next('.highlight');
        var toggle;
        if (next.length) {
            toggle = $('<div class="pl-toggle-code"><i class="icon icon-code"></i> View source</div>');
            toggle.prependTo(el);
            toggle.on('click', function () {
                next.slideToggle(250);
                toggle.toggleClass('active');
            });
        }
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
    $('body').scrollspy({ target: '.pl-sidebar > .nav > .active', offset: 120 });

    /* animate scrolling to the sidebar sublink targets to ensure proper offsets */
    $('.pl-sidebar > .nav > .active > .nav > li > a').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 110
        }, 200);
    });


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

    $('.nav-stacked.nav-tree > li').each(function () {
        var self = $(this);
        var nested = $(this).find('> .nav-stacked');
        var expander = $(this).find('> .expander');
        expander.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var visible = nested.is(':visible');
            expander.toggleClass('expanded', !visible);
            expander.toggleClass('collapsed', visible);

            nested.toggle(150);

            // remove any nested actives
            if (nested.find('li.active').length > 0) {
                nested.find('li.active').removeClass('active');
                self.addClass('active');
            }

            // collapse all expanded subtrees
            if (visible) {
                // nested.find('.expander').removeClass('expanded');
                // nested.find('.expander').addClass('collapsed');
                // nested.find('.nav-stacked').hide(250);
            }
        });
    });



    /* example progress bar */
    $('#exampleProgressBar').each(function() {
        var barEl = $(this);
        var valueEl = $('#exampleProgressBarValue');
        var progress = parseInt(this.style.width, 10);
        setInterval(function () {
            barEl.css('width', ((progress += 19) % 100) + '%');
            valueEl.text(progress % 100 + '%');
        }, 1000);
    });


    /* enable popovers */
    $('[data-toggle="popover"]').popover();


    /* enable sliders */
    $('input.slider').slider({
        tooltip: 'hide'
    });



    /* google analytics download tracking */

    function _checkFile(src, extensions) {
        if (typeof src !== 'string') {
            return false;
        }
        var ext = src.split('?')[0];
        ext = ext.split('.');
        ext = ext[ext.length - 1];
        if (ext && extensions.indexOf(ext)) {
            return ext;
        }
        return false;
    }

    if (window.__gaTracker) {
        var ext = 'xls,xlsx,doc,docx,ppt,pptx,pdf,txt,zip';
        ext += ',rar,7z,exe,wma,mov,avi,wmv,mp3,csv,tsv';
        ext = ext.split(',');

        $('a').on('mousedown', function () {
            var el = this;
            if (el.href) {
                var match = _checkFile.call(null, el.href, ext);
                if (match) {
                    window.__gaTracker('patternLibrary.send', 'event', 'Download', match, el.href);
                }
            }
        });
    }
})();
