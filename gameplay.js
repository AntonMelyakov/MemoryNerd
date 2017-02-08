
//for the first panel
loadRulz();


// events listeners

$('.btn').on('click', function() {
 switch ($(this)[0].id) {
   case 'easy':
   gameStart(5, 30);
   break;
   case 'normal':
   gameStart(10, 20);
   break;
   default:
   gameStart(15, 10);

 }

}); //btn click

function loadClickCardEvents() {
$('.card').on('click', function() {
 let that = $(this)


 that.flip(true); //flip the clicked card

//searchedCardId is not in showCardPanel.js and is not the id of the serched card:
  if($(this)[0].id != searchedCardId && !$(this).hasClass('open')) {
  setTimeout(flipBack, 700);
  changeResult(-10);
  }
//already open card
  else if($(this)[0].id != searchedCardId && $(this).hasClass('open')) {
    setTimeout(posted, 200);
  }
//if you find the card
  else {
    that.addClass('open');
    changeResult(30);
    setTimeout(posted, 300);
//if you finished the game
    if(finish()){

      finalResult();
      percentResult();
      $('.choseLevel').css('visibility', 'visible');
    }

    else{
    createSearchCard();
  };
};



//event listener functions:

  function flipBack() {
    that.flip(false);
  }

  function posted() {
    postFact(that[0].id)
  }

}); //card click

};//load events


//game play functions:

//loadRulz

function loadRulz() {

let textRulz = "1. You are supposed to choose one of the three levels:<br>- Easy (playing with 5 cards);<br>- Normal (playing with 10 cards);<br>- Hard (playing with 15 cards).<br>2. All cards are flipped face up for a couple of seconds. You have to remember them and find the same card as that one shown in ‘Where is this card’ box.<br>3. Find matching pairs of cards by clicking on them.<br>4. The player starts each level with different number of bonus points.<br>5. For each match that you make, you receive an additional 30 points. Every time you click on card that does not match to the shown card, your score is reduced by 10 points.<br>6. Every time you find the right card, you can read a curious nerd fact.<br>7. The object of the game is to turn over all the cards."

$rulz = $('<p>',{
  'class': 'rulz'
});

$rulz.append(textRulz);
$board.append($rulz);

putImg("card"); //back of the card in searched card

};

//for start the game

function gameStart(howManyCards, firstResult) {
resetResult();
cleanBoard();

buildBoard(howManyCards);
$div = $('.card');
$div.flip({trigger: ""});

firstFlip();

setResult(firstResult);
loadClickCardEvents();
$('.choseLevel').css('visibility', 'hidden');

};

//if you are finished

function finish() {
  let result = false;

 if(usedNumbers.length <1) {
   result = true;
 };

 return result;
};

//first flip of the cards

function firstFlip() {
  $div.flip(true);
  setTimeout(flap, 1500);
  setTimeout(createSearchCard,1700);

  function flap() {
    $div.flip(false);
  }
}

//cleanBoard

function cleanBoard() {
  if($('.rulz')){
    $('.rulz').remove();
  }
}

//reset result

function resetResult() {
  $('.ycr')[0].innerText = "Your current result:";
  $('.fact-two')[0].innerText = "";
}
