const porygon = document.getElementById("porygon");
function wiggle() {
	if (porygon.getAttribute("src") === "images/static.png") {
		porygon.setAttribute("src", "images/animated.png");
		setTimeout(() => {
			porygon.setAttribute("src", "images/static.png");
		}, 600);
	}
}

porygon.onclick = wiggle;
