var cards = document.querySelectorAll("td.card"),
	image = document.getElementById('1');





// for (var i =0;i <= cards.length;i++) {
// 	cards[i].innerHTML = '<img src="'+ images[i].src +'" />'; 
// };

image.src = "png/black-and-white-whistle-variant.png";


var images = [
	{src:"png/black-and-white-whistle-variant.png"},
	{src:"png/checkered-flags.png"},
	{src:"png/bees-panel-texture.png"},
	{src:"png/couple-of-football-cones.png"},
	{src:"png/flaming-football.png"},
	{src:"png/football-award-with-white-details.png"},
	{src:"png/football-badge.png"},
	{src:"png/football-ball.png"},
	{src:"png/football-card-with-cross-mark.png"}

];

function randomimg(){

};
function randomNumber(){
	var random = Math.floor(Math.random() * 10);
	return random
};

console.log(randomNumber())