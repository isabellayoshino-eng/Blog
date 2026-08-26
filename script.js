// ⚡ 1. GERENCIADOR DE COMENTÁRIOS
const commentForm = document.getElementById('comment-form');
const commentsBox = document.getElementById('comments-box');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');

    // Cria a estrutura do novo comentário
    const li = document.createElement('li');
    li.className = 'comment-item';
    li.innerHTML = `<strong>${nameInput.value}:</strong> ${textInput.value}`;

    // Adiciona na lista visual
    commentsBox.appendChild(li);

    // Limpa os campos digitados
    nameInput.value = '';
    textInput.value = '';
});

// ⚡ 2. CONTROLE DA JANELA DE FEEDBACK (MODAL)
const modal = document.getElementById('feedback-modal');
const openBtn = document.getElementById('open-feedback');
const closeBtn = document.getElementById('close-feedback');
const feedbackForm = document.getElementById('feedback-form');

// Abre a janela
openBtn.addEventListener('click', () => modal.style.display = 'flex');

// Fecha a janela no "X"
closeBtn.addEventListener('click', () => modal.style.display = 'none');

// Processa o envio do feedback
feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const feedbackText = document.getElementById('feedback-text').value;
    
    // Mostra um aviso divertido na tela
    alert(`Obrigado pelo feedback! 😍\nSua mensagem foi recebida:\n"${feedbackText}"`);
    
    document.getElementById('feedback-text').value = '';
    modal.style.display = 'none'; // Fecha o pop-up
});

// ⚡ 3. ANIMAÇÃO DE EXPLOSÃO DE CONFETES
const btnConfete = document.getElementById('btn-confete');

btnConfete.addEventListener('click', function(event) {
    const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#3742fa', '#9b59b6'];
    
    // Cria 30 pedacinhos de confete coloridos
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Define uma cor aleatória da lista
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `50%`;
        confetti.style.top = `50%`;
        
        // Calcula direções espalhadas aleatórias (ângulos e força)
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 120 + 40;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        // Envia as coordenadas para o CSS usar na animação
        confetti.style.setProperty('--x', `${x}px`);
        confetti.style.setProperty('--y', `${y}px`);
        
        btnConfete.appendChild(confetti);
        
        // Deleta o confete depois que a animação acaba para não travar o site
        setTimeout(() => confetti.remove(), 600);
    }
});
