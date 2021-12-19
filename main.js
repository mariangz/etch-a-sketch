const $blackWhite = document.getElementById('blackWhite');
const $rainbow = document.getElementById('rainbow');
const $range = document.getElementById('range');
const $grid = document.querySelector('.grid');
const black = '#000';
const white = '#fff';
const random = () => Math.floor(Math.random() * 257);
let choosedColor;

const paint = (node) => {
  node.forEach((box) => {
    box.addEventListener(
      'mouseover',
      (e) =>
        (e.target.style.backgroundColor =
          choosedColor || `rgb(${random()}, ${random()}, ${random()})`)
    );
  });
};

document.addEventListener('DOMContentLoaded', create(16));
$range.addEventListener('change', () => create($range.value));
$rainbow.addEventListener('click', () => (choosedColor = undefined));
$blackWhite.addEventListener('click', () => {
  if (choosedColor != white) {
    choosedColor = white;
  } else {
    choosedColor = black;
  }
});

function create(n) {
  remove();
  const r = document.querySelector(':root');
  const rs = getComputedStyle(r);
  r.style.setProperty('--boxNumber', `${n}`);

  for (let i = 0; i < n * n; i++) {
    div = document.createElement('div');
    div.classList.add('box');
    $grid.appendChild(div);
  }
  const $node = document.querySelectorAll('.box');
  paint($node);
}

function remove() {
  if ($grid.firstChild) {
    while ($grid.firstChild) {
      $grid.removeChild($grid.lastChild);
    }
  }
}
