let $searchCard = $('.searchedCard');
let openedCards = [];
let searchedCardId = ''; // Id for varification in gameplay

function createSearchCard() {
clean();

let searchedCard = randomNumber(usedNumbers.length) - 1;
let heroNumber = usedNumbers[searchedCard];

putImg(cards[heroNumber]);
searchedCardId = cards[heroNumber];
usedNumbers.splice(searchedCard, 1);
}

function putImg(heroName) {
  $img1 = $('<img>', {
    'class': 'searchCard',
    src:"cards/" + heroName + ".jpg"
  })

 $searchCard.append($img1);
}

//clean the opened card:
function clean() {
  if($searchCard[0].firstElementChild) {
    $searchCard[0].firstElementChild.remove();
  }
}
