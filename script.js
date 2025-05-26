// Função para ativar a tela cheia
function enterFullScreen() {
    const element = document.documentElement; // Toda a página

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

// Aqui forçamos a tela cheia ao carregar a página
window.onload = () => {
    // Espera o clique do usuário para ativar o fullscreen
    document.body.addEventListener('click', () => {
        enterFullScreen();
    });

};
