document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('comment-form');
  const usernameInput = document.getElementById('username');
  const commentTextInput = document.getElementById('comment-text');
  const commentsContainer = document.getElementById('comments-container');

  // Adiciona o evento de envio ao formulário
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar

    const name = usernameInput.value.trim();
    const text = commentTextInput.value.trim();

    if (name !== '' && text !== '') {
      // Cria o elemento do novo comentário
      const newComment = document.createElement('div');
      newComment.classList.add('comment-card');

      newComment.innerHTML = `
        <h4>${escapeHTML(name)}</h4>
        <p>${escapeHTML(text)}</p>
      `;

      // Adiciona o comentário no início da lista
      commentsContainer.prepend(newComment);

      // Limpa os campos do formulário
      usernameInput.value = '';
      commentTextInput.value = '';
    }
  });

  // Função de segurança básica para evitar injeção de código
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});
