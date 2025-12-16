//NIVEL 1

document.addEventListener('DOMContentLoaded', () => {
  const tabList = document.querySelector('[role="tablist"]');
  const tabs = tabList.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Desactivar pestaña actual
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });

      // Ocultar paneles
      panels.forEach(p => p.setAttribute('hidden', true));

      // Activar la pestaña clicada
      e.currentTarget.setAttribute('aria-selected', 'true');
      e.currentTarget.setAttribute('tabindex', '0');

      // Mostrar el panel asociado
      const panelId = e.currentTarget.getAttribute('aria-controls');
      const targetPanel = document.getElementById(panelId);
      if (targetPanel) {
        targetPanel.removeAttribute('hidden');
        // Forzar un reflow para asegurar que la transición CSS se aplica
        void targetPanel.offsetWidth;
        targetPanel.style.opacity = 1;
      }
    });
  });

  // Manejo básico de navegación con teclado (flechas izquierda/derecha)
  tabList.addEventListener('keydown', (e) => {
    let index = Array.from(tabs).indexOf(document.activeElement);
    if (e.keyCode === 37 || e.keyCode === 39) { // Flechas izquierda (37) y derecha (39)
      e.preventDefault();
      if (e.keyCode === 37) { // Izquierda
        index = (index - 1 + tabs.length) % tabs.length;
      } else if (e.keyCode === 39) { // Derecha
        index = (index + 1) % tabs.length;
      }
      tabs[index].focus();
      tabs[index].click(); // Activa la pestaña al enfocar con el teclado
    }
  });
});

//NIVEL 2
function comprobarAdivinanza() {
  // 1. Obtener el valor del input del usuario y convertirlo a entero
  const inputElemento = document.getElementById('numero-usuario');
  const numeroUsuario = parseInt(inputElemento.value);

  // Validar que el número esté en el rango 1-9
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 9) {
    mostrarMensaje('Por favor, ingresa un número válido entre 1 y 9.', 'fallo');
    return;
  }

  // 2. Generar un número aleatorio entre 1 y 9
  // Math.random() genera un número entre 0 (inclusive) y 1 (exclusive).
  // Multiplicamos por 9, aplicamos Math.floor() para un entero y sumamos 1 para el rango 1-9.
  const numeroAleatorio = Math.floor(Math.random() * 9) + 1;

  // 3. Comparar el número del usuario con el aleatorio
  if (numeroUsuario === numeroAleatorio) {
    mostrarMensaje(`¡Felicidades! Adivinaste el número (${numeroAleatorio}).`, 'acierto');
  } else {
    mostrarMensaje(`¡Vaya! Fallaste. El número era el ${numeroAleatorio}.`, 'fallo');
  }
}

function mostrarMensaje(mensaje, tipo) {
  const mensajeResultado = document.getElementById('mensaje-resultado');
  mensajeResultado.textContent = mensaje;
  // Limpiar clases anteriores y añadir la clase CSS correspondiente para el color
  mensajeResultado.classList.remove('acierto', 'fallo');
  mensajeResultado.classList.add(tipo);
}
