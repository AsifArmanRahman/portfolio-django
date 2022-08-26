// Get the button
let top_button = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
	document.body.scrollTop > 200 ||
	document.documentElement.scrollTop > 200
) {
	top_button.style.display = "block";
} else {
	top_button.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
top_button.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
