//initializing declearations when the page loads
var seconds = 60;
var timer;


$("#startbtn").click(function(){

               //show  questions section
               $(".questions").css("display", "block"); 
               //show seconds indecator
               $("#timer").css("display", "block"); 
               //show p tag
               $("#info").css("display", "block"); 
               //hide results
               $(".results").css("display", "none"); 
        
        //hide start
        $(".start").css("display", "none"); 
        //run this code each 1 second and set the variable "timer"
        timer = setInterval(decreaseSeconds, 1000);
})

//function for decreasing seconds
function decreaseSeconds() {

    ///check if the time has become 0
    if (seconds == 0) {
        // the time is 0
        $("#timer").html("<h3>Your Time is UP!</h3>");
        seconds = 60;

        //clear up the timer which calls for this function. "timer"
        clearInterval(timer);
        alert("Time up!");
        submitResult();


    } else {
        // the time is not 0
        seconds = seconds - 1;
        $("#timer").html("<h3>You have " + seconds + " Seconds left.</h3>");
    }

}


///making results section

//inital declearations:
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// checkResult("q4");
$("#submit").click(function () {
    submitResult();
});

//submit data
function submitResult(){
    for (var i = 1; i <= 10; i++) {
        var questionName = "q" + i;
        var answer = checkResult(questionName);
        //console.log(answer);

        if(answer==0){
            //wrong answer
            incorrect++;
        }else if(answer == 1){
            //correct answer
            correct++;
        }else{
            //unanswered
            unanswered++;
        }
    }

    //display results.
    $("#correct").html('Correct Answers: '+correct);
    $("#incorrect").html("Incorrect Answers: "+incorrect);
    $("#unanswered").html("Un-answered: "+unanswered);

    //reset values
    correct = 0;
    incorrect=0;
    unanswered=0;
        //stop timer
    clearInterval(timer);
    seconds = 60;

    //hide questions section. it will search .question class!
    $(".questions").css("display", "none"); 
    //hide seconds indecator
    $("#timer").css("display", "none"); 
    //hide p tag
    $("#info").css("display", "none"); 

    //display result
    $(".results").css("display", "block"); 
    //hide start
    $(".start").css("display", "none"); 
}


function checkResult(questionName) {
    var val = $('input[name=' + questionName + ']:checked').val();
    return val;
}

$("#restart").click(restart);

function restart(){
        //reset values
        correct = 0;
        incorrect=0;
        unanswered=0;
            //stop timer
        clearInterval(timer);
        seconds = 60;

        //show  questions section. it will search .question class!
        $(".questions").css("display", "block"); 
        //show seconds indecator
        $("#timer").css("display", "block"); 
        $("#timer").text("");
        //show p tag
        $("#info").css("display", "block"); 

        //hide results
        $(".results").css("display", "none"); 
            //hide start
        $(".start").css("display", "none"); 

        //uncheck all the checkboxes named from q1 to q5
        for (var i = 1; i <= 10; i++) {
            $('input[name=' + "q" + i + ']:checked').prop('checked', false);
        }
        timer = setInterval(decreaseSeconds, 1000);

}