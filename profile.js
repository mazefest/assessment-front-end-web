let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', handleColorTapped);
place.addEventListener('click', handlePlaceTapped);
ritual.addEventListener('click', handleRitualTapped);

function handleColorTapped(evt) {
	alert("My favorite color is blue!");
} 

function handlePlaceTapped(evt) {
	alert("My favorite plae is chilis!");
} 

function handleRitualTapped(evt) {
	alert("Morning coffee of course.");
} 
