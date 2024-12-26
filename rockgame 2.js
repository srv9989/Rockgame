
let score = {
                wins : 0,
                lose : 0,
                ties : 0
            };
updateScoreElement();


let result = '';


function autoPlay(){
    setInterval(function(){
        const playerMove=pickComputermove();
        playGame(playerMove);
    },1000);
}



function playGame(playerMove)
{
    pickComputermove();
   
    if(playerMove == 'rock')
        {
           

            if(computerMove == 'rock')
            {
                result = 'tie';
             
            }
            else if(computerMove === 'paper')
            {
                result = 'lose';
               
;                    }
            else if(computerMove === 'scissors')
            {
                result = 'win';
               
            }

            
            
            
        }
    else if(playerMove === 'paper')
            {
             
               
                if(computerMove == 'rock')
                {
                    result = 'win';
                }
                else if(computerMove === 'paper')
                {
                    result = 'tie';
                }
                else if(computerMove === 'scissors')
                {
                    result = 'lose';
                }

                
            }
    else if(playerMove === 'scissors')
    {
      
        
        if(computerMove == 'rock')
        {
            result = 'lose';
        }
        else if(computerMove === 'paper')
        {
            result = 'win';
        }
        else if(computerMove === 'scissors')
        {
            result = 'tie';
        }

        
    }
    if(result=== 'win')
        {
            score.wins++;
        }
        if(result==='lose')
        {
            score.lose++;
        }
        if(result === 'tie')
        {
            score.ties++;
        }

        

        updateScoreElement();
        document.body.querySelector('.js-result').innerHTML=`You ${result}`;


        document.body.querySelector('.js-moves').innerHTML=`You <img src="${playerMove}-emoji.png "class="move-icon"> vs 
        <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
       

        
}

function updateScoreElement()
{
    document.querySelector('.js-score').innerHTML=` wins:${score.wins},loss:${score.lose},ties:${score.ties}`;
}
 
let computerMove='';
function pickComputermove()
{
   
let randomMove =Math.random();
if(randomMove>=0 && randomMove<1/3)
            {
                computerMove='rock';
            }
            else if(randomMove>=1/3 && randomMove<2/3)
            {
                computerMove='paper';
            }
            else if(randomMove>=2/3 && randomMove<3)
            {
                computerMove='scissors';
            }
         

}

