(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello ";
	helloSpeaker.speak = function (x) {
		console.log(speakWord + x);
	}
	window.helloSpeaker = helloSpeaker;

})(window);

// var speakWord = "Hello";
// function speak(name) {
//   console.log(speakWord + " " + name);
// }