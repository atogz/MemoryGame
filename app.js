document.addEventListener('DOMContentLoaded', () => {
    // Готовим начальные данные (init)
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

    cardArray.sort( () => 0.5 - Math.random() );

    const grid = document.querySelector('.grid');

     const resultDisplay = document.querySelector('#result');

    let cardsChosen = []; // проверять, что карточки совпали при клике
    let cardsChosenId = []; // мы смотрим, что кликнули на разные карточки
    let cardsWon = [];


//Генерация доски с карточками
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosenId.push(cardId);
        cardsChosen.push(cardArray[cardId].name);
        // если в cardChosen есть 2 элемента, то вызови функцию их сравнения
        console.log(cardsChosen);
        if(cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500);
          cardsChosen = [];
        }
    }

    function checkForMatch() {
        //const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(optionOneId !== optionTwoId)  {
          alert('Карточки не одинаковые!')
        } else {
          alert('Вы кликнули на одну и ту же карточку!');
        }
    }

    createBoard();

 })
