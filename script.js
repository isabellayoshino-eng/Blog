document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('comment-form');
  const usernameInput = document.getElementById('username');
  const commentTextInput = document.getElementById('comment-text');
  const commentsContainer = document.getElementById('comments-container');
  
  // Sistema de Curtidas
  const likeBtn = document.getElementById('like-btn');
  const likeCountDisplay = document.getElementById('like-count');
  let likes = 0;

  likeBtn.addEventListener('click', () => {
    likes++;
    likeCountDisplay.textContent = likes;
    
    // Pequena animação de pulso ao clicar no botão de curtir
    likeBtn.style.transform = 'scale(1.3)';
    setTimeout(() => {
      likeBtn.style.transform = 'scale(1)';
    }, 200);
  });

  // Sistema de Adicionar Comentários
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = usernameInput.value.trim();
    const text = commentTextInput.value.trim();

    if (name && text) {
      // Criar o card do comentário com data/hora
      const newComment = document.createElement('div');
      newComment.classList.add('comment-card');

      const horaAtual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      newComment.innerHTML = `
        <h4>${escapeHTML(name)} <span>${horaAtual}</span></h4>
        <p>${escapeHTML(text)}</p>
      `;

      // Adiciona o novo comentário no topo com animação
      commentsContainer.prepend(newComment);

      // Limpa os campos
      usernameInput.value = '';
      commentTextInput.value = '';
    }
  });

  // Proteção simples contra HTML malicioso (XSS)
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
});
