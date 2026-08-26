// Função 1: Mudar a cor de fundo da página aleatoriamente
document.getElementById('btnColor').addEventListener('click', function() {
    const cores = ['#ff4081', '#00e676', '#ff9800', '#00bcd4', '#e91e63', '#9c27b0'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
});

// Função 2: Contador de curtidas
function curtirPost(botao) {
    const contador = botao.querySelector('span');
    let curtidas = parseInt(contador.innerText);
    curtidas++;
    contador.innerText = curtidas;
}
