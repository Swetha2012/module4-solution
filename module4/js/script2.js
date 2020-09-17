(function (window) {
	var byeSpeaker = {};
	var speakWord = "Goodbye ";
	byeSpeaker.speak = function (x) {
		console.log(speakWord + x);
	}
	window.byeSpeaker = byeSpeaker;

})(window);