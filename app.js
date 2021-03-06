document.addEventListener('DOMContentLoaded', () => {
    // Готовим начальные данные (init)

    const grid = document.querySelector('.grid');
    const resetGameContainer = document.querySelector('.reset-game__container');
    const resetGameButton = document.querySelector('.reset-game-button');
    const resultDisplay = document.querySelector('#result');
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },                             //0
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },                //1
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]
    let cardsWon = [];
    let cardsChosenNames = [];
    let cardsChosenId = [];

    resetGameButton.addEventListener('click', resetGame);

    function randomize(array) {
        array.sort( () => 0.5 - Math.random() ); // ненадежный метод случайной сортировки
    }
    randomize(cardArray);
    //Генерация доски с карточками
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('draggable', false);
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosenId.push(cardId);
        cardsChosenNames.push(cardArray[cardId].name);
        if(cardsChosenNames.length < 3) {
            this.setAttribute('src', cardArray[cardId].img)
        }
        if(cardsChosenNames.length === 2) {
          setTimeout(() => {
              checkForMatch();
          }, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        let cardOne = cards[optionOneId];
        let cardTwo = cards[optionTwoId];
        if(optionOneId != optionTwoId)  {
            if(cardsChosenNames[0] === cardsChosenNames[1]) {
                cardOne.classList.add("card-disabled");
                cardTwo.classList.add("card-disabled");
                cardOne.removeEventListener('click', flipCard);
                cardTwo.removeEventListener("click", flipCard);
                cardsWon.push(cardsChosenNames);

                // ОБНЛОВЛЯЕМ СЧЕТ
                resultDisplay.textContent = cardsWon.length;
                // ВЫИГРАЛИ
                if(cardsWon.length === cardArray.length / 2) {
                    resultDisplay.textContent = "Поздравляем! Вы выиграли!";
                    resetGameContainer.style.display = "flex";
                }
            } else {
                cardOne.setAttribute('src', 'images/blank.png');
                cardTwo.setAttribute('src', 'images/blank.png');
            }
        } else {
          cardOne.setAttribute('src', "images/blank.png");
        }
        cardsChosenNames = [];
        cardsChosenId = [];
    }

    function resetGame() {
        randomize(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.querySelector(`img[data-id='${i}']`);
            card.setAttribute('src', 'images/blank.png');
            card.addEventListener('click', flipCard);
            card.classList.remove('card-disabled');
        }
        cardsWon = [];
        resultDisplay.textContent = 0;
        resetGameContainer.style.display = "none";
    }

    createBoard();

 }) ;




