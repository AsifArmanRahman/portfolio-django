// we add event listener for click on send button
document.getElementById('contact-form').addEventListener('submit', (e) => {

	// selecting the form
	const contactForm = document.getElementById('contact-form');

	// the gold part 🔥
	let data = new FormData(contactForm);

	const sentSuccess = document.getElementById('toast-success');
	const sentFailed = document.getElementById('toast-failure');

	// stop the page from the reloading
	e.preventDefault();

	fetch("https://formsubmit.co/asifarmanrahman@gmail.com", 
	{
		method: "POST",
		body: data,

	})
	.then((response) => {

		if(response.ok) {
			sentSuccess.style.display = "flex";

			setTimeout(() => {
				sentSuccess.style.display = "none";
			}, 5000);

			// clear the inputs
			contactForm.reset()
		}
		else {
			sentFailed.style.display = "flex";

			setTimeout(() => {
				sentFailed.style.display = "none";
			}, 5000);

		};
	})
	.catch((error) => {
		console.log(error)
	});
})
