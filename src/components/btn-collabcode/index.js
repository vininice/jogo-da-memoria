const btnCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .btn-collabcode {
            width: 100%;
            height:48px;
            color: #fff;
            font-size: 14px;
            text-transform: uppercase;
            background-color: #f25a70;
            border-radius: 24px;
            cursor: pointer;
        }

        .input-collabcode + .btn-collabcode {
          margin-top: 45px;
        }
      `;

    $head.insertBefore($style, null);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();
    window.location.hash = `#/${path}`;
  };

  module.render = ({ content = "", path }) => {
    module._style();
    return `
        <input onClick="btnCollabCode.handleClick(event, '${path}')" class="btn-collabcode" type="submit" value=${content} />
      `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
