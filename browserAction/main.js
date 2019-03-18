const porygon = document.getElementById("porygon");

function wiggle() {
	if (porygon.getAttribute("src") === "images/porygon/static.png") {
		porygon.setAttribute("src", "images/porygon/animated.png");
		setTimeout(() => porygon.setAttribute("src", "images/porygon/static.png"), 600);
	}
}

porygon.onclick = wiggle;
