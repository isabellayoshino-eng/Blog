// 1. Função para adicionar Comentários dinamicamente
function adicionarComentario() {
    const nomeInput = document.getElementById('comment-name');
    const textoInput = document.getElementById('comment-text');
    const listaComentarios = document.getElementById('comments-list');

    // Validação simples para não enviar vazio
    if (nomeInput.value.trim() === "" || textoInput.value.trim() === "") {
        alert("Preencha seu nome e a mensagem antes de postar! 😉");
        return;
    }

    // Criando a estrutura do novo comentário
    const novoComentario = document.createElement('div');
    novoComentario.classList.add('comment-item');

    novoComentario.innerHTML = `
        <strong>🎭 ${nomeInput.value}:</strong>
        <p>${textoInput.value}</p>
    `;

    // Adiciona o comentário no topo da lista
    listaComentarios.insertBefore(novoComentario, listaComentarios.firstChild);

    // Limpa os campos do formulário
    nomeInput.value = "";
    textoInput.value = "";

    // Dá um feedback visual soltando alguns confetes!
    soltarConfete();
}

// 2. Função de Feedback com Reação por Emojis
function enviarFeedback(reacao) {
    const mensagemFeedback = document.getElementById('feedback-message');
    mensagemFeedback.innerText = `Obrigado! Seu feedback ("${reacao}") foi registrado com sucesso! 💖`;
    
    // Animação de pulsar no texto de agradecimento
    mensagemFeedback.style.animation = 'none';
    setTimeout(() => {
        mensagemFeedback.style.animation = 'bounce 0.5s ease';
    }, 10);

    soltarConfete();
}

// 3. Efeito Explosão de Confetes (Animação JS + CSS)
function soltarConfete() {
    const container = document.getElementById('confetti-container');
    const cores = ['#ff007f', '#7f00ff', '#00ffff', '#fffe00', '#ff00ff'];

    for (let i = 0; i < 30; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confetti');
        
        // Espalha os confetes aleatoriamente pela largura da tela
        confete.style.left = Math.random() * 100 + 'vw';
        // Define velocidades de queda diferentes
        confete.style.animationDuration = (Math.random() * 2 + 1) + 's';
        // Escolhe uma cor aleatória do nosso array de cores
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        
        container.appendChild(confete);

        // Remove o elemento do HTML após o término da animação para não travar a página
        setTimeout(() => {
            confete.remove();
        }, 3000);
    }
}
