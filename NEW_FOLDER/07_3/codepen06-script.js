var loader = document.getElementById("loader");
var button = document.getElementById("button");
button.addEventListener("click", function() {
	if ( loader.className === "loading" ) {
		loader.className="";
	} else {
		loader.className="loading";
	}
})

//loader.className ="";