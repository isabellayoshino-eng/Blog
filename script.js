// 1. Mudar o fundo do Blog de forma aleatória e divertida
function mudarCorFundo() {
    const cores Divertidas = ['#121214', '#1a0b2e', '#0b1a2e', '#1c1c1c', '#250b2e'];
    const corAleatoria = coresDivertidas[Math.floor(Math.random() * coresDivertidas.length)];
    document.body.style.backgroundColor = corAleatoria;
}

// 2. Sistema de Likes simples
function darLike(botao) {
    const spanContador = botao.querySelector('span');
    let likes Atuais = parseInt(spanContador.innerText);
    likesAtuais++;
    spanContador.innerText = likesAtuais;
    
    // Efeito de mini-pulo no botão ao clicar
    botao.style.transform = 'scale(1.2)';
    setTimeout(() => { botao.style.transform = 'scale(1)'; }, 150);
}

// 3. Sistema para Adicionar Comentários na Tela
function adicionarComentario() {
    const nome = document.getElementById('nome-comentario').value.trim();
    const texto = document.getElementById('texto-comentario').value.trim();
    const lista = document.getElementById('lista-comentarios');

    if (nome === "" || texto === "") {
        alert("Preencha seu nome e o comentário para postar! 😊");
        return;
    }

    // Cria a estrutura do novo comentário
    const novoComentario = document.createElement('div');
    novoComentario.classList.add('comentario-item');
    novoComentario.innerHTML = `<strong>👾 ${nome}:</strong> <p>${texto}</p>`;

    // Adiciona no topo da lista
    lista.insertBefore(novoComentario, lista.firstChild);

    // Limpa os campos
    document.getElementById('nome-comentario').value = "";
    document.getElementById('texto-comentario').value = "";
}

// 4. Selecionar Emoji para o Feedback
function selecionarEmoji(elemento, reacao) {
    // Remove seleção dos outros emojis
    const emojis = document.querySelectorAll('.emoji-rating span');
    emojis.forEach(e => e.classList.remove('selecionado'));
    
    // Adiciona seleção ao clicado
    elemento.classList.add('selecionado');
    document.getElementById('feedback-emoji').value = reacao;
}

// 5. Simular Envio do Feedback
function enviarFeedback() {
    const reacao = document.getElementById('feedback-emoji').value;
    const mensagem = document.getElementById('texto-feedback').value.trim();

    if (reacao === "") {
        alert("Escolha um emoji para nos dizer como se sente! 😍");
        return;
    }

    alert(`🎉 Feedback Enviado com Sucesso!\nReação: ${reacao}\nMensagem: "${mensagem || 'Sem mensagem adicional'}"\nObrigado por ajudar o blog a crescer!`);
    
    // Limpa o formulário
    const emojis = document.querySelectorAll('.emoji-rating span');
    emojis.forEach(e => e.classList.remove('selecionado'));
    document.getElementById('feedback-emoji').value = "";
    document.getElementById('texto-feedback').value = "";
}

