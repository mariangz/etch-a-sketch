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

create(5);
