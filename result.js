$result = $('.result');
$ycr = $('.ycr');
$percentResult = $('.percentResult');

function setResult(startPoints){
  $result[0].innerText = startPoints;
};


function changeResult(points) {
let newResult = parseInt($result[0].innerText) + points;
setResult(newResult);
};

function finalResult() {
$ycr[0].innerText = "Your final result is:"
$result.addClass('red');
}

function percentResult() {
  $maxScore = $('.board').children().length * 30; //max possible score
  $playerScore = parseInt($('.result')[0].innerText);
  $percentScore = Math.floor(($playerScore/$maxScore) * 100);

  $message = '<p class="final-message">The maximum possible score of this game is ' + $maxScore +
  '. However your score is ' + $playerScore + '. Thats mean ' + $percentScore + '%.';

   if ($percentScore > 70) {
     $message += 'This is GREAT!</p>'
   };

   if (($percentScore > 30) && ($percentScore < 70)) {
    $message += 'That`s OK. </p>'
  };

   if ($percentScore < 30) {
     $message += 'Such a poor result :(. </p>'
   };

  $percentResult[0].innerHTML = $message;
}
