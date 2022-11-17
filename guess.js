let secretNum = Math.floor(Math.random() * 5) + 1;
    
function guessNumber(){
        
        /* document.getElementById("Word").setAttribute("style", "color: white") */
        var guess = document.getElementById("guess").value;
        
        if(guess > secretNum){

            alert("Too HIGH");
            alert("Number: " + secretNum);
        }else if (guess < secretNum){

            alert("Too LOW");
            alert("Number: " + secretNum);
        }else{

            alert("You got it!");
            alert("Number: " + secretNum);
        }
    }