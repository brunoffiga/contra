const title = document.querySelector('#frontier-title');
const text = document.querySelector('#frontier-text');
const status = document.querySelector('#frontier-status');
const nodes = [...document.querySelectorAll('.node')];

function activate(node) {
  nodes.forEach(n => n.setAttribute('aria-pressed', String(n === node)));
  title.textContent = node.dataset.title;
  text.textContent = node.dataset.text;
  status.textContent = node.dataset.status || 'OPEN PROBLEM';
}

nodes.forEach(node => {
  node.setAttribute('role', 'button');
  node.setAttribute('aria-pressed', node.classList.contains('active') ? 'true' : 'false');
  node.addEventListener('mouseenter', () => activate(node));
  node.addEventListener('focus', () => activate(node));
  node.addEventListener('click', () => activate(node));
  node.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activate(node);
    }
  });
});
