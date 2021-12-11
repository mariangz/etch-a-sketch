function create(n) {
  const grid = document.querySelector('.grid');
  const r = document.querySelector(':root');
  const rs = getComputedStyle(r);

  console.log(rs.getPropertyValue('--boxNumber'));
  r.style.setProperty('--boxNumber', `${n}`);

  let div;

  for (let i = 0; i < n * n; i++) {
    div = document.createElement('div');
    div.classList.add('box');
    grid.appendChild(div);
  }
}
create(36);

const random = () => Math.floor(Math.random() * 257);

const paint = (box) =>
  console.log(
    (box.target.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()}`)
  );

const node = document.querySelectorAll('.box');

node.forEach((box) => box.addEventListener('mouseover', (e) => paint(e)));
// console.log(node);
