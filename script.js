// 🎲 1. BANCO DE DADOS DE CURIOSIDADES ALEATÓRIAS
const curiosidades = [
    "O mel é o único alimento que não estraga. Foram encontrados potes de mel no Egito com mais de 3.000 anos ainda comestíveis! 🍯",
    "Os polvos têm três corações e o sangue deles é azul! 🐙",
    "As bananas são radioativas! Mas calma, você precisaria comer 10 milhões delas de uma vez para se machucar. 🍌",
    "Wombats (marsupiais australianos) fazem cocô em formato de cubo perfeito! cube",
    "Antes do despertador ser inventado, existiam pessoas chamadas 'knocker-uppers' que batiam na janela dos outros com pedaços de madeira para acordá-las. ⏰",
    "Vacas têm melhores amigas e ficam estressadas quando são separadas delas! 🐮",
    "O primeiro alarme digital só tocava às 4 da manhã. Não dava para mudar o horário! ⏱️",
    "Florestas de bambu crescem tão rápido que você consegue ver algumas espécies crescendo a olho nu! 🎋"
];

const btnCuriosity = document.getElementById('btn-curiosity');
const curiosityText = document.getElementById('curiosity-text');

btnCuriosity.addEventListener('click', () => {
    // Escolhe um fato aleatório da lista
    const randomIndex = Math.floor(Math.random() * curiosidades.length);
    
    // Aplica o efeito visual de troca de texto
    curiosityText.classList.remove('text-changed');
    void curiosityText.offsetWidth; // Força o navegador a reiniciar a animação
    curiosityText.textContent = curiosidades[randomIndex];
    curiosityText.classList.add('text-changed');
    
    // Dispara partículas ao clicar
    createParticles(btnCuriosity, ['#9b59b6', '#3498db'], '✨');
});

// 👀 2. ANIMAÇÃO DOS OLHOS QUE SEGUEM O MOUSE
document.addEventListener('mousemove', (event) => {
    const pupils = document.querySelectorAll('.pupil');
    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        
        // Encontra o centro do olho
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        
        // Calcula o ângulo entre o olho e o ponteiro do mouse
        const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
        
        // Distância máxima que a pupila pode se mover dentro da esclera
        const distance = 8; 
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ❤️ 3. BOTÃO DE CURTIR COM CONTADOR
let likes = 0;
const btnLike = document.getElementById('btn-like');
const likeCount = document.getElementById('like-count');

btnLike.addEventListener('click', () => {
    likes++;
    likeCount.textContent = likes;
    createParticles(btnLike, [], '❤️'); // Solta uma explosão de corações
});

// 🎨 4. FILTRO DE MUDANÇA DE HUMOR
function changeMood(mood) {
    document.body.setAttribute('data-theme', mood);
}

// 🎉 5. GERADOR DE PARTÍCULAS REUTILIZÁVEL (CONFETES / CORAÇÕES / EMOJIS)
function createParticles(element, colors, emojiSymbol = null) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        if (emojiSymbol) {
            // Se for um emoji (ex: coração)
            particle.textContent = emojiSymbol;
            particle.style.fontSize = `${Math.random() * 10 + 15}px`;
        } else {
            // Se for confete colorido comum
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
        
        // Posiciona no centro do botão clicado
        particle.style.left = `${rect.width / 2}px`;
        particle.style.top = `${rect.height / 2}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 100 + 40;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);
        
        element.appendChild(particle);
        setTimeout(() => particle.remove(), 600);
    }
}

// ⚡ 6. INSTÂNCIA DO BOTÃO DE CONFETE ORIGINAL USANDO O NOVO MOTOR DE PARTÍCULAS
const btnConfete = document.getElementById('btn-confete');
btnConfete.addEventListener('click', () => {
    createParticles(btnConfete, ['#ff4757', '#2ed573', '#1e90ff', '#ffa502']);
});

// ⚡ 7. GERENCIADOR DE COMENTÁRIOS E MODAL (IGUAL ANTERIOR)
const commentForm = document.getElementById('comment-form');
const commentsBox = document.getElementById('comments-box');
commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    const li = document.createElement('li');
    li.className = 'comment-item';
    li.innerHTML = `<strong>${nameInput.value}:</strong> ${textInput.value}`;
    commentsBox.appendChild(li);
    nameInput.value = ''; textInput.value = '';
});

const modal = document.getElementById('feedback-modal');
document.getElementById('open-feedback').addEventListener('click', () => modal.style.display = 'flex');
document.getElementById('close-feedback').addEventListener('click', () => modal.style.display = 'none');
document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert(`Feedback enviado temporariamente! 🚀\n"${document.getElementById('feedback-text').value}"`);
    document.getElementById('feedback-text').value = '';
    modal.style.display = 'none';
});
