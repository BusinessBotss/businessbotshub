// Router SPA por hash
const ROUTES = {
  '':                   'home',
  'home':               'home',
  'businessbotshome':   'businessbotshome',
  'discountservices':   'discountservices',
  'expressbudget':      'expressbudget',
  'ticketandfaqs':      'ticketandfaqs',
  'businessbotsform':   'businessbotsform',
};

const HOME_HTML = `
<section class="hero">
  <div style="max-width: 900px;">
    <h1>Bienvenido a BusinessBots Hub</h1>
    <p class="hero-subtitle">Centro unificado de herramientas y servicios para tu negocio</p>
    <a href="#businessbotshome" class="cta-primary">Ir al sitio principal</a>
  </div>
</section>

<section>
  <div class="container">
    <h2 style="text-align: center; margin-bottom: 1rem; color: var(--accent);">Herramientas disponibles</h2>
    <p style="text-align: center; color: var(--muted); margin-bottom: 2rem;">Selecciona una de las opciones para comenzar.</p>
    
    <div class="grid responsive" style="max-width: 900px; margin: 0 auto;">
      <div class="card" style="cursor: pointer;" onclick="window.location.hash='#businessbotshome'">
        <h3>🏠 Sitio Principal</h3>
        <p>Accede a la página principal de BusinessBots.</p>
      </div>
      
      <div class="card" style="cursor: pointer;" onclick="window.location.hash='#discountservices'">
        <h3>💳 Servicios</h3>
        <p>Explora nuestros servicios de descuentos.</p>
      </div>
      
      <div class="card" style="cursor: pointer;" onclick="window.location.hash='#expressbudget'">
        <h3>💰 Presupuesto Express</h3>
        <p>Genera presupuestos rápidos y profesionales.</p>
      </div>
      
      <div class="card" style="cursor: pointer;" onclick="window.location.hash='#ticketandfaqs'">
        <h3>🎫 Soporte & FAQs</h3>
        <p>Gestión de tickets y preguntas frecuentes.</p>
      </div>
      
      <div class="card" style="cursor: pointer;" onclick="window.location.hash='#businessbotsform'">
        <h3>📝 Formulario</h3>
        <p>Solicita información o agendar una consulta.</p>
      </div>
    </div>
  </div>
</section>
`;

/**
 * Cargar un fragmento HTML desde pages/
 */
async function loadPage(page) {
  const content = document.getElementById('content');
  
  if (page === 'home') {
    content.innerHTML = HOME_HTML;
    updateNav('home');
    return;
  }

  content.innerHTML = '<div style="padding: 3rem; text-align: center; color: var(--muted);">Cargando...</div>';

  try {
    const res = await fetch(`pages/${page}.html`, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    
    const html = await res.text();
    content.innerHTML = html;
    updateNav(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    content.innerHTML = `
      <div style="padding: 3rem; text-align: center;">
        <h2 style="color: var(--accent);">⚠️ Error al cargar</h2>
        <p style="color: var(--muted);">No se pudo cargar la página: ${page}</p>
        <a href="#home" class="cta-primary" style="margin-top: 1rem;">Volver al inicio</a>
      </div>
    `;
    console.error('Load error:', err);
  }
}

/**
 * Actualizar navegación activa
 */
function updateNav(page) {
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href').slice(1);
    const isActive = href === page || (page === 'home' && href === 'home');
    a.classList.toggle('active', isActive);
  });
}

/**
 * Router principal
 */
function router() {
  const hash = window.location.hash.slice(1) || '';
  const page = ROUTES[hash] || ROUTES[''];
  loadPage(page);
}

// Event listeners
window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  router();
});


