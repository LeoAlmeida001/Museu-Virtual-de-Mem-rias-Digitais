// Seleção de elementos
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// 1. Alternância de Tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Salvar preferência no localStorage
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    // Atualizar ícone do botão
    updateThemeIcon();
});

// 2. Aplicar tema salvo ao carregar
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
}
updateThemeIcon();

// 3. Atualizar ícone do botão
function updateThemeIcon() {
    themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
}
