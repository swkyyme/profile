document.addEventListener("DOMContentLoaded", () => {
	document
		.getElementById("detail__jr-dashboard")
		.addEventListener("click", () => {
			document.getElementById("overlay__jr-dashboard").style.display =
				"block";
		});
	document.getElementById("detail__broomer").addEventListener("click", () => {
		document.getElementById("overlay__broomer").style.display = "block";
	});
	document
		.getElementById("detail__better3dlab")
		.addEventListener("click", () => {
			document.getElementById("overlay__better3dlab").style.display =
				"block";
		});
	document.getElementById("detail__jr").addEventListener("click", () => {
		document.getElementById("overlay__jr").style.display = "block";
	});

	document
		.getElementById("close__jr-dashboard")
		.addEventListener("click", () => {
			document.getElementById("overlay__jr-dashboard").style.display =
				"none";
		});
	document.getElementById("close__broomer").addEventListener("click", () => {
		document.getElementById("overlay__broomer").style.display = "none";
	});
	document
		.getElementById("close__better3dlab")
		.addEventListener("click", () => {
			document.getElementById("overlay__better3dlab").style.display =
				"none";
		});
	document.getElementById("close__jr").addEventListener("click", () => {
		document.getElementById("overlay__jr").style.display = "none";
	});

	window.addEventListener("scroll", () => {
		const navBar = document.getElementById("header");
		if (window.scrollY > window.innerHeight - 200) {
			navBar.style.display = "block";
		} else {
			navBar.style.display = "none";
		}
	});
});
