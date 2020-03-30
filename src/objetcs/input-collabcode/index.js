const inputCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode {
        display: block;
        border-bottom: 2px solid rgba(58, 64, 66, .5);
        color: #3a4042;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 12px;
        padding-top: 12px;
        width: 100%;
      }
      .input-collabcode + .label-collabcode {
        margin-top: 30px;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = ({ id = "", placeholder = "", type = "text" }) => {
    module._style();
    return `
    
      <input id="${id}" class="input-collabcode" type="${type}" placeholder="${placeholder}" />
    `;
  };

  return {
    render: module.render
  };
})();
