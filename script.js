// MENU MOBILE
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }
});

// SCRIPT PARA O CARROSSEL DOS DESTAQUES (FEATURES)
const featureTrack = document.querySelector('.features .carousel-track');
const featureCards = Array.from(document.querySelectorAll('.features .feature-card'));
const prevFeatureBtn = document.querySelector('.features .prev-btn');
const nextFeatureBtn = document.querySelector('.features .next-btn');

let currentFeatureIndex = 0; // Índice do primeiro item visível
const visibleFeatures = 3; // Número de itens visíveis
const maxFeatureIndex = featureCards.length - visibleFeatures;

function updateFeatureCarousel() {
  const cardWidth = featureCards[0].clientWidth;
  featureTrack.style.transform = `translateX(${-cardWidth * currentFeatureIndex}px)`;
}

nextFeatureBtn.addEventListener('click', () => {
  if (currentFeatureIndex < maxFeatureIndex) {
    currentFeatureIndex++;
  } else {
    currentFeatureIndex = 0; // loop
  }
  updateFeatureCarousel();
});

prevFeatureBtn.addEventListener('click', () => {
  if (currentFeatureIndex > 0) {
    currentFeatureIndex--;
  } else {
    currentFeatureIndex = maxFeatureIndex; // loop
  }
  updateFeatureCarousel();
});

window.addEventListener('resize', updateFeatureCarousel);

// SCRIPT PARA O CARROSSEL DA MÍDIA
const midiaTrack = document.querySelector('.midia .midia-carousel-track');
const midiaCards = Array.from(document.querySelectorAll('.midia .midia-card'));
const prevMidiaBtn = document.querySelector('.midia .midia-prev-btn');
const nextMidiaBtn = document.querySelector('.midia .midia-next-btn');

let currentMidiaIndex = 0;
const visibleMidia = 2; // quantos cards aparecem de uma vez?
const maxMidiaIndex = midiaCards.length - visibleMidia;

function updateMidiaCarousel() {
  const midiaCardWidth = midiaCards[0].clientWidth;
  midiaTrack.style.transform = `translateX(${-midiaCardWidth * currentMidiaIndex}px)`;
}

nextMidiaBtn.addEventListener('click', () => {
  if (currentMidiaIndex < maxMidiaIndex) {
    currentMidiaIndex++;
  } else {
    currentMidiaIndex = 0; // loop
  }
  updateMidiaCarousel();
});

prevMidiaBtn.addEventListener('click', () => {
  if (currentMidiaIndex > 0) {
    currentMidiaIndex--;
  } else {
    currentMidiaIndex = maxMidiaIndex;
  }
  updateMidiaCarousel();
});

window.addEventListener('resize', updateMidiaCarousel);
