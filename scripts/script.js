
$("a").click(function() {
	console.log(this.id);
	let id = this.id;
	let dropDownMenu = $('.dropdown-menu');

	if (id == ('home') || id ==('home-link') ||  id ==('mobile-link-top')) {
		section = "top";
		scrollTo(section); // Passes the section to scroll to
		checkMobileMenu();
		} 
		if (id == ('dropdown-project1')) {
				section = "project1";
				dropDownMenu.fadeToggle(200).delay( 100 ).css({display: 'grid'});
				scrollTo(section);
			}
			if (id == ('dropdown-project3')) {
				section = "project3";
				dropDownMenu.fadeToggle(200).delay( 100 ).css({display: 'grid'});
				scrollTo(section);
			}
				if (id == ('cta-my-work') || id ==('mobile-link-projects')) {
					section = "projects";
					scrollTo(section);
					checkMobileMenu();
				}
					if (id == ('designs-link') || id ==('mobile-link-designs')) {
						section = "designs";
						scrollTo(section);
						checkMobileMenu();
					}
						if (id == ('aboutme-link') || id ==('mobile-link-aboutme') || id ==('hero-arrow-btn-mobile')|| id ==('hero-arrow-btn')) {
							section = "aboutme";
							scrollTo(section);
							checkMobileMenu();
						}
							if (id == ('projects-link')) {
								dropDownMenu.fadeToggle(200).delay( 100 ).css({display: 'grid'});
							}
								if (id == ('mobile-menu-btn') || id == ('mobile-menu-display')) {
									checkMobileMenu();
								}
					else {
						console.log("false");

					}
				});

// scroll function {
	function scrollTo(section) {
		var section = section;
		$([ document.documentElement, document.body ]).animate(
			{
				scrollTop: ($('#' + section).offset().top - 60 )
			},
			800
		);
	} 
// Checks if mobile mobile menu
function checkMobileMenu() {
	let mobileMenu = $('.mobile-menu-display')
	if (mobileMenu.css('top') !== '50px') {
		mobileMenu.animate({top: 50 });
		}
		else {
			mobileMenu.animate({top: '-100%', height: 'auto'});
}
}
