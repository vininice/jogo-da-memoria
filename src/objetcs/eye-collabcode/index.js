const eyeCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        display:block;
        text-indent: -9999px;
        background-image: url(/img/hidden.png);
        background-repeat: no-repeat;
        width: 24px;
        height: 15px;
        cursor: pointer;
        opacity: .5;
        margin-left: auto;
        transform: translateY(-180%)
      }

      .eye-collabcode.-active {
        opacity: 1
      }
    `;
    $head.insertBefore($style, null);
  };

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`);

    if ($input.getAttribute("type") === "text") {
      this.classList.remove("-active");
      $input.setAttribute("type", "password");
    } else {
      this.classList.add("-active");
      $input.setAttribute("type", "text");
    }
  };

  module.render = ({ attrFor = "" }) => {
    module._style();
    return `
      <label for="${attrFor}" class="eye-collabcode" onClick="eyeCollabCode.handleClick.bind(this)()">Mostrar Senha</label>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
