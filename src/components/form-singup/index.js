const formSingup = (function() {
  const module = {};

  module._children = () => {
    const $emailLabel = labelCollabCode.render("E-mail");
    const $inputEmail = inputCollabCode.render("joao@gmail.com");

    const $usernameLabel = labelCollabCode.render("User Name");
    const $usernameInput = inputCollabCode.render("joao da silva");

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabCode.render("******");

    const $confirmPasswordLabel = labelCollabCode.render("Confirm Password");
    const $confirmPasswordInput = inputCollabCode.render("******");

    const $bnt = btnCollabCode.render("Singup");

    return `
            ${$emailLabel}
            ${$inputEmail}
            ${$usernameLabel}
            ${$usernameInput}
            ${$passwordLabel}
            ${$passwordInput}
            ${$confirmPasswordLabel}
            ${$confirmPasswordInput}
            ${$bnt}
        `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .form-singup {
            padding: 0 35px 40px;
        }
      `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
        <form class="form-singup" action="" method="POST">${module._children()}</form>
      `;
  };

  return {
    render: module.render
  };
})();
