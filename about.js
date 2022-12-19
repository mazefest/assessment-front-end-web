console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Submitted Successfully!")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('#image');

image.addEventListener('mouseover', onMouseHover);

function onMouseHover(evt) {
	alert("Keep it up!");
}