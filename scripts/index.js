let deck = [
  {
    id: 1,
    name: "rosa",
    color: "#84CFFA",
    imagem: "https://cdn-icons-png.flaticon.com/512/2926/2926754.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 2,
    name: "peixinho",
    color: "#FA8484",
    imagem: "https://cdn-icons-png.flaticon.com/512/4484/4484394.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 3,
    name: "drink",
    color: "#E984FA",
    imagem: "https://cdn-icons-png.flaticon.com/512/7848/7848361.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 4,
    name: "coracao",
    color: "#84FAAC",
    imagem: "https://cdn-icons-png.flaticon.com/512/9254/9254789.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 5,
    name: "oculos",
    color: "#8684FA",
    imagem: "https://cdn-icons-png.flaticon.com/512/682/682368.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 6,
    name: "boto",
    color: "#F7FA84",
    imagem: "https://cdn-icons-png.flaticon.com/512/3060/3060578.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
];

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let movements = 0;
let winContador = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
    }

    console.log(winContador)
     
    secondCard = this;
 
    checkForMatch();
}
 
  function checkForMatch() {
    if(firstCard.dataset.nome !== secondCard.dataset.nome) {
      movements++;
    }
    document.getElementById("movimentos").innerHTML = `${movements}`;
    document.getElementById("movimentos2").innerHTML = `${movements}`;
      
    if (firstCard.dataset.nome === secondCard.dataset.nome) {
      winContador++;
      disableCards();
      if(winContador == 1.5) {
        setTimeout(() => {
          document.querySelector('#vitoria').style.display = 'block'
          document.querySelector('#movimentosvitoria').innerHTML = movements
        }, 1000);
      }
      return;
    }

 
    unflipCards();

    console.log(movements);

  }
 

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }
 

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();

    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }


  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));


