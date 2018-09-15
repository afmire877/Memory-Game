var images = document.querySelectorAll("img.image");


var image = [
	"png/black-and-white-whistle-variant.png",
	"png/checkered-flags.png",
	"png/bees-panel-texture.png",
	"png/couple-of-football-cones.png",
	"png/flaming-football.png",
	"png/football-award-with-white-details.png",
	"png/football-badge.png",
	"png/football-ball.png", 
	"png/football-championship-award-with-plus-sign.png",
	"png/football-coach-screaming.png",
	"png/football-court-illumination-lamps.png",
	"png/football-fan-raising-flag.png",
	"png/football-fans-group.png",

];


function setupCards(){
	for (var i=0;i <= image.length;i++){
		var random = randomNumber();
		images[i].src = image[random];
	
	};
};

 // for(var i=0;i<= images.length;i++){
 // 	images[i].addEventListener("click", function(){
 // 		console.log(this.src);
 // 	});
 // }

function randomimg(){

};
function randomNumber(){
	var random = Math.floor(Math.random() * 10);
	return random
};

console.log(image)
setupCards();