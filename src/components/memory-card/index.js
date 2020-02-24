const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      position: relative;
    }
  
    .memory-card.-front {
      background-color: #fff;
    }
  
    .memory-card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }
  
    .memory-card > .icon {
      width: 100px;
      height: 100px;
    }
  
    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-10px);
    }
  
  `;

  $head.insertBefore($style, null);

  return ({ src, alt, nameClass }) =>
    ` <article  class="memory-card ${nameClass}"  onclick="handleClick()">
     <img 
         src = ${src}
         alt = ${alt}
         class="icon"card.
         />
     </article>
   `;
};

const handleClick = () => console.log("AE");
