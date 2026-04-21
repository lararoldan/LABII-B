// ===== SLIDER RAMAS (solo en index) =====
let slideActual = 0;

function moverSlider(direccion) {
  const slider = document.getElementById('ramasSlider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.ramas__slide');
  const total = slides.length;
  slideActual = (slideActual + direccion + total) % total;
  slider.style.transform = `translateX(-${slideActual * 100}%)`;
}

// ===== PERFIL DINÁMICO =====
const usuario = localStorage.getItem('usuarioLogueado');
const perfilImg = localStorage.getItem('perfilImg');
const iconoPerfil = document.getElementById('icono-perfil');

if (usuario && iconoPerfil) {
  iconoPerfil.src = perfilImg;
  iconoPerfil.classList.remove('perfil-1');
  iconoPerfil.classList.add('perfil-2');
  document.getElementById('nombre-usuario').textContent = usuario;
  document.getElementById('nombre-usuario').classList.remove('oculto');
  document.getElementById('btn-login').classList.add('oculto');
  document.getElementById('btn-crear').classList.add('oculto');
  document.getElementById('btn-cerrar').classList.remove('oculto');
}

function cerrarSesion() {
  localStorage.removeItem('usuarioLogueado');
  localStorage.removeItem('perfilImg');
  window.location.reload();
}

// ===== TOGGLE DROPDOWN PERFIL =====
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-perfil');
  if (!dropdown) return;
  dropdown.classList.toggle('visible');
}

document.addEventListener('click', function(e) {
  const wrap = document.querySelector('.perfil__wrap');
  const dropdown = document.getElementById('dropdown-perfil');
  if (wrap && dropdown && !wrap.contains(e.target)) {
    dropdown.classList.remove('visible');
  }
});

// ===== FILTRO POR RAMA =====
function filtrarPorRama(rama, btn) {
  document.querySelectorAll('.filtro').forEach(b => b.classList.remove('activo'));
  btn.classList.add('activo');
  document.querySelectorAll('.obra-card').forEach(card => {
    if (rama === 'todas' || card.dataset.rama === rama) {
      card.classList.remove('oculta');
    } else {
      card.classList.add('oculta');
    }
  });
}

// ===== BUSCADOR =====
function filtrarObras() {
  const buscador = document.getElementById('buscador');
  if (!buscador) return;
  const texto = buscador.value.toLowerCase();
  document.querySelectorAll('.obra-card').forEach(card => {
    const nombre = card.dataset.nombre.toLowerCase();
    const autor = card.dataset.autor.toLowerCase();
    if (nombre.includes(texto) || autor.includes(texto)) {
      card.classList.remove('oculta');
    } else {
      card.classList.add('oculta');
    }
  });
}

// ===== MODAL =====
function abrirModal(card) {
  const imgEl = card.querySelector('.obra-card__img img');
  const nombre = card.dataset.nombre;
  const autor = card.querySelector('.obra-card__autor').textContent;
  const rama = card.querySelector('.obra-data-rama').textContent;
  const desc = card.querySelector('.obra-data-desc').textContent;

  const modalImg = document.getElementById('modal-img');
  if (imgEl) {
    modalImg.src = imgEl.src;
    modalImg.style.display = 'block';
  } else {
    modalImg.style.display = 'none';
  }

  document.getElementById('modal-nombre').textContent = nombre;
  document.getElementById('modal-autor').textContent = autor;
  document.getElementById('modal-rama').textContent = rama;
  document.getElementById('modal-desc').textContent = desc;

  document.getElementById('modal').classList.remove('oculto');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.add('oculto');
  document.body.style.overflow = '';
}

// Cerrar con Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarModal();
});

// Cerrar al click afuera
const modal = document.getElementById('modal');
if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === this) cerrarModal();
  });
}

// ===== HOVER FOTO FIGURAS =====
document.querySelectorAll('.figura-seccion__foto-wrap').forEach(wrap => {
  const fotos = wrap.querySelectorAll('.figura-foto');
  if (fotos.length < 2) return;

  wrap.addEventListener('mouseenter', () => {
    fotos.forEach(f => f.classList.remove('figura-foto--activa'));
    fotos[1].classList.add('figura-foto--activa');
  });

  wrap.addEventListener('mouseleave', () => {
    fotos.forEach(f => f.classList.remove('figura-foto--activa'));
    fotos[0].classList.add('figura-foto--activa');
  });
});

// ===== CARRUSEL AUTOMÁTICO FIGURAS =====
document.querySelectorAll('.figura-seccion__carrusel').forEach(carrusel => {
  const imgs = carrusel.querySelectorAll('.carrusel__img-wrap img');
  if (imgs.length < 2) return;
  let actual = 0;

  setInterval(() => {
    imgs[actual].classList.remove('activa');
    actual = (actual + 1) % imgs.length;
    imgs[actual].classList.add('activa');
  }, 3000);
});

function irARama(indice) {
  const slider = document.getElementById('ramasSlider');
  if (!slider) return;
  slideActual = indice;
  slider.style.transform = `translateX(-${slideActual * 100}%)`;
}