
$(document).ready(function(){

	$('.bookmark').mouseenter(function(){
		var target = $(this).attr('href');

		target = target.replace(/\/\/(.*\.[a-zA-Z]{2,4})(\/|)/gm, '//<span class="domain">$1</span>/');

		var prev = $('#preview').html();

		if (prev!==target)
			$('#preview').html(target);

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

		if (!$('#settings_' + _id).hasClass('show'))
			$('#settings_' + _id).addClass('peek');

		$('#preview').html('Open the settings for this environment');

	}).mouseleave(function(){
		var _id = $(this).attr('_id');
		$('#settings_' + _id).removeClass('peek');
	});

	$('body').mouseleave(function(){
		$('#preview').html('Select an environment to switch to:');
	});



});