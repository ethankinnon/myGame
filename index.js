var score = "0"

var started = false

$("#smokeJoint").hide();
$(".smoke-img").hide();


$("#lightJoint").on("click",function(){
  $("#smokeJoint").show();
  $(".smoke-img").show();
  if(started===false){
    startGame();

    started = true;
  }

})

function startGame(){
var startTime = new Date();
var randomNumber = Math.floor(Math.random()*99)+1

  $(".title").text("The joint is lit now lets get smoking");

  $("#smokeJoint").on("click",function(){
    score++;
    $("#scoreDisplay").text("Your score is " + score + "/100");

    if(score == randomNumber){
      $("#smokeJoint").hide();
      $(".smoke-img").hide()
      $(".title").text("light that shit up homeslice")
      // $("body").addClass("red");
      // $("body").removeClass("green")
      // setTimeout(function(){
      //   $("body").removeClass("red")
      //   $("body").addClass("green")
      // })
      $("#lightJoint").on("click",function(){
      $(".title").text("burning good once again")
      })

    }

    if(score >"75" && score<"100"){
      $(".title").text("its a stinging roger mate")
    }

    if(score >= "100"){
      $(".title").text("damn son that joint is dead")
      var endTime = new Date();
      var timeTaken = endTime - startTime

endGame(timeTaken);

    }})}







  function endGame(howLong){
    $(".time-taken").show()
    $("#smokeJoint").hide();
    $(".smoke-img").hide();
    $(".time-taken").text("you took " + howLong/1000 + " seconds to blaze that fatty")
    $("#lightJoint").text("roll up");
    $(".joint-img").hide();
    $("#lightJoint").on("click", function(){
      restartGame();
    })
      }

  function restartGame(){

score = "0";
started= false;
$("#lightJoint").text("Light the Joint")
$(".joint-img").show();
$(".time-taken").hide();
$(".title").text("Lets get wavyyyyy")

}
