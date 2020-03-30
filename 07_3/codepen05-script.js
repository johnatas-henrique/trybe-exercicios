const el = document.querySelector(".box");
el.style.setProperty('left', '0');
el.style.setProperty('top', '0');

el.addEventListener("click", clickedBox, false);

function clickedBox(evt) {
	let leftBox = el.style.getPropertyValue('left');
	let topBox = el.style.getPropertyValue('top');
	if (leftBox == '0px' && topBox == '0px') {
		el.style.setProperty('left', '300px');
		console.log("clicked on box, going right.");
	}
	else if (leftBox == '300px' && topBox == '0px') {
		el.style.setProperty('top', '300px');
		console.log("clicked on box, going down.");
	}
	else if (leftBox == '300px' && topBox == '300px') {
		el.style.setProperty('left', '0px');
		console.log("clicked on box, going left.");
	}
	else if (leftBox == '0px' && topBox == '300px') {
		el.style.setProperty('top', '0px');
		console.log("clicked on box, going up.");
	}
	else {
		console.log ('bug no posicionamento, verifique o código');
	}
}
