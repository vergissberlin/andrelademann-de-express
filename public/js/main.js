window.addEventListener("deviceorientation", function (e) {
	document.getElementById('avatar').setAttribute('style', 'transform: rotate(' + Math.round(e.alpha) + 'deg)');
}, false);
