const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "icone collabcode"
);

const $memoryCardC = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-c.png",
  alt: "icone C++"
});

const $memoryCardJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "icone javascript",
  nameClass: "-front"
});
const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "icone java",
  nameClass: "-front"
});
const $memoryCardPhp = createMemoryCard({
  src: "img/icon-php.png",
  alt: "icone php",
  nameClass: "-front"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
