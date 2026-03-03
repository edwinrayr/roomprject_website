// Año si lo usas en footer (opcional)
// document.getElementById('y').textContent = new Date().getFullYear();

const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobileMenu');
const scrim = document.querySelector('.scrim');

function openMenu() {
  document.body.classList.add('menu-open');
  burger.setAttribute('aria-expanded', 'true');
  // bloquea scroll del body detrás del menú
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.body.classList.remove('menu-open');
  burger.setAttribute('aria-expanded', 'false');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = document.body.classList.contains('menu-open');
    isOpen ? closeMenu() : openMenu();
  });
}

// Cerrar al tocar overlay o enlaces
scrim?.addEventListener('click', closeMenu);
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

// Cerrar si se cambia el tamaño de pantalla a escritorio
window.addEventListener('resize', () => {
  if (window.innerWidth > 860 && document.body.classList.contains('menu-open')) {
    closeMenu();
  }
});

// --- Loader 2s ---
(function(){
  const loader = document.getElementById('pr-loader');
  if(!loader) return;

  // Bloquea scroll mientras está el loader
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  // Oculta después de 2s (si quieres 2.3s, cambia a 2300)
  const HIDE_AFTER_MS = 2000;
  setTimeout(() => {
    loader.classList.add('is-hidden');
    // Restablece scroll
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }, HIDE_AFTER_MS);
  
})();

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);
