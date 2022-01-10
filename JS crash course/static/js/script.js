

function ageInDays() {
    birthDate = prompt("enter your birth date in dd.mm.yyyy format");
    var dayofbirth =  Number(birthDate.slice(0,2));
    console.log(dayofbirth );
    var monthofbirth =  Number(birthDate.slice(3,5));
    console.log(monthofbirth );
    var yearofbirth =  Number(birthDate.slice(6,10));
    console.log(yearofbirth );


    var now = new Date().toLocaleDateString();
    var dayofnow = Number(now.slice(0,2));
    console.log(dayofnow );
    var monthofnow =  Number(now.slice(3,5));
    console.log(monthofnow );
    var yearofnow =  Number(now.slice(6,10));
    console.log(yearofnow );
    

    var daySSumBirth=0;
    for (var i=1; i<monthofbirth; i++ ){
        if (i==2) {
            (daySSumBirth)=Number(daySSumBirth)+28;
        }
            else if ((i==4)||(i==6)||(i==9)||(i==11)) {
                (daySSumBirth)=Number(daySSumBirth)+30;
            }
                else {(daySSumBirth)=Number(daySSumBirth)+31;}
            }
    (daySSumBirth)=Number(daySSumBirth) + dayofbirth;
    console.log((daySSumBirth));
    if (((daySSumBirth)>59)||(yearofbirth%4==0)){
        daySSumBirth +=1;
    }

    

    var daySSumNow=0;   
    var sumOfDays = 0;

            for (var i=1; i<monthofnow; i++ ){ 
                if (i==2) {
                    daySSumNow=daySSumNow+28;
                }
                    else if ((i==4)||(i==6)||(i==9)||(i==11)) {
                        daySSumNow=daySSumNow+30;
                    }
                        else {daySSumNow=daySSumNow+31;}
                    }
                    daySSumNow = daySSumNow + dayofnow;

                    if ((daySSumNow>59)||(yearofnow%4==0)){
                        daySSumNow +=1;
                    }
                    
    

    sumOfDays = (yearofnow-yearofbirth)*365;
                    for (var j=yearofbirth; j<yearofnow; j++ ){
                    
                    
                            
                        if (j%4==0){
                            sumOfDays+=1;
        
                        }
                        
                    }
    var finalsum = sumOfDays + daySSumNow - Number(daySSumBirth)
    console.log( finalsum);
                    var h1 = document.createElement('h1')
                    var answer = document.createTextNode('ur age is '+finalsum +' days old')
                    h1.setAttribute('id', 'finalsum');
                    h1.appendChild(answer);
                    document.getElementById('flex-box-result').appendChild(h1);
                }
function reset() {
    document.getElementById('finalsum').remove();

}


//Challenge 2: Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/330px-Cat_November_2010-1a.jpg";
    div.appendChild(image);
}

//Challenge 3: Rock-Paper-Scissors
function rpsgame(yourChoice){
    var humanChoice, botChoice;
    botChoice = numberToChoice(randToRpsInt());
    humanChoice = yourChoice.id;
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}
 
function decideWinner(yourChoice, botChoice){
    var rpsDatabase = {
        'rock' :{'scissors': 1, 'rock': 0.5, 'paper':0},
        'paper' :{'scissors': 0, 'rock': 1, 'paper':0.5},
        'scissors' :{'scissors': 0.5, 'rock': 0, 'paper': 1}
    }

    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];

return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]){
    if (yourScore ===0 ) {
        return{'message': 'You lost!', 'color':'red'}; 
    }else if (yourScore===0.5){
        return{'message': 'You tied!', 'color':'yellow'};
    }else {
        return{'message': 'You won!', 'color':'green'};
    }
    
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);  
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}


