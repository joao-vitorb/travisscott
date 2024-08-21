// Seleciona as imagens
const imgKpop1 = document.getElementById('img_kpop1');
const imgKpop2 = document.getElementById('img_kpop2');

// Define os novos nomes dos arquivos ao passar o mouse
const imgKpop1Alt = './assets/shop-kpop1-alt.png';
const imgKpop2Alt = './assets/shop-kpop2-alt.png';

// Adiciona listeners para o evento 'mouseover'
imgKpop1.addEventListener('mouseover', function() {
    imgKpop1.src = imgKpop1Alt;
    imgKpop1.classList.add('alt'); // Adiciona a classe 'alt' para alterar o tamanho
});

imgKpop2.addEventListener('mouseover', function() {
    imgKpop2.src = imgKpop2Alt;
    imgKpop2.classList.add('alt'); // Adiciona a classe 'alt' para alterar o tamanho
});

// Adiciona listeners para o evento 'mouseout' para voltar ao estado original
imgKpop1.addEventListener('mouseout', function() {
    imgKpop1.src = './assets/shop-kpop1.png';
    imgKpop1.classList.remove('alt'); // Remove a classe 'alt' para voltar ao tamanho original
});

imgKpop2.addEventListener('mouseout', function() {
    imgKpop2.src = './assets/shop-kpop2.png';
    imgKpop2.classList.remove('alt'); // Remove a classe 'alt' para voltar ao tamanho original
});


document.addEventListener('DOMContentLoaded', function() {
    const shopCdTexts = document.querySelectorAll('.shop_cd_text');

    shopCdTexts.forEach(shopCdText => {
        const img = shopCdText.querySelector('img');
        const originalSrc = img.src;
        const altSrc = originalSrc.replace('.png', '-alt.png');

        shopCdText.addEventListener('mouseover', function() {
            img.src = altSrc;
        });

        shopCdText.addEventListener('mouseout', function() {
            img.src = originalSrc;
        });
    });

    // Restante do seu código continua aqui...
    window.addEventListener('scroll', () => {
        const imageContainer = document.querySelector('.image-container');
        const maxScroll = 750; // Adjust this value to control the scroll distance
        const scrollY = Math.min(window.scrollY, maxScroll); // Limit scrollY to maxScroll
        const scrollPercent = scrollY / maxScroll;

        const minWidth = 10; // Minimum width in vw
        const maxWidth = 63.5; // Maximum width in vw
        const minTop = 9; // Minimum top position in vh
        const maxTop = 50; // Maximum top position in vh

        const newWidth = maxWidth - (scrollPercent * (maxWidth - minWidth));
        const newTop = maxTop - (scrollPercent * (maxTop - minTop));

        imageContainer.style.top = `${newTop}vh`;
        imageContainer.querySelector('img').style.width = `${newWidth}vw`;
    });

    function toggleDropdown() {
        document.getElementById("sizeDropdown").classList.toggle("show");
    }

    function selectSize(size) {
        document.getElementById("sizeButton").textContent = size;
        document.getElementById("sizeDropdown").classList.remove("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('#sizeButton')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});
