const repoEncriptador = document.querySelector('[data-repo-encriptador]');
const demoEncriptador = document.querySelector('[data-demo-encriptador]');

repoEncriptador.addEventListener('click', () => {
    window.open('https://github.com/dibacach/encriptador', '_blank');
});

demoEncriptador.addEventListener('click', () => {
    window.open('https://dibacach.github.io/encriptador', '_blank');
});