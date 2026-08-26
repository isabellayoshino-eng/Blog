document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sistema de Curtidas Interativo
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    let count = 0;

    likeBtn.addEventListener('click', () => {
        count++;
        likeCount.textContent = count;
        
        // Efeito visual rápido ao clicar
        likeBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            likeBtn.style.transform = 'scale(1)';
        }, 100);
    });

    // 2. Sistema de Comentários Dinâmico
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Pega os valores digitados
        const name = document.getElementById('userName').value;
        const text = document.getElementById('commentText').value;

        // Cria a estrutura do novo comentário
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');
        
        commentItem.innerHTML = `
            <strong>👤 ${name}</strong>
            <p>${text}</p>
        `;

        // Adiciona o comentário no topo da lista
        commentsList.insertBefore(commentItem, commentsList.firstChild);

        // Limpa os campos do formulário após enviar
        commentForm.reset();
    });
});
