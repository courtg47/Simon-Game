$(document).ready(function() {
  
      var computer = [];
      var player = [];
      var level = 1;
      var buttonPress = 0;
      var strict = false;
      var stop = false;
  
  $(".talk").hide();
  
  //When Toggle button is clicked 
  $("#off").on("click",function() { 
    //If toggled to "On"...
    if (this.checked === false) {
      $("#screen").html("- -");
      stop = false;
      
      //If default button is pressed after ON button..
      $("#start").on("click", function() { 
        //Screen is on level 1, computer & player arrays are empty, everything is reset
        $("#screen").html("1");
        computer = [];
        player = [];
        level = 1;
        buttonPress = 0;
        strict = false;
        //Game begins in regular mode
        return computerTurn();
    });
      
        //If strict mode is pressed...
        $("#strict").on("click", function() {
          //Screen is on level 1, computer & player arrays are empty, everything is reset
          $("#screen").html("1");
          computer = [];
          player = [];
          level = 1;
          buttonPress = 0;
          strict = true;  
          //Game begins on strict mode
          return computerTurn(strict); 
  });
      
      //If toggle button is in the OFF position, will tell computerTurn function to stop
    } else if (this.checked === true) { 
      stop = true;
      return computerTurn(stop);
   } 
   
    });
  
 
  
     //Computer's Turn in the Game. Lights up squares in order.
     function computerTurn() { 
       
       //If the on/off toggle button is toggled to "off" during game play, then stop script and reset screen
       if (stop === true) {
         $("#screen").html(" ");
         return;
         
       } else {
         
       //Chooses number at random, assigns it to random color div
        var number = Math.floor(Math.random() * 4);
        var colors = ["green","red","yellow","blue"];
        var choice = colors[number];
       
        //Pushes computer's choice into computer array to keep track
        computer.push(""+choice);
       
       //Looping through array of computer choices
       for (let i = 0; i < computer.length; i++) {
         setTimeout(function timer() {
           
           //Lights up green div with sound if "green" is in computer array
          if (computer[i] === "green") {
          $("#green").css("background-color","#1DCE40");
           $("#sound1")[0].play();
           //Timing of color divs lighting up/sound
          setTimeout(function() {
            $("#green").css("background-color","#5FE888");
          }, 500); 
        
          //Lights up red div with sound if "red" is in computer array
        } else if (computer[i] === "red") {
          $("#red").css("background-color","#E12D49");
          $("#sound2")[0].play();
          //Timing of color divs lighting up/sound
          setTimeout(function() {
            $("#red").css("background-color","#E85F7B");
          }, 500);
  
          //Lights up yellow div with sound if "yellow" is in computer array
        } else if (computer[i] === "yellow") {
          $("#yellow").css("background-color","#AEB30F");
          $("#sound3")[0].play();
          //Timing of color divs lighting up/sound
          setTimeout(function() {
            $("#yellow").css("background-color","#E8CC5F");
          }, 500);

          //Lights up blue div with sound if "blue" is in computer array
        } else if (computer[i] === "blue") {
          $("#blue").css("background-color","#264ED5");
          $("#sound4")[0].play();
          //Timing of color divs lighting up/sound
          setTimeout(function() {
            $("#blue").css("background-color","#5F7BE8");
          }, 500);

        }  
           
         }, (i*1200));
          
         //trigger player's turn
         playerTurn();   
       }
   }
                
}
     
 
     /*When player clicks on green div, it lights up, makes a sound, and pushes button choice into player array*/
      $("#green").on("click", function(e) {
        //When clicked on by player...
        if (e.which){
          player.push("green");
          buttonPress++;
          $(this).css("background-color","#1DCE40");
          $("#sound1")[0].play();

          setTimeout(function() {
            $("#green").css("background-color","#5FE888");
          }, 500);
          
          //when triggered by computer...
        } else {
            $(this).css("background-color","#1DCE40");
          setTimeout(function() {
            
            $("#sound1")[0].play();
            $("#green").css("background-color","#5FE888");
          }, 800);
        }
  
        
      });
    
    
      /*When player clicks on red div, it lights up, makes a sound, and pushes button choice into player array*/
      $("#red").on("click", function(e) {
        //When clicked on by player...
        if (e.which) {
          player.push("red")[1];
          buttonPress++;
          $(this).css("background-color","#E12D49");
          $("#sound2")[0].play();

        setTimeout(function() {
          $("#red").css("background-color","#E85F7B");
        }, 500);
          
          //when triggered by computer...
        } else {
          $(this).css("background-color","#E12D49");
          
        setTimeout(function() {
          
          $("#sound2")[0].play();
          $("#red").css("background-color","#E85F7B");
        }, 800);
        }


      });
      
      /*When player clicks on yellow div, it lights up, makes a sound, and pushes button choice into player array*/
      $("#yellow").on("click", function(e) {
       //When clicked on by player...
       if (e.which) {
         player.push("yellow")[1];
         buttonPress++;
        $(this).css("background-color","#AEB30F");
        $("#sound3")[0].play();
        
        setTimeout(function() {
          $("#yellow").css("background-color","#E8CC5F");
       }, 500);
         
         //when triggered by computer...
       } else {
          $(this).css("background-color","#AEB30F");
         
        setTimeout(function() {
          $("#sound3")[0].play();
          $("#yellow").css("background-color","#E8CC5F");
        }, 800);
       }
        

      });
  
  
      /*When player clicks on blue div, it lights up, makes a sound, and pushes button choice into player array*/   
      $("#blue").on("click", function(e) {
      //When clicked on by player...
      if (e.which) {
        player.push("blue")[1];
        buttonPress++;
        $(this).css("background-color","#264ED5");
         $("#sound4")[0].play();
        
        setTimeout(function() {
          $("#blue").css("background-color","#5F7BE8");
        }, 500);
        
        //when triggered by computer...
      } else {
        $(this).css("background-color","#264ED5");

        setTimeout(function() {
           $("#sound4")[0].play();
           $("#blue").css("background-color","#5F7BE8");
        }, 800);
      }
  
      });  
  
  
  //Player's turn to choose colors that match Simon's  
  function playerTurn() {
      
      //When number of button presses is equal to the amount that Simon chooses, the compare.
      setTimeout(function timer() {
        if (buttonPress === computer.length) {
          $("#again").hide();
                compare();
       } 
           
       }, computer.length * 2700); 
  }
 
  
  
  //Compares Simon's choices to Player's choices to decide whether to continue game or end it. 
 function compare() {
    computer = computer.toString();
    player = player.toString();
   
   //If player's and computer's choices are not the same
   if (computer.localeCompare(player) !== 0) {
     //If in default mode, replay sequence again
      if (strict === false) {
         $("#again").show();
          player = player.split(",");
          computer = computer.split(",");
          player.length = 0;
          buttonPress = 0;
          tryAgain(computer);
        
        //If in strict mode, reset game from beginning
      } else if (strict === true) {
        $("#over").show();
          setTimeout(function() {
              return reset();
            }, 3000);
         }
         //If player's choice and computer's choice are equal, play another round
       } else if (computer.localeCompare(player) === 0 && level < 20) { 
          level++;
          $("#screen").html(""+level);
          player = player.split(",");
          computer = computer.split(",");
          player.length = 0;
          buttonPress = 0;
          computerTurn(computer);
        //If player's choice and computer's choice are equal and level is 20, win game
      } else if (computer.localeCompare(player) === 0 && level === 20) {
          $("#won").show();
          setTimeout(function() {
             reset();
          }, 3000);

}
              
 
   /*Player tries again if they did not get a round correct on default mode.
   Function displays previous sequence to the player again.*/
   function tryAgain(computer){
       for (var i = 0; i < computer.length; i++) {  
         (function(i) {  
           setTimeout(function() {
             $("#"+computer[i]).trigger("click");
           }, i*1000);
         })(i);
       }
         playerTurn(player);
    } 

      
   //Resets game, clears all info
  function reset() {
          computer = [];
          player = [];
          level = 1;
          buttonPress = 0;
          $("#screen").html("1");
          $(".talk").hide();
          computerTurn(computer, player);
   }
 }
     
  
});
