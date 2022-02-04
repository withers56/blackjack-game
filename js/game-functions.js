'use strict';
//Place your bet, then deal. player gets 2 cards, dealer gets 2, but one is down one is up.
//you can hit, or stand. if you double, you double your bet and commit to only taking one more card



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


let playerDeck = [];
let dealerDeck = [];
let pointValue = 0;
let num = 0;
let moneyTotal = 1000;
let bettingAmount = 0;
let randomCard = {};
let playersCards = $('#players-cards');
let cardsPlayer = document.querySelector('#players-cards');
let cardsDealer = document.querySelector('#dealers-cards');


function hit () {
    num = Math.floor(Math.random() * 52);
    randomCard = {suite: deck[num].suite, value: deck[num].value};
    playerDeck.push(randomCard);
    console.log(`You pulled a ${randomCard.value} of ${randomCard.suite}s`)
    displayPlayerCards();
    addingScore();
    if (pointValue === 21) {
        console.log('Blackjack!');
        resetDecks();
        pointValue = 0;
        $('.money-score').html('Cards value: ' + pointValue)
    }
    if (pointValue > 21) {
        console.log('loser');
        resetDecks();
        pointValue = 0;
        $('.money-score').html('Cards value: ' + pointValue)
    }
}

function displayPlayerCards () {
    let suite = randomCard.suite;
    let value = randomCard.value;

    if (value === 'jack')
        value = 'J';
    if (value === 'queen')
        value = 'Q';
    if (value === 'king')
        value = 'K';
    if (value === 'ace')
        value = 'A'

    if (suite === 'heart') {
        cardsPlayer.innerHTML += '<div class="card"><span class="suite pl-1"><i class="bi bi-suit-heart-fill" style="color: red"></i></span><span class="card-num pt-0 mt-0" style="color: red">' + value + '</span></div>'
    }
    if (suite === 'diamond') {
        cardsPlayer.innerHTML += '<div class="card"><span class="suite pl-1"><i class="bi bi-suit-diamond-fill" style="color: red"></i></span><span class="card-num pt-0 mt-0" style="color: red">' + value + '</span></div>'
    }
    if (suite === 'spade') {
        cardsPlayer.innerHTML += '<div class="card"><span class="suite pl-1"><i class="bi bi-suit-spade-fill"></i></span><span class="card-num pt-0 mt-0">' + value + '</span></div>'
    }
    if (suite === 'club') {
        cardsPlayer.innerHTML += '<div class="card"><span class="suite pl-1"><i class="bi bi-suit-club-fill"></i></span><span class="card-num pt-0 mt-0">' + value + '</span></div>'
    }

}

function dealersHand () {
    num = Math.floor(Math.random() * 52);
    randomCard = {suite: deck[num].suite, value: deck[num].value};

    dealerDeck.push(randomCard);
    displayDealerCards();

}
function dealerSetup () {
    dealersHand();
    dealersHand();
}

function displayDealerCards () {
    let suite = randomCard.suite;
    let value = randomCard.value;

    if (value === 'jack')
        value = 'J';
    if (value === 'queen')
        value = 'Q';
    if (value === 'king')
        value = 'K';
    if (value === 'ace')
        value = 'A'

    if (suite === 'heart') {
        cardsDealer.innerHTML += '<div class="card"><span class="suite pl-1"><i class="bi bi-suit-heart-fill" style="color: red"></i></span><span class="card-num pt-0 mt-0" style="color: red">' + value + '</span></div>'
    }
    if (suite === 'diamond') {
        cardsDealer.innerHTML += '<div class="card"><span class="suite pl-1"><i class="bi bi-suit-diamond-fill" style="color: red"></i></span><span class="card-num pt-0 mt-0" style="color: red">' + value + '</span></div>'
    }
    if (suite === 'spade') {
        cardsDealer.innerHTML += '<div class="card"><span class="suite pl-1"><i class="bi bi-suit-spade-fill"></i></span><span class="card-num pt-0 mt-0">' + value + '</span></div>'
    }
    if (suite === 'club') {
        cardsDealer.innerHTML += '<div class="card"><span class="suite pl-1"><i class="bi bi-suit-club-fill"></i></span><span class="card-num pt-0 mt-0">' + value + '</span></div>'
    }

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
    $('.money-score').html('Cards value: ' + pointValue)
}

function inPlay() {
    dealersHand();
    dealersHand();
    hit();
    addingScore();
    hit();
    addingScore();

    console.log(`Your score is: ${pointValue}`);
    if (pointValue === 21) {
        console.log('Blackjack!');
        resetDecks();
        pointValue = 0;

    }
    if (pointValue > 21) {
        console.log('loser');
        resetDecks();
        pointValue = 0;
    }
    // location.reload();
}

function resetDecks () {
    playerDeck = [];
    dealerDeck = [];
    cardsPlayer.innerHTML = '';
    cardsDealer.innerHTML = '';
}



// console.log(playerDeck);
// startup()
// inPlay()
$('#hit-btn').click(hit);

function startup() {
    let isPlaying = confirm("Would you like to play?");

    if (isPlaying) {
        console.log('yeet');
    }


}

function betting (e) {
    let bettingNumber = parseInt( $(this).text());
    bettingAmount += bettingNumber;
    console.log(bettingAmount);
}

$('#1').click(betting);
$('#5').click(betting);
$('#25').click(betting);
$('#50').click(betting);
$('#100').click(betting);

$('#bet').click(inPlay)
