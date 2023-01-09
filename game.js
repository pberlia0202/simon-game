
var buttonColours=["red", "blue", "green", "yellow"];
var level=0;
// $("#yellow").click(function(){
//     var audio=new Audio("sounds/red.mp3");
//     audio.play();
// })
var userClickedPattern=[];
var gamePattern=[];
var started = false;

$(".btn").click(function(){
    
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
     playSound(userChosenColour);
     animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);
    //  console.log(userClickedPattern);
})






function nextSequence(){
    userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    // for(var i=1;i<gamePattern.length;i++){
    //     setTimeout(function(){
    //         // alert(i);
    //         $("#" + gamePattern[i]).fadeIn(100).fadeOut(100).fadeIn(100);
    //     playSound(gamePattern[i]);

       
    // },(gamePattern.length)*1000);

    // }
    
    // $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    level++;
    $("h1").text("Level "+ level);
    console.log(gamePattern);

    // console.log(randomNumber);
}

// var randomNumber=nextSequence();
// console.log(randomNumber);

// alert(buttonColours[0]);
// alert(buttonColours.length);
// var randomChosenColour=buttonColours[randomNumber];
// alert(randomChosenColour);

// gamePattern.push(randomChosenColour);
// console.log(gamePattern);
// $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

// alert(randomChosenColour);
// var audio = new Audio('"sounds/" + randomChosenColour + ".mp3"');
// var audio=new Audio("sounds/red.mp3");
// audio.play();
// alert(randomChosenColour);
// audio.play();
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
    

}

function animatePressGamePattern(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
    

}



function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
     audio.play();

}

$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
        console.log("success");
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
        // $("h1").text("Game over");
    }
    else{
        console.log("wrong");
        var gameOverSound= new Audio("sounds/wrong.mp3");
        gameOverSound.play();
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");

        })

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();

    }



}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}
