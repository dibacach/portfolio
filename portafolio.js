const repoEncriptador = document.querySelector('[data-repo-encriptador]');
const demoEncriptador = document.querySelector('[data-demo-encriptador]');
const repoPortafolio = document.querySelector('[data-repo-portafolio]');
const demoPortafolio = document.querySelector('[data-demo-portafolio]');

repoEncriptador.addEventListener('click', () => {
    window.open('https://github.com/dibacach/encriptador', '_blank');
});

demoEncriptador.addEventListener('click', () => {
    window.open('https://dibacach.github.io/encriptador', '_blank');
});


repoPortafolio.addEventListener('click', () => {
    window.open('https://github.com/dibacach/portfolio', '_blank');
});

demoPortafolio.addEventListener('click', () => {
    window.open('https://dibacach.github.io/portfolio', '_blank');
});