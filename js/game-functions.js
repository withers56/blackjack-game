'use strict';


let playerDeck = [];
let pointValue = 0;

let deck = [
    {suite: 'heart', value: '2'},
    {suite: 'heart', value: '3'},
    {suite: 'heart', value: '4'},
    {suite: 'heart', value: '5'},
    {suite: 'heart', value: '6'},
    {suite: 'heart', value: '7'},
    {suite: 'heart', value: '8'},
    {suite: 'heart', value: '9'},
    {suite: 'heart', value: '10'},
    {suite: 'heart', value: 'jack'},
    {suite: 'heart', value: 'queen'},
    {suite: 'heart', value: 'king'},
    {suite: 'heart', value: 'ace'},
    {suite: 'diamond', value: '2'},
    {suite: 'diamond', value: '3'},
    {suite: 'diamond', value: '4'},
    {suite: 'diamond', value: '5'},
    {suite: 'diamond', value: '6'},
    {suite: 'diamond', value: '7'},
    {suite: 'diamond', value: '8'},
    {suite: 'diamond', value: '9'},
    {suite: 'diamond', value: '10'},
    {suite: 'diamond', value: 'jack'},
    {suite: 'diamond', value: 'queen'},
    {suite: 'diamond', value: 'king'},
    {suite: 'diamond', value: 'ace'},
    {suite: 'club', value: '2'},
    {suite: 'club', value: '3'},
    {suite: 'club', value: '4'},
    {suite: 'club', value: '5'},
    {suite: 'club', value: '6'},
    {suite: 'club', value: '7'},
    {suite: 'club', value: '8'},
    {suite: 'club', value: '9'},
    {suite: 'club', value: '10'},
    {suite: 'club', value: 'jack'},
    {suite: 'club', value: 'queen'},
    {suite: 'club', value: 'king'},
    {suite: 'club', value: 'ace'},
    {suite: 'spade', value: '2'},
    {suite: 'spade', value: '3'},
    {suite: 'spade', value: '4'},
    {suite: 'spade', value: '5'},
    {suite: 'spade', value: '6'},
    {suite: 'spade', value: '7'},
    {suite: 'spade', value: '8'},
    {suite: 'spade', value: '9'},
    {suite: 'spade', value: '10'},
    {suite: 'spade', value: 'jack'},
    {suite: 'spade', value: 'queen'},
    {suite: 'spade', value: 'king'},
    {suite: 'spade', value: 'ace'},
];

let num = 0;
let randomCard = {};

function hit () {
    num = Math.floor(Math.random() * 52);
    randomCard = {suite: deck[num].suite, value: deck[num].value};
    playerDeck.push(randomCard);
    console.log(`You pulled a ${randomCard.value} of ${randomCard.suite}s`)
}

// hit(playerDeck, randomCard);
// console.log(playerDeck);

function addingScore(){
    pointValue = 0;
    for (let i = 0; i < playerDeck.length; i++) {

        if (playerDeck[i].value === 'jack' || playerDeck[i].value === 'queen' || playerDeck[i].value === 'king') {
            pointValue += 10;
        }
        else if (playerDeck[i].value === 'ace') {
            if (pointValue + 11 > 21) {
                pointValue += 1;
            }
            else    pointValue += 11;


        }
        else {
            pointValue += parseInt(playerDeck[i].value);
        }
    }
}

function inPlay() {
    hit();
    addingScore();
    console.log(`Your score is: ${pointValue}`);
    if (pointValue === 21) {
        console.log('Blackjack!');
        resetPlayerDeck();
    }
    if (pointValue > 21) {
        console.log('loser');
        resetPlayerDeck();
    }
}

function resetPlayerDeck () {
    playerDeck = [];
}



// console.log(playerDeck);

$('#hit-btn').click(inPlay);
