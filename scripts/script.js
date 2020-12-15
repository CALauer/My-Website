$('#hero-arrow-btn-mobile, #hero-arrow-btn, #projects-link, #cta-my-work, #mobile-link-projects').click(function() {
    console.log("clicked");
	$([ document.documentElement, document.body ]).animate(
		{
			scrollTop: $('#projects').offset().top
		},
		800
	);
});
$('#home-link, #home, #mobile-link-top').click(function() {
    console.log("clicked");
	$([ document.documentElement, document.body ]).animate(
		{
			scrollTop: $('#top').offset().top
		},
		800
	);
});
$('#designs-link, #mobile-link-designs').click(function() {
    console.log("clicked");
	$([ document.documentElement, document.body ]).animate(
		{
			scrollTop: ( $('#designs').offset().top - 50 )
		},
		800
	);
});

// $('#live-demo-no').click(function() {
// 	alert("This website is currently unavilable. I will be uploading this to the server ina few days. Please checkback later. Sorry.");
// })

$('#mobile-menu-btn, .mobile-menu-display').click('click', function() {
	let x = $('.mobile-menu-display');
	if (x.css('top') !== '50px') {
		x.animate({top: 50 });
		}
		else {
			x.animate({top: '-100%', height: 'auto'});
	} 
	});


