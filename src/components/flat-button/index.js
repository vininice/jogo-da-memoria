const flatButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
            .flat-button {
                background-color: #eae6da;
                color: #fffeee;
                font-size: 24px;
                font-weight: bold;
                border: 0;
                width: 185px;
                height: 176px;
                text-transform: uppercase;
                
            }
        `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `
            <button class="flat-button">Login</button>
        `;
  };
  return {
    render: module.render
  };
})();
