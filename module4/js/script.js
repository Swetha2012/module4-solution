(function () {
	var names = ["swetha", "ramesh", "janaki", "jamuna", "Ganesh", "sai", "jagdish", "maha"];
		
		for( var i in names){
			var firstLatter = names[i].charAt(0).toLowerCase();
			if(firstLatter === "j"){
			byeSpeaker.speak(names[i]);

			}
			else {
			helloSpeaker.speak(names[i]);
			}
		}
	
})();






