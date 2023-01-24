const BG = document.querySelector("#BG");

const background = [
  `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg`,
  `https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg`,
  `https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg`,
];
const fixedBG = background[Math.floor(Math.random() * background.length)];

BG.src = fixedBG;
