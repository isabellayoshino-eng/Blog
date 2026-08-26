// 1. Troca de Tema (Mudar a Vibe!)
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = 'Mudar a Vibe! 🌈';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Voltar ao Normal! ☀️';
    }
});

// 2. Sistema União de Confete Interativo
const interactionButtons = document.querySelectorAll('.btn-interaction');
const confettiContainer = document.getElementById('confetti-container');
const colors = ['#ff007f', '#00f0ff', '#ffde47', '#7000ff', '#00ff66'];

interactionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Cria 40 pedacinhos de confete a cada clique
        for (let i = 0; i < 40; i++) {
            createConfetti();
        }
    });
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Configurações aleatórias para cada confete
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `scale(${Math.random() * 1.2 + 0.5})`;
    
    // Tempo de queda aleatório entre 2 e 4 segundos
    const duration = Math.random() * 2 + 2;
    confetti.style.animationDuration = duration + 's';
    
    confettiContainer.appendChild(confetti);
    
    // Remove o confete da tela depois que a animação termina
    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}
