const createMemoryCard = (src, alt, nameClass) =>
  `
     <article  class="memory-card ${nameClass}"  onclick="handleClick()">
      <img 
          src = ${src}
          alt = ${alt}
          class="icon"
          />
      </article>
    `;

const handleClick = () => console.log("AE");
