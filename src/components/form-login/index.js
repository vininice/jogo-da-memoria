const formLogin = (function() {
  const module = {};

  module._children = () => {
    const $usernameLabel = labelCollabCode.render("Username ou e-mail");
    const $usernameInput = inputCollabCode.render({
      placeholder: "joao da silva"
    });

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabCode.render({
      placeholder: "******",
      type: "password",
      id: "password"
    });
    const $eyeCollabCode = eyeCollabCode.render({ attrFor: "password" });

    const $bnt = btnCollabCode.render({ content: "Login", path: "game" });

    const $link = linkCollabCode.render({ content: "Forget password ?" });

    return `
            ${$usernameLabel}
            ${$usernameInput}
            
            ${$passwordLabel}
            ${$passwordInput}
            ${$eyeCollabCode}

            ${$link}
           
            ${$bnt}
        `;
  };
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .form-login {
            padding: 0 35px 40px;
        }
      `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
        <form class="form-login" action="" method="POST">${module._children()}</form>
      `;
  };

  return {
    render: module.render
  };
})();
