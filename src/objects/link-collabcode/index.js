const linkCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .link-collabcode {
           text-decoration: none;
            opacity: 0.73;
            font-size: 14px;
            line-height: 1.71;
						color: #3a4042;
						margin-top: 40px;
						margin-bottom: 60px;
						display: block;
						text-align: right;
        }
      `;

    $head.insertBefore($style, null);
  };

  module.render = ({ href = "#", content = "" }) => {
    module._style();
    return `
            <a class="link-collabcode" href="${href}">${content}</a>
        `;
  };

  return {
    render: module.render
  };
})();
