let firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("FirstNameError");
let lastName = document.getElementById("lastName");
const lastNameError =  document.getElementById("lastNameError");
let scores = document.getElementById("myScores").value;
const scoresError = document.getElementById("scoresError");
var submitBtn = document.getElementById("submitBtn");
let 
submitBtn.addEventListener("click" , function(e){
    e.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(scores.value)
        if(scores >= 75 && scores < 101){
        document.getElementById("result").innerHTML= " Your grade is A You did well keep it up";
        } 
       else if(scores <= 74 && scores > 49){
        document.getElementById("result").innerHTML= "Your grade is C You tried but put in more effort";
        document.getElementById("result").innerHTML= "Your grade is C You tried but put in more effort";
    
        }
        else if (scores <= 45 && scores > 0){
        document.getElementById("result").innerHTML= "Your grade is F Please try to work harder next time";
        document.getElementById("result").innerHTML= "Your grade is F Please try to work harder next time";
    
        }
        else if(scores > 100){
        document.getElementById("result").innerHTML= "The mark is over 100";
        }
        else if(scores < 0){
        document.getElementById("result").innerHTML= "The mark is less than 0";
        }
        else{
            alert(scores + 'Invalid');
        }
});