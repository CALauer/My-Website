$('#hero-arrow-btn-mobile, #hero-arrow-btn, #projects-link, #cta-my-work').click(function() {
    console.log("clicked");
	$([ document.documentElement, document.body ]).animate(
		{
			scrollTop: $('#projects').offset().top
		},
		800
	);
});
$('#home-link').click(function() {
    console.log("clicked");
	$([ document.documentElement, document.body ]).animate(
		{
			scrollTop: $('#top').offset().top
		},
		800
	);
});
$('#designs-link').click(function() {
    console.log("clicked");
	$([ document.documentElement, document.body ]).animate(
		{
			scrollTop: ( $('#designs').offset().top - 50 )
		},
		800
	);
});
