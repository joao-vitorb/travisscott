window.onload = function() {
    setTimeout(() => {
        document.body.style.backgroundColor = "#000000"; // Muda a cor de fundo para preto
    }, 100); // Pequeno atraso para garantir que a transição ocorra após o carregamento da página

    const utopiaLogo = document.querySelector('.bottom-logo img'); // Seleciona a imagem utopia-logo1.png
    const img = document.querySelector('.main-img');
    const glitchText = document.getElementById('glitch-text');
    const text = "CIRCUS MAXIMUS TOUR";
    const chars = "!@#$%^&*()_+{}:\"<>?[];',./`~";

    let glitchInterval;

    function getRandomChar() {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function glitchEffect() {
        let displayText = '';
        for (let i = 0; i < text.length; i++) {
            if (Math.random() > 0.5) {
                displayText += getRandomChar();
            } else {
                displayText += text[i];
            }
        }
        glitchText.textContent = displayText;
    }

    function revealText() {
        let index = 0;
        clearInterval(glitchInterval);
        const revealInterval = setInterval(() => {
            glitchText.textContent = text.substring(0, index) + text.substring(index).replace(/./g, getRandomChar);
            index++;
            if (index > text.length) {
                clearInterval(revealInterval);
                glitchText.textContent = text;
            }
        }, 10); // Super rápido para um efeito breve
        setTimeout(() => {
            clearInterval(revealInterval);
            glitchText.textContent = text;
        }, 400); // Duração total do efeito de glitch em milissegundos
    }

    glitchInterval = setInterval(glitchEffect, 20); // Super rápido para um efeito breve

    setTimeout(revealText, 500); // Começa a revelar após 1 segundo

    document.addEventListener('mousemove', (event) => {
        const rect = img.getBoundingClientRect();
        const imgX = rect.left + rect.width / 2;
        const imgY = rect.top + rect.height / 2;
        const offsetX = (event.clientX - imgX) / 100; // Ajuste o valor conforme necessário
        const offsetY = -(event.clientY - imgY) / 100; // Ajuste o valor conforme necessário
        img.style.transform = `perspective(1000px) rotateY(${offsetX}deg) rotateX(${offsetY}deg)`;
    });

    utopiaLogo.addEventListener('click', function() {
        if (utopiaLogo.src.includes('utopia-logo1.png')) {
            utopiaLogo.src = "./assets/x-close.png"; // Altera a imagem para x-close.png ao clicar
        } else {
            utopiaLogo.src = "./assets/utopia-logo1.png"; // Altera a imagem de volta para utopia-logo1.png ao clicar novamente
        }
    });

    // Função para verificar quando os elementos devem aparecer
    function checkFadeIn() {
        const tableRows = document.querySelectorAll('.tour-table tr');
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        tableRows.forEach(row => {
            // Verifica se o topo da linha está visível na janela
            const rowTop = row.getBoundingClientRect().top + scrollY;
            if (rowTop < windowHeight + scrollY) {
                row.classList.add('fade-in', 'active');
            }
        });
    }

    // Adiciona um listener para verificar sempre que a página for rolada
    document.addEventListener('scroll', checkFadeIn);

    // Executa uma verificação inicial ao carregar a página
    checkFadeIn();
};
