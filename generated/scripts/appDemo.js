'use strict';

(function(){
	$('#chk-agree').click(function() {
	    $('.btn-primary').attr('disabled', !this.checked);
	});

	$('.btn-primary').click(function() {
	    location.href = 'createAcct-step2.html';
	});
})();

