function createMemoryCard() {
  const $memoryCard = `
    <article  class="memory-card"  onclick="handleClick()">
    <img 
        src = './img/icon-collabcode.png'
        alt = 'icone collabcode collab-code'
        class='icon'
       
        />
    </article>
  `;

  return $memoryCard;
}

function handleClick() {
  console.log("AE");
}

function createMemoryCardFront() {
  const $memoryCardFront = `
  <article  class="memory-card -front">
  <img 
      src = './img/icon-c.png'
      alt = 'icone collabcode collab-code'
      class='icon'
      />
  </article>
`;

  return $memoryCardFront;
}
