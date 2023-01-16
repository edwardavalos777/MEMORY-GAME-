document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
    cardGenerator();
    board();
  });
  //  playerLivesCount.textContent= playerLives;
  const cardGenerator = () => {
    //We generate the object 
    let cardData = [
      { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
      { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
      { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
      { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
      { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
      { imgSrc: "./images/ledzep.jpeg", id: 6, name: "lep zeppelin" },
      { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
      { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
      { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
      { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
      { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
      { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
      { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
      { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
      { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
      { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
    ];
  
    //We need to shuffle the cards 
      cardData.sort(()=> Math.random() - 0.5);
   
  
    //We generate the cards 
    cardData.forEach((item) => {
      const section = document.querySelector("section");
      const card = document.createElement("div");
      card.classList = "card";
  
      card.setAttribute("id", item.id);
      card.setAttribute("name", item.name);
  
      const face = document.createElement("img");
      face.classList = "face";
      face.src = item.imgSrc;
  
      const back = document.createElement("div");
      back.classList = "back";
  
      section.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
  
      card.addEventListener("click", (e) => {
        //Run our flip animation
        face.classList.toggle("toggleCard");
        card.classList.toggle("toggleCard");
        checkCards(e); 
      });
    });
  };
  const checkCards= (e) => {
    const clickedCard= e.target; 
    clickedCard.classList.add("flipped"); 
    const flippedCards= document.querySelectorAll('.flipped'); 
   const toggleCard= document.querySelectorAll(".toggleCard"); 
  
    if(flippedCards.length=== 2){
      if
        (flippedCards[0].getAttribute('name')=== flippedCards[1].getAttribute("name")
    )
    {
      console.log("match");
      card.classList.remove("flipped");
    }else{
      console.log("wrong"); 
      flippedCards.forEach ( (card) => {
        card.classList.remove("flipped"); 
        card.style.pointerEvents= 'none'; 
  
        setTimeout(() => card.classList.remove("toggleCard"), 1000); 
      }); 
      playerLives--;
      playerLivesCount.textContent=playerLives; 
      if (playerLives===0){
        restart("try again "); 
      }
    }
  }
  //run check to see if we won the game 
   if(toggleCard.length===16){
    restart("you won"); 
   }
  }; 
  
  //Restarting the Game 
  
   const restart= (text) => {
    let cardData= randomize();
    let faces= document.querySelectorAll(" .face");
    let cards=document.querySelectorAll(".card");
    section.style.pointerEvents="none"; 
    cardData.forEach((item, index) => {
      cards[index].classList.remove("toggleCard"); 
  
  //Randomizing 
     setTimeout(()=>{
      cards[index].style.pointerEvents= "all"; 
     faces[index].src= item.imgSrc; 
     cards[index].setAttribute("name", item.name); 
     }, 1000);
     section.style.pointerEvents ="all"; 
   });
   playerLives=6;
   playerLivesCount.textContent =playerLives; 
   setTimeout (() => window.alert(text), 100); 
   }; 
  
  const board = () => {
    console.log("i will fight you");
  };
