
$(document).ready(function(){

	$('.bookmark').mouseenter(function(){
		var target = $(this).attr('href');

		//target = 'Open <span class="domain"><span class="domain_start">' + target.replace(/\/\/(.*\.[a-zA-Z]{2,4})(\/|)/g, '//</span><span class="domain_inner">$1</span><span class="domain_end">/') + '</span></span>';

		target = 'Open ' + target;

		var prev = $('#preview').html();

		if (prev!==target)
			$('#preview').html(target);

	}).click(function(){

		var target = $(this).attr('href');
		window.location = target;
	});

	$('#settings>li').click(function(){

		var _id = $(this).attr('_id');

		if ($(this).find('a').hasClass('active')){
			$('#settings_' + _id).removeClass('show');
			$(this).find('a').removeClass('active');
		} else {

			$('#settings_' + _id).addClass('show').removeClass('peek');
			$(this).find('a').addClass('active');
		}

	}).mouseenter(function(){
		var _id = $(this).attr('_id');

		var $elm = $('#settings_' + _id);

		if (!$elm.hasClass('show')) {
			$elm.addClass('peek');
			$('#preview').html('Open the settings for this environment');

		} else {
			$('#preview').html('Save the settings for this environment');
		}
		

	}).mouseleave(function(){
		var _id = $(this).attr('_id');
		$('#settings_' + _id).removeClass('peek');
	});

	$('body').mouseleave(function(){
		$('#preview').html('Select an environment to switch to:');
	});

	$('#global_settings').hover(function(){
		$('#preview').html('Open the global settings for this extension');
	});

	$('.settings').hover(function(){
		$('#preview').html('Adjust the settings for this extension');
	});

	$('.input').keydown(function (e){
	    if(e.keyCode == 13){
	        var url = $(this).val();
	        var _id = $(this).attr('_id');

	        $('#bookmark_' + _id).attr('href', url);

	        // save

	        $('#settings_' + _id).removeClass('show');
	        $('#settings>li>a').removeClass('active');
	    }
	});

	// load data from storage

	// populate inputs
	$('.input').each(function(){
		var _id = $(this).attr('_id');
		var url =  $('#bookmark_' + _id).attr('href');

		$(this).val(url);
	});


});