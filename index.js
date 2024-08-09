const OBELISK ="https://m.media-amazon.com/images/I/61hiEHj2o4L._AC_UF1000,1000_QL80_.jpg";
const SLIFER = "https://tcgplayer-cdn.tcgplayer.com/product/156036_200w.jpg";
const THE_WINGED_DRAGON = "https://kronozio.blob.core.windows.net/images/card/2f1128bb459647c194499ac069f8491c_front.jpg";
const BLUE_EYE_DRAGON = "https://images.production.sportscardinvestor.com/6783_5368_4625_EN001";
const SECRET ="https://i.pinimg.com/550x/b5/8d/04/b58d0452e86a3e9e1b10516bcfd7acdc.jpg"

const cardWeights = {
    [THE_WINGED_DRAGON]: 1,
    [SLIFER]: 1,             
    [OBELISK]: 1,             
    [BLUE_EYE_DRAGON]: 1,      
    [SECRET]: 0.2,           
  };
const getRandomCard = () => {
  // Calculate total weight for normalization
  const totalWeight = Object.values(cardWeights).reduce((acc, weight) => acc + weight, 0);

  // Generate a random number between 0 and the total weight
  const randomValue = Math.random() * totalWeight;

  // Iterate through cards and weights, accumulating weight values
  let accumulatedWeight = 0;
  for (const [cardUrl, weight] of Object.entries(cardWeights)) {
    accumulatedWeight += weight;
    if (randomValue <= accumulatedWeight) {
      return cardUrl;
    }
  }

  // If no card is chosen due to rounding errors, return a random default card
  return cardsURL[Math.floor(Math.random() * cardsURL.length)];
};

const blueScreenOfDeath ="https://techkick.in/wp-content/uploads/2024/04/windows10-bsod2.jpg"

const chosenCard = getRandomCard();

const backgroundProps = " no-repeat center center/cover";
const cardElement = document.querySelector('.card-back');

cardElement.onmouseout = () => {
    const chosenCard = getRandomCard();
    setTimeout(() => {
        cardElement.style.background = "url(" + chosenCard + ")" + backgroundProps;
    }, 200);
};

let hoverCounter = 2;
const toolTip = document.getElementById('tool-tip');

const displayBlueScreenOfDeath = () => {
    document.getElementById("body").style.background = "url(" + blueScreenOfDeath + ")"+backgroundProps;
    document.querySelectorAll(".box").forEach((box) => {
        box.style.display = "none";
    });

    document.querySelector("header").style.display = "none";
    document.querySelector("footer").style.display = "none";
    
}
const resetBlueScreen = () => {

    document.getElementById("body").style.background = "";
    document.querySelector("header").style.display = "";
    document.querySelector("footer").style.display = "";
    document.querySelectorAll(".box").forEach((box) => {
        box.style.display = "";
    });
    
}
const createToolTip = (toolTipMessage) => {
  const spanElement = document.createElement("span");
  spanElement.id = "tool-tip-hover";
  spanElement.innerHTML = toolTipMessage;
  return spanElement;
  
}
let changeToolTipText=true
toolTip.onmouseleave = () => {
  if(!changeToolTipText) 
    {
      return
    }

  toolTip.innerHTML = "";
  switch (hoverCounter) {
    case 1:
      toolTip.textContent = "Hover me for a surprise! 😜";
      spanElement = createToolTip("You'll love the outcome! 😉");
      toolTip.appendChild(spanElement);
      break;
    case 2:
      toolTip.textContent = "Are you daring enough? 😡";
      spanElement = createToolTip("Test your bravery now!");
      toolTip.appendChild(spanElement);
      break;
    case 3:
      toolTip.textContent = "This is your final chance. 🙃";
      spanElement = createToolTip("Don't push your luck!");
      toolTip.appendChild(spanElement);
      break;
    case 4:
      toolTip.textContent = "You've been warned! 💥";
      spanElement = createToolTip("Consequences will occur...");
      toolTip.appendChild(spanElement);
      break;
    case 5:
      displayBlueScreenOfDeath();
      setTimeout(() => {
        resetBlueScreen();
        toolTip.textContent = "You've survived it all! 😅";
        spanElement = createToolTip("But don't push your luck again...");
        toolTip.appendChild(spanElement);
        hoverCounter = 1;
      }, 10000);
      break;

  }
  if(changeToolTipText){
    hoverCounter++;
    changeToolTipText=false
    setTimeout(() => {
      changeToolTipText=true
    }, 500)
  }


}

let animationCount = 0;
const animatedCircle = document.querySelector('.circle');
const animatedSecret = document.querySelector('.secret-svg');

animatedCircle.addEventListener('animationiteration', () => {
  animationCount++;
  if(animationCount % 13 === 0) {
    document.querySelector(".secret-logo").style.display = "block";
    document.querySelector(".logo").style.display = "none";
  }
});
animatedSecret.addEventListener('animationiteration', () => {
  animationCount++;
  document.querySelector(".secret-logo").style.display= "none";
  document.querySelector(".logo").style.display = "block";

});
