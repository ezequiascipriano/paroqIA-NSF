// Função para atualizar o ano atual no footer
document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual no rodapé
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Aqui você pode adicionar mais funcionalidades JavaScript conforme necessário
    console.log('Página da Paróquia Nossa Senhora de Fátima carregada com sucesso!');
});
