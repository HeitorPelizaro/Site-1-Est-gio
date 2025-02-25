// SCRIPT PARA O MENU MOBILE
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});

// SCRIPT PARA O CARROSSEL DOS DESTAQUES (FEATURES)
const featureTrack = document.querySelector('.features .carousel-track');
const featureCards = Array.from(document.querySelectorAll('.features .feature-card'));
const prevFeatureBtn = document.querySelector('.features .prev-btn');
const nextFeatureBtn = document.querySelector('.features .next-btn');

let currentFeatureIndex = 0; // Índice do primeiro item visível
const visibleFeatures = 3; // Número de itens sempre visíveis
const maxFeatureIndex = featureCards.length - visibleFeatures;

function updateFeatureCarousel() {
  // Calcula a largura de um cartão (todos têm a mesma largura)
  const cardWidth = featureCards[0].clientWidth;
  featureTrack.style.transform = `translateX(${-cardWidth * currentFeatureIndex}px)`;
}

// Botão "Próximo"
nextFeatureBtn.addEventListener('click', () => {
  if (currentFeatureIndex < maxFeatureIndex) {
    currentFeatureIndex++;
  } else {
    // Se preferir loop, volta para o primeiro índice possível
    currentFeatureIndex = 0;
  }
  updateFeatureCarousel();
});

// Botão "Anterior"
prevFeatureBtn.addEventListener('click', () => {
  if (currentFeatureIndex > 0) {
    currentFeatureIndex--;
  } else {
    // Se preferir loop, vai para o último índice possível
    currentFeatureIndex = maxFeatureIndex;
  }
  updateFeatureCarousel();
});

// Recalcular posição ao redimensionar a janela
window.addEventListener('resize', updateFeatureCarousel);
