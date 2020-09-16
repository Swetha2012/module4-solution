names = ["swetha", "ramesh", "janaki", "jamuna", "sai", "jagdish", "maha"];
for( var i in names){
	var firstLatter = names[i].charAt(0);
	if(firstLatter == "j"){
		console.log("Goodbye " + names[i]);
	}
	else {
		console.log("Hello " + names[i]);
	}
}