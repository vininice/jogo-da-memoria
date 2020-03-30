const formSignup = (function() {
  const module = {};

  module._children = () => {
    const $emailLabel = labelCollabCode.render("E-mail");
    const $inputEmail = inputCollabCode.render({
      placeholder: "joao@gmail.com",
      type: "email"
    });

    const $usernameLabel = labelCollabCode.render("User Name");
    const $usernameInput = inputCollabCode.render({
      placeholder: "joao da silva"
    });

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabCode.render({
      placeholder: "******",
      type: "password"
    });

    const $confirmPasswordLabel = labelCollabCode.render("Confirm Password");
    const $confirmPasswordInput = inputCollabCode.render({
      placeholder: "******",
      type: "password"
    });

    const $bnt = btnCollabCode.render({ content: "Signup", path: "login" });

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
        .form-signup {
            padding: 0 35px 40px;
        }
      `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
        <form class="form-signup" action="" method="POST">${module._children()}</form>
      `;
  };

  return {
    render: module.render
  };
})();
