function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `<img 
        src = './img/icon-collabcode.png'
        alt = 'icone collabcode collab-code'
        class='icon'
        />
      `;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $wrapCards.insertBefore($memoryCardFront, null);

  const $iconC = `<img 
src = './img/icon-c.png'
alt = 'icone collabcode collab-code'
class='icon'
/>
`;

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
}
