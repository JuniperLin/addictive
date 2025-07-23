// navbar.js
window.addEventListener("scroll", function () {
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('scrolled', window.scrollY > 28);
});

// 品牌形象動畫
const visualObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('#visual .grid-item').forEach(el => visualObserver.observe(el));

// 菜單動畫
const menuSection = document.querySelector('.menu-section');
const menuObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuSection.classList.add('show');
    }
  });
}, { threshold: 0.1 });
menuObserver.observe(menuSection);

// 通用 fade-in 動畫觀察器（用於 parallax + contact）
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
