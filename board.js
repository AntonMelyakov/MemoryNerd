$board = $('.board');
let usedNumbers = []; //we will push used numbers here
function emptyUsedNumbers() {
 usedNumbers = [];
}

function buildBoard(howManyCards) {
 $('.card').remove();
 $('.final-message').remove();
 emptyUsedNumbers();
 createArrayCards();

 while (usedNumbers.length < howManyCards) {
  let number = randomNumber(arrayCards.length) - 1;
  let heroNumber = arrayCards[number];
     createCard(cards[heroNumber]);
     usedNumbers.push(heroNumber);
     arrayCards.splice(number, 1);
 };
};

function notInArray(theNumber, array) {
  let result = true;

  for (number of array) {
    if(theNumber == number){
      result = false;
      break;
    };
  };
  return result;
}

function randomNumber(max) {
  let result = (Math.floor(Math.random() * max) + 1);
  return result;
}

function createCard(hero) {
 $div = $('<div>', {
   id: hero,
   'class': 'card'
 })

 $img2 = $('<img>', {
   'class': 'back',
   src:"cards/" + hero + ".jpg"
 })

 $img1 = $('<img>', {
   'class': 'front',
   src:"cards/card.jpg"
 })

 $div.append($img1, $img2);
 $board.append($div);
}
