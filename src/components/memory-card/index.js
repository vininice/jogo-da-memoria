const memoryCard = (function() {
  const module = {};

  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
  
    .memory-card  {
        width: 155px;
        height: 155px;
        position: relative;
      }
  
      .card {
        width: 100%;
        height: 100%;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        position: absolute;
        cursor:pointer;
      
      }
  
      .memory-card.-active .card, .memory-card.-score .card {
        display: none;
      }
  
      .memory-card.-active .card.-front, .memory-card.-score .card.-front {
        display: flex;
      }
    
      .memory-card .card.-front {
        background-color: #fff;
     
      }
    
      .memory-card .card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
      }
    
      .memory-card .card > .icon {
        width: 100px;
        height: 100px;
      }
    
      .memory-card .card.-front > .icon {
        position: absolute;
        transform: translateY(-10px);
      }
    
    `;

    $head.insertBefore($style, null);

    return ({ src, alt, nameClass }) =>
      ` 
      <div class="memory-card " onclick="memoryCard.handleClick(this)">
        <article  class="card -front">
        <img 
            src = ${src}
            alt = ${alt}
            class="icon"
            />
        </article>
        <article  class="card">
        <img 
            src = '../../../img/icon-collabcode.png'
            alt = 'icone collabcode'
            class="icon"
            />
        </article>
       </div>
     `;
  };

  module.handleClick = $el => {
    if (
      !$el.classList.contains("-active") &&
      !$el.classList.contains("-score")
    ) {
      module.activeMemoryCard($el);
      module.checkSure();
    }
  };

  module.activeMemoryCard = $el => {
    if (qtdActiveMemoryCard < 2) {
      $el.classList.add("-active");
    }
  };

  module.checkSure = () => {
    if (qtdActiveMemoryCard === 1) {
      const $memoryCards = document.querySelectorAll(".memory-card.-active");
      if (
        $memoryCards[0].querySelector(".-front .icon").getAttribute("src") ===
        $memoryCards[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        store.score++;
        $memoryCards.forEach($memoryCard => {
          $memoryCard.classList.add("-score");
          $memoryCard.classList.remove("-active");
        });

        console.log(store.score);
      } else {
        setTimeout(() => {
          const $ActiveMemoryCards = document.querySelectorAll(
            ".memory-card.-active"
          );

          $ActiveMemoryCards.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });
          qtdActiveMemoryCard = 0;
        }, 1000);
      }
    }
  };

  return {
    create: module.create,
    handleClick: module.handleClick
  };
})();
