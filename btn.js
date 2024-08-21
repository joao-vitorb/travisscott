document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const buttonImage = document.getElementById('button-image');
    const optionContainer = document.querySelector('.option-container');
    const topContainer = document.querySelector('.top-container');
    const topImage = document.getElementById('top-image');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    const overlay = document.querySelector('.overlay'); // Seleciona o overlay adicionado

    let toggled = false;

    toggleButton.addEventListener('click', () => {
        toggled = !toggled;

        if (toggled) {
            buttonImage.src = './assets/x-close.png';
            optionContainer.style.display = 'flex';
            overlay.classList.add('active'); // Adiciona a classe para mostrar o overlay

            setTimeout(() => {
                optionContainer.classList.add('show');
                topContainer.classList.add('show');
                topImage.src = './assets/utopia-logo2.png';
                leftButton.style.display = 'block';
                rightButton.style.display = 'block';

                setTimeout(() => {
                    leftButton.classList.add('show');
                    rightButton.classList.add('show');
                }, 10);
            }, 10);
        } else {
            buttonImage.src = './assets/utopia-logo1.png';

            optionContainer.classList.remove('show');
            topContainer.classList.remove('show');
            leftButton.classList.remove('show');
            rightButton.classList.remove('show');
            overlay.classList.remove('active'); // Remove a classe para ocultar o overlay

            setTimeout(() => {
                optionContainer.style.display = 'none';
                topImage.src = '';
                leftButton.style.display = 'none';
                rightButton.style.display = 'none';
            }, 500);
        }
    });
});
