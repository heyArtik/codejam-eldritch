import ancientsData from './data/ancients.js';
import cardBlue from './data/MythicCards/blue/index.js'
import cardGreen from './data/MythicCards/green/index.js'
import cardBrown from './data/MythicCards/brown/index.js'

/////////////////////////////////////////////////////////////////////////////////// ancients

const allAncients = document.querySelectorAll('.ancient');
const header = document.querySelector('.header');

header.addEventListener('click', (ev) => {
    allAncients.forEach(item => item.classList.remove('active'));
    ev.target.classList.add('active');
    ancients = ev.target.classList[1];
    lastCard.style.opacity = '0';
    shuffleTheCardBtn.style.backgroundColor = '';
    getNumTracker();
})
/////////////////////////////////////////////////////////////////////////////////// ancients

/////////////////////////////////////////////////////////////////////////////////// complexity

const main = document.querySelector('.main');
const complexity = document.querySelectorAll('.complexity');

main.addEventListener('click', (ev) => {
    complexity.forEach(item => item.classList.remove('active'));
    ev.target.classList.add('active');
    difficultie = ev.target.classList[1];
    lastCard.style.opacity = '0';
    shuffleTheCardBtn.style.backgroundColor = '';
    getNumTracker();
})
/////////////////////////////////////////////////////////////////////////////////// complexity


/////////////////////////////////////////////////////////////////////////////////// tracker

const tracker = document.querySelector('.tracker');
const firstStageGreen = document.querySelector('.first .dots-container .dot-green');
const firstStageRed = document.querySelector('.first .dots-container .dot-red');
const firstStageBlue = document.querySelector('.first .dots-container .dot-blue');
const secondStageGreen = document.querySelector('.second .dots-container .dot-green');
const secondStageRed = document.querySelector('.second .dots-container .dot-red');
const secondStageBlue = document.querySelector('.second .dots-container .dot-blue');
const thirdStageGreen = document.querySelector('.third .dots-container .dot-green');
const thirdStageRed = document.querySelector('.third .dots-container .dot-red');
const thirdStageBlue = document.querySelector('.third .dots-container .dot-blue');

function getNumTracker() {
    ancientsData.forEach(element => {
        if (ancients === element.id) {
            firstStageGreen.textContent = element.firstStage.greenCards;
            firstStageRed.textContent = element.firstStage.brownCards;
            firstStageBlue.textContent = element.firstStage.blueCards;
            secondStageGreen.textContent = element.secondStage.greenCards;
            secondStageRed.textContent = element.secondStage.brownCards;
            secondStageBlue.textContent = element.secondStage.blueCards;
            thirdStageGreen.textContent = element.thirdStage.greenCards;
            thirdStageRed.textContent = element.thirdStage.brownCards;
            thirdStageBlue.textContent = element.thirdStage.blueCards;
        }
    });
}
/////////////////////////////////////////////////////////////////////////////////// tracker

const shuffleTheCardBtn = document.querySelector('.shuffle-the-card');

function trackerFirst() {
    if (str.includes('green') && firstStageGreen.textContent > 0) {
        firstStageGreen.textContent -= 1;
    } else if (str.includes('blue') && firstStageBlue.textContent > 0) {
        firstStageBlue.textContent -= 1;
    } else if (str.includes('brown') && firstStageRed.textContent > 0) {
        firstStageRed.textContent -= 1;
    }
}

function trackerSecond() {
    if (str.includes('green') && secondStageGreen.textContent > 0) {
        secondStageGreen.textContent -= 1;
    } else if (str.includes('blue') && secondStageBlue.textContent > 0) {
        secondStageBlue.textContent -= 1;
    } else if (str.includes('brown') && secondStageRed.textContent > 0) {
        secondStageRed.textContent -= 1;
    }
}

function trackerThird() {
    if (str.includes('green') && thirdStageGreen.textContent > 0) {
        thirdStageGreen.textContent -= 1;
    } else if (str.includes('blue') && thirdStageBlue.textContent > 0) {
        thirdStageBlue.textContent -= 1;
    } else if (str.includes('brown') && thirdStageRed.textContent > 0) {
        thirdStageRed.textContent -= 1;
    }
}
/////////////////////////////////////////////////////////////////////////////////// shuffleTheCardBtn

shuffleTheCardBtn.addEventListener('click', () => {
    shuffleTheCardBtn.style.backgroundColor = 'red';
    shuffleTheCard();
    arrayStageOne.sort(() => 0.5 - Math.random());
    arrayStageTwo.sort(() => 0.5 - Math.random());
    arrayStageThree.sort(() => 0.5 - Math.random());
});

/////////////////////////////////////////////////////////////////////////////////// shuffleTheCardBtn


/////////////////////////////////////////////////////////////////////////////////// currentCard AND LAST CARD

const currentCard = document.querySelector('.current-card');
let lastCard = document.querySelector('.last-card');
let str;

currentCard.addEventListener('click', () => {

    lastCard.style.opacity = '1';
    currentCard.style.opacity = '1';

    if (arrayStageThree.length === 0) {
        currentCard.style.opacity = '0';
    }
    if (arrayStageThree.length != 0 && arrayStageTwo.length === 0) {
        str = arrayStageThree.shift();
        lastCard.style.backgroundImage = `url(${str})`;
        trackerThird();
    }
    if (arrayStageTwo.length != 0 && arrayStageOne.length === 0) {
        str = arrayStageTwo.shift();
        lastCard.style.backgroundImage = `url(${str})`;
        trackerSecond();
    }
    if (arrayStageOne.length != 0) {
        str = arrayStageOne.shift();
        lastCard.style.backgroundImage = `url(${str})`;
        trackerFirst();
    }
}
);

/////////////////////////////////////////////////////////////////////////////////// currentCard AND LAST CARD

/////////////////////////////////////////////////////////////////////////////////// shuffleTheCard

let ancients;
let difficultie;
let arrayStageOne = [];
let arrayStageTwo = [];
let arrayStageThree = [];

function shuffleTheCard() {
    currentCard.style.opacity = '1';

    arrayStageOne = [];
    arrayStageTwo = [];
    arrayStageThree = [];

    let greensCardNotHardOrEasy = [];
    let brownsCardNotHardOrEasy = [];
    let bluesCardNotHardOrEasy = [];

    ancientsData.forEach(item => {
        if (item.id === ancients) {
            cardGreen.forEach(value => {
                if (value.difficulty != 'hard' && difficultie === 'easy') {
                    greensCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty != 'easy' && difficultie === 'hard') {
                    greensCardNotHardOrEasy.push(value.cardFace);
                } else if(difficultie === 'normal') { 
                    greensCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty === 'easy' && difficultie === 'veryEasy') {
                    greensCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty === 'hard' && difficultie === 'veryHard') {
                    greensCardNotHardOrEasy.push(value.cardFace);
                }
            })
                if(greensCardNotHardOrEasy.length  < item.firstStage.greenCards + item.secondStage.greenCards + item.thirdStage.greenCards) {
                    cardGreen.forEach(v => { 
                        if (v.difficulty != 'hard') {
                            greensCardNotHardOrEasy.push(v.cardFace);
                        }
                    })
                }
                if(greensCardNotHardOrEasy.length  < item.firstStage.greenCards + item.secondStage.greenCards + item.thirdStage.greenCards) {
                    cardGreen.forEach(v => { 
                        if (v.difficulty != 'easy') {
                            greensCardNotHardOrEasy.push(v.cardFace);
                        }
                    })
                }
            
            for (let i = 0; i < item.firstStage.greenCards; i++) {
                arrayStageOne.push(greensCardNotHardOrEasy.shift());
            }
            for (let i = 0; i < item.secondStage.greenCards; i++) {
                arrayStageTwo.push(greensCardNotHardOrEasy.shift());
            }
            for (let i = 0; i < item.thirdStage.greenCards; i++) {
                arrayStageThree.push(greensCardNotHardOrEasy.shift());
            }

            cardBrown.forEach(value => {
                if (value.difficulty != 'hard' && difficultie === 'easy') {
                    brownsCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty != 'easy' && difficultie === 'hard') {
                    brownsCardNotHardOrEasy.push(value.cardFace);
                } else if(difficultie === 'normal') {
                    brownsCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty === 'easy' && difficultie === 'veryEasy') {
                    brownsCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty === 'hard' && difficultie === 'veryHard') {
                    brownsCardNotHardOrEasy.push(value.cardFace);
                }
            })

            if(brownsCardNotHardOrEasy.length  < item.firstStage.brownCards + item.secondStage.brownCards + item.thirdStage.brownCards) {
                    cardBrown.forEach(v => { 
                        if (v.difficulty != 'hard') {
                            brownsCardNotHardOrEasy.push(v.cardFace);
                        }
                    })
                }
                if(brownsCardNotHardOrEasy.length  < item.firstStage.brownCards + item.secondStage.brownCards + item.thirdStage.brownCards) {
                    cardBrown.forEach(v => { 
                        if (v.difficulty != 'easy') {
                            brownsCardNotHardOrEasy.push(v.cardFace);
                        }
                    })
                }

            for (let i = 0; i < item.firstStage.brownCards; i++) {
                arrayStageOne.push(brownsCardNotHardOrEasy.shift());
            }
            for (let i = 0; i < item.secondStage.brownCards; i++) {
                arrayStageTwo.push(brownsCardNotHardOrEasy.shift());
            }
            for (let i = 0; i < item.thirdStage.brownCards; i++) {
                arrayStageThree.push(brownsCardNotHardOrEasy.shift());
            }

            cardBlue.forEach(value => {
                if (value.difficulty != 'hard' && difficultie === 'easy') {
                    bluesCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty != 'easy' && difficultie === 'hard') {
                    bluesCardNotHardOrEasy.push(value.cardFace);
                } else if(difficultie === 'normal') {
                    bluesCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty === 'easy' && difficultie === 'veryEasy') {
                    bluesCardNotHardOrEasy.push(value.cardFace);
                } else if(value.difficulty === 'hard' && difficultie === 'veryHard') {
                    bluesCardNotHardOrEasy.push(value.cardFace);
                }
            })

            if(bluesCardNotHardOrEasy.length  < item.firstStage.blueCards + item.secondStage.blueCards + item.thirdStage.blueCards) {
                cardBlue.forEach(v => { 
                    if (v.difficulty != 'hard') {
                        bluesCardNotHardOrEasy.push(v.cardFace);
                    }
                })
            }
            if(bluesCardNotHardOrEasy.length  < item.firstStage.blueCards + item.secondStage.blueCards + item.thirdStage.blueCards) {
                cardBlue.forEach(v => { 
                    if (v.difficulty != 'easy') {
                        bluesCardNotHardOrEasy.push(v.cardFace);
                    }
                })
            }

            for (let i = 0; i < item.firstStage.blueCards; i++) {
                arrayStageOne.push(bluesCardNotHardOrEasy.shift());
            }
            for (let i = 0; i < item.secondStage.blueCards; i++) {
                arrayStageTwo.push(bluesCardNotHardOrEasy.shift());
            }
            for (let i = 0; i < item.thirdStage.blueCards; i++) {
                arrayStageThree.push(bluesCardNotHardOrEasy.shift());
            }
        }
    })

}

/////////////////////////////////////////////////////////////////////////////////// shuffleTheCard