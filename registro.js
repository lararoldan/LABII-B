// ===== TABS =====
function mostrarTab(tab) {
  // Ocultar ambos formularios
  document.getElementById('form-login').classList.add('oculto');
  document.getElementById('form-registro').classList.add('oculto');

  // Desactivar ambos tabs
  document.querySelectorAll('.acceso__tab').forEach(t => t.classList.remove('activo'));

  // Mostrar el tab seleccionado
  document.getElementById('form-' + tab).classList.remove('oculto');

  // Activar el tab correcto
  const tabs = document.querySelectorAll('.acceso__tab');
  if (tab === 'login') tabs[0].classList.add('activo');
  else tabs[1].classList.add('activo');
}

// ===== INICIAR SESIÓN =====
function iniciarSesion() {
  const nombre = document.getElementById('login-nombre').value.trim();
  const pass = document.getElementById('login-pass').value.trim();

  if (nombre === '' || pass === '') {
    alert('Por favor completá todos los campos.');
    return;
  }

  // Guardamos el nombre en localStorage para usarlo en el home
  localStorage.setItem('usuarioLogueado', nombre);
  localStorage.setItem('perfilImg', 'Iconos-B/ImgPerfil2.jpg');

  // Mostramos mensaje y redirigimos
  const mensaje = document.getElementById('mensaje-exito');
  const texto = document.getElementById('mensaje-texto');
  texto.textContent = '¡Hola ' + nombre + '! Iniciaste sesión con éxito.';
  mensaje.classList.remove('oculto');

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
}

// ===== CREAR CUENTA =====
function crearCuenta() {
  const nombre = document.getElementById('reg-nombre').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value.trim();

  if (nombre === '' || email === '' || pass === '') {
    alert('Por favor completá todos los campos.');
    return;
  }

  // Guardamos el nombre en localStorage
  localStorage.setItem('usuarioLogueado', nombre);
  localStorage.setItem('perfilImg', 'Iconos-B/ImgPerfil2.jpg');

  // Mostramos mensaje y redirigimos
  const mensaje = document.getElementById('mensaje-exito');
  const texto = document.getElementById('mensaje-texto');
  texto.textContent = '¡Cuenta creada con éxito! Bienvenido, ' + nombre + '.';
  mensaje.classList.remove('oculto');

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
}
