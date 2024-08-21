const images = document.querySelectorAll('.vinyl img');
        let currentIndex = 0;

        function showImage(index) {
            // Adiciona classes para controlar a visibilidade das imagens
            images.forEach((image, idx) => {
                image.classList.remove('active', 'left', 'right');
                if (idx === index) {
                    image.classList.add('active');
                } else if (idx === index - 1) {
                    image.classList.add('left');
                } else if (idx === index + 1) {
                    image.classList.add('right');
                }
            });
        }

        // Função para navegar entre as imagens
        function navigate(direction) {
            currentIndex = (currentIndex + direction + images.length) % images.length;
            showImage(currentIndex);
        }

        // Inicia com a primeira imagem ativa
        showImage(currentIndex);

        // Eventos de teclado para navegação
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                navigate(1);
            } else if (event.key === 'ArrowLeft') {
                navigate(-1);
            }
        });