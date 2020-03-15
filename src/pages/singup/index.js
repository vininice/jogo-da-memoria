(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Login", false);
  const $singupButton = flatButton.render("Sing up", true);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
})();
