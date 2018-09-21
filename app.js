var cards = document.querySelectorAll("td.card p");
var box = document.querySelectorAll("td.card");
var arr = [1,1,2,2,3,3,4,4,5,5,6,6];

// let isFlippedCard = flase;
// let firstCard, secondCard;

function init(){

}




function setupCards(){
	for(i=0; i<= arr.length;i++){
		console.log(cards[i])	
		cards[i].insertAdjacentHTML("beforeend",arr[i].toString());
	}
};

function clicked(){
	for(var i=0;i <= arr.length ;i++){
	 	box[i].addEventListener("click", function(){
	 		this.classList.toggle("clicked");
	 		// var p = this.firstChild;
	 		// p.classList.toggle("clicked");
	 	});
	};
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

function randomNumber(){
	var random = Math.floor(Math.random() * 7);
	return random
};

arr = shuffle(arr);
console.log(arr);
setupCards();
clicked();