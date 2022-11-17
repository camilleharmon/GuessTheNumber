
    function guessNumber(){

        let secretNum = Math.floor(Math.random() * 5) + 1;
        /* document.getElementById("Word").setAttribute("style", "color: white") */
        if(guess > secretNum){

            alert("Too HIGH");
        }else if (guess < secretNum){

            alert("Too LOW");
        }else{

            alert("You got it!");
        }
    }