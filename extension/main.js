
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

	        // save url
	        var key = "url" + _id;
	        localStorage.setItem(key, url);
	       
	        $('#settings_' + _id).removeClass('show');
	        $('#settings>li>a').removeClass('active');
	    }
	}).focus(function(){
		$('#preview').html('Enter a URL and hit return to save');
	});

	// load data from storage

	// populate inputs
	$('.input').each(function(){
		var _id = $(this).attr('_id');
		var url =  $('#bookmark_' + _id).attr('href');

		$(this).val(url);
	});

	// get saved urls
	var url1 = localStorage.getItem('url1');
	var url2 = localStorage.getItem('url2');
	var url3 = localStorage.getItem('url3');

	// init empty urls
	if (!url1) url1 = "http://andyshora.com/labs/stackswitch#setup";
	if (!url2) url2 = "http://andyshora.com/labs/stackswitch#setup";
	if (!url3) url3 = "http://andyshora.com/labs/stackswitch#setup";

	// load into UI
	$('#bookmark_1').attr('href', url1);
	$('#bookmark_2').attr('href', url2);
	$('#bookmark_3').attr('href', url3);

	$('#input_1').val(url1);
	$('#input_2').val(url2);
	$('#input_3').val(url3);

	
});
