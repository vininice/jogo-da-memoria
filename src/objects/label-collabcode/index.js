const labelCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = ` 
      .label-collabcode {
        font-size: 16px;
        color: #3a4042;
        opacity: 0.5;
        display: block;
        
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();
    return `<label class="label-collabcode">
      ${content}
    </label>`;
  };

  return {
    render: module.render
  };
})();
