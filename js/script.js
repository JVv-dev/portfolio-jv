// Captura o formulário e a mensagem de erro
const form = document.getElementById('formContato');
const mensagemErro = document.getElementById('mensagemErro');

// Verifica se o formulário existe
if (form) {
    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação: verifica se está vazio OU se o e-mail é inválido
        if (nome === '' || email === '' || mensagem === '') {
            mensagemErro.textContent = 'Por favor, preencha todos os campos!';
            mensagemErro.style.display = 'block';
        } else if (!email.includes('@') || !email.includes('.')) {
            mensagemErro.textContent = 'Por favor, digite um e-mail válido (ex: usuario@email.com).';
            mensagemErro.style.display = 'block';
        } else {
            mensagemErro.style.display = 'none';
            alert('Mensagem enviada com sucesso, ' + nome + '!');
            form.reset();
        }
    });
}

// --- MODO ESCURO ---
const btnDarkMode = document.getElementById('btn-dark-mode');

if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('modo-escuro');
}

if (btnDarkMode) {
    btnDarkMode.addEventListener('click', function() {
        // Liga ou desliga a classe
        document.body.classList.toggle('modo-escuro');
        
        // Salva a escolha na memória do navegador
        if (document.body.classList.contains('modo-escuro')) {
            localStorage.setItem('tema', 'escuro');
        } else {
            localStorage.setItem('tema', 'claro');
        }
    });
}