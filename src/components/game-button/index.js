const gameButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .game-button {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            border: 3px solid #fffcee;
            color: #fffcee;
            font-family: 'Comfortaa', sans-serif;
            font-weight: bold;
            background-color: #2ed573;
            text-transform: uppercase;
            font-size: 1.05em;
            cursor: pointer;
            box-shadow: 0px 4px 8px #3a4042;
        }
        
      `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
            <button class="game-button">start</button>
        `;
  };

  return {
    render: module.render
  };
})();
