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
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `
      <input class="input-collabcode" type="text" placeholder=""/>
    `;
  };

  return {
    render: module.render
  };
})();
