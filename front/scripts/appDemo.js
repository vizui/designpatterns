'use strict';

(function() {
	/* enable masks */
    $(':input').inputmask();
    
	/* select2 things */
    $('.select2').select2({
        minimumResultsForSearch: 4
    });

    $('#chk-agree').click(function() {
        $('.btn-primary').attr('disabled', !this.checked);
    });

    $('.btn-primary').click(function() {
        location.href = 'createAcct-step2.html';
    });
})();
