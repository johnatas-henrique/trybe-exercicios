var red = document.querySelector('div#loader .red');
var blue = document.querySelector('div#loader .blue');
var green = document.querySelector('div#loader .green');

function caixaVermelha() {
	if (document.querySelector('div.loading > .red')) {
		redBox = document.querySelector('div.loading > .red');
		redBox.style.setProperty('background-color', randomColor());
	}
}
setInterval(caixaVermelha, 4000);

function caixaVerde() {
	if (document.querySelector('div.loading > .green')){
		greenBox = document.querySelector('div.loading > .green');
		greenBox.style.setProperty('background-color', randomColor());
	}
}
setInterval(caixaVerde, 2000);

function caixaAzul() {
	if (document.querySelector('div.loading > .blue')){
		blueBox = document.querySelector('div.loading > .blue');
		blueBox.style.setProperty('background-color', randomColor());
	}
}
setInterval(caixaAzul, 1000);

function resetaCor(){
	zeraCor = document.querySelector('div.loading > .red');
	if (zeraCor == null){
		red.style.setProperty('background-color', 'red');
		green.style.setProperty('background-color', 'green');
		blue.style.setProperty('background-color', 'blue');
	}
}
setInterval(resetaCor, 5)

function randomColor() {
	return '#' + Math.random().toString(16).substr(-6);
}

// Toggle button code. Don't edit.
var loader = document.getElementById("loader");
var button = document.getElementById("button");
button.addEventListener("click", function () {
	if (loader.className === "loading") {
		loader.className = "";
	} else {
		loader.className = "loading";
	}
})

//loader.className ="";
