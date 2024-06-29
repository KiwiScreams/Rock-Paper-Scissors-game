const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const gameObj = document.getElementById('game');
const text = document.getElementById('pick-text');
const computer = document.getElementById('computer');
const compPaper = document.getElementById('comp-paper');
const compRock = document.getElementById('comp-rock');
const compScissors = document.getElementById('comp-scissors');
const winPanel = document.getElementById('win-panel');
const winText = document.getElementById('win-title');
const dark = document.getElementById('panel');
const dark2 = document.getElementById('panel-2');
const retry = document.getElementById('re');
const scoreText = document.getElementById('score');
compPaper.style.display = 'none';
compRock.style.display = 'none';
compScissors.style.display = 'none';
computer.style.backgroundColor = '#0000001a';
let score = 0;
function playGame(userChoice)
{
    let compVariable = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (compVariable == 1)
    {
        computerChoice = 'paper';
        setTimeout(() => {
            compPaper.style.display = 'block';
            computer.style.backgroundColor = 'transparent';
        }, 2000);
        computer.style.backgroundColor = '#0000001a';
        
    } else if (compVariable == 2)
    {
        setTimeout(() => {
            compRock.style.display = 'block';
            computer.style.backgroundColor = 'transparent';
        }, 2000);
        computerChoice = 'rock';
        computer.style.backgroundColor = '#0000001a';
        
    } else
    {
        setTimeout(() => {
            compScissors.style.display = 'block';
        computer.style.backgroundColor = 'transparent';
        }, 2000);
        computerChoice = 'scissors';
        computer.style.backgroundColor = '#0000001a';
        
    }
    let winner;
    scoreText.innerHTML = score;
    if (userChoice == computerChoice)
    {
        paper.style.pointerEvents = 'none';
        rock.style.pointerEvents = 'none';
        scissors.style.pointerEvents = 'none';
        setTimeout(() => {
             winner = 'tie';
        winPanel.style.display = 'block';
        winText.innerHTML = "TIE";
        dark.style.display = 'block';
        }, 2500);
    }
    else if ((userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'paper' && computerChoice == 'rock') ||
        (userChoice == 'scissors' && computerChoice == 'paper'))
    {
        paper.style.pointerEvents = 'none';
        rock.style.pointerEvents = 'none';
        scissors.style.pointerEvents = 'none';
        setTimeout(() => {
        winner = 'YOU WIN';
        winPanel.style.display = 'block';
        winText.innerHTML = "YOU WIN!";
        dark.style.display = 'block';
        score++;
        scoreText.innerHTML = score;
        }, 2500);
    }
    else
    {
        paper.style.pointerEvents = 'none';
        rock.style.pointerEvents = 'none';
        scissors.style.pointerEvents = 'none';
        setTimeout(() => {
        winner = 'computer';
        winPanel.style.display = 'block';
        winText.innerHTML = "YOU LOSE";
        dark.style.display = 'block';
        score--;
        if(score<=0)
            {
                score = 0;
            }
            scoreText.innerHTML = score;
        }, 2500);
    }
}
paper.addEventListener("click", function()
{
    rock.style.display = 'none';
    scissors.style.display = 'none';
    gameObj.style.backgroundImage = 'none';
    paper.style.transform = 'scale(1.5)';
    text.style.display = 'flex';
    computer.style.display = 'block';
    gameObj.style.width = '700px';
    playGame('paper');
});
rock.addEventListener("click", function()
{
    paper.style.display = 'none';
    scissors.style.display = 'none';
    gameObj.style.backgroundImage = 'none';
    rock.style.transform = 'scale(1.5)';
    text.style.display = 'flex';
    computer.style.display = 'block';
    gameObj.style.width = '700px';
    rock.style.marginLeft = '-28px';
    playGame('rock');
});
scissors.addEventListener("click", function()
{
    paper.style.display = 'none';
    rock.style.display = 'none';
    gameObj.style.backgroundImage = 'none';
    scissors.style.transform = 'scale(1.5)';
    text.style.display = 'flex';
    computer.style.display = 'block';
    gameObj.style.width = '700px';
    scissors.style.marginLeft = '-28px';
    playGame('scissors');
});
retry.addEventListener('click', function()
{
    paper.style.display = 'block';
    rock.style.display = 'block';
    scissors.style.display = 'block';
    gameObj.style.backgroundImage = '';
    paper.style.transform = 'scale(1)';
    rock.style.transform = 'scale(1)';
    rock.style.margin = 'auto';
    scissors.style.transform = 'scale(1)';
    text.style.display = 'none';
    computer.style.display = 'none';
    gameObj.style.width = '';
    compPaper.style.display = 'none';
    compRock.style.display = 'none';
    compScissors.style.display = 'none';
    winPanel.style.display = 'none';
    dark.style.display = 'none';
    paper.style.pointerEvents = 'auto';
    rock.style.pointerEvents = 'auto';
    scissors.style.pointerEvents = 'auto';
})
const rules_container = document.getElementById('rules-container');
const rules_button = document.getElementById('rules');
const close_button = document.getElementById('close');
rules_button.addEventListener("click", function()
{
    rules_container.style.display = 'block';
    dark2.style.display = 'block';
});
close_button.addEventListener("click", function()
{
    onDisplayNone();
});
dark2.addEventListener('click', function()
{
    onDisplayNone();
})
function onDisplayNone()
{
    rules_container.style.display = 'none';
    dark2.style.display = 'none';
}