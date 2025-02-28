
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScore();
function resetScore() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };

    localStorage.removeItem('score');
    updateScore();
}

function playgame(move) {
    let result = '';
    let computerMove = pickComputerMove();
    if (move === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'Paper') {
            result = 'You Lose.';
        }
        else if (computerMove === 'Scissors') {
            result = 'You Win.';
        }
    }
    else if (move === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win.';
        }
        else if (computerMove === 'Paper') {
            result = 'Tie.';
        }
        else if (computerMove === 'Scissors') {
            result = 'You Lose.';
        }
    }
    else if (move === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose.';
        }
        else if (computerMove === 'Paper') {
            result = 'You Win.';
        }
        else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }
    }

    if (result === 'You Win.') {
        score.wins += 1;
    }
    else if (result === 'You Lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    //display result in website
    document.querySelector('.js-result').innerHTML = `${result}`;

    //display moves in website
    document.querySelector('.js-move').innerHTML = `
    you <img src="./images/${move}-emoji.png" alt="" class="move-icon">
<img src="./images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`;

}



function updateScore() {
    document.querySelector('.js-score').innerHTML = `wins :${score.wins}   losses:${score.losses}     tie:${score.ties}`;
}

function pickComputerMove() {
    var randomNumber = Math.random();
    var computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}
