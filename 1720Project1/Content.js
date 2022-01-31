/*
if (window.location.hostname === "www.youtube.com") {
	alert("You Are In Youtube");
}
*/

const generateHTML = (pageName) => {
	return ``
}

const generateSTYLING = () => {
	return ``
}

switch (window.loaction.hostname) {
	case "www.youtube.com":
		document.head.innerHTML = generateSTYLING();
		document.body.innerHTML = generateHTML("Youtube");

	case "www.facebook.com":
		document.body.innerHTML = generateHTML("");

}