(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", false);
  const $singupButton = flatButton.render("Sing up", true);
  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $labelCollabeCode = labelCollabCode.render("E-mail");
  const $inputCollabCode = inputCollabCode.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $singupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $labelCollabeCode);
  $root.insertAdjacentHTML("beforeend", $inputCollabCode);
})();
