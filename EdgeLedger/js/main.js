// init and add map
function initMap() {
	//location
	const loc = {
		lat: 42.361145,
		lng: -71.057083
	};
	// centered map on loc
	const map = new google.maps.Map(document.querySelector('.map'), {
		zoom: 14,
		center: loc
	});
	// marker
	const marker = new google.maps.Marker({
		position: loc,
		map: map
	});
}

//nav opacity
window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		document.querySelector('.navbar').style.opacity = 0.9;
	} else {
		document.querySelector('.navbar').style.opacity = 1;
	}
});

// scroll
$('.navbar a').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 100
		}, 800);
	}
});