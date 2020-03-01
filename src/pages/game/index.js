(function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();

  const $pointBar = pointBar.create();

  const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "icone C++"
  });

  const $memoryCardJs = createMemoryCard({
    src: "img/icon-js.png",
    alt: "icone javascript"
  });
  const $memoryCardJava = createMemoryCard({
    src: "img/icon-java.png",
    alt: "icone java"
  });
  const $memoryCardPhp = createMemoryCard({
    src: "img/icon-php.png",
    alt: "icone php"
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
})();
