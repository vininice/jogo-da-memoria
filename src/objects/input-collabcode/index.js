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
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `
      <input class="input-collabcode" type="email" placeholder=""/>
    `;
  };

  return {
    render: module.render
  };
})();
