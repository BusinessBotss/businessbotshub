// Router simple para SPA
async function loadPage(page) {
  const content = document.getElementById('content');
  content.innerHTML = '<div class="loading">Cargando...</div>';

  try {
    const res = await fetch(`pages/${page}.html`);
    if (!res.ok) {
      throw new Error(`Error al cargar la página: ${res.status}`);
    }
    const html = await res.text();
    content.innerHTML = html;
    
    // Actualizar navegación activa
    updateActiveNav(page);
  } catch (error) {
    content.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: #e74c3c;">
        <h2>⚠️ Error al cargar la página</h2>
        <p>${error.message}</p>
        <p style="margin-top: 1rem;">
          <a href="#home" style="color: var(--primary-color); text-decoration: underline;">Volver al inicio</a>
        </p>
      </div>
    `;
    console.error('Error loading page:', error);
  }
}

function updateActiveNav(page) {
  // Remover clase active de todos los enlaces
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Agregar clase active al enlace correspondiente
  const activeLink = document.querySelector(`a[href="#${page}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function router() {
  const hash = window.location.hash.replace('#', '');
  const page = hash || 'home';
  loadPage(page);
}

// Cargar página home por defecto
function loadHomePage() {
  const homeHTML = `
    <div class="home-content">
      <h2>🌟 Bienvenido a BusinessBots Hub</h2>
      <p>Centro de herramientas y servicios para tu negocio</p>
      
      <div class="tools-grid">
        <div class="tool-card" onclick="window.location.hash='discountservices'">
          <h3>💳 Discount Services</h3>
          <p>Gestiona tus descuentos y servicios</p>
        </div>
        
        <div class="tool-card" onclick="window.location.hash='expressbudget'">
          <h3>💰 Express Budget</h3>
          <p>Presupuestos rápidos y eficientes</p>
        </div>
        
        <div class="tool-card" onclick="window.location.hash='ticketandfaqs'">
          <h3>🎫 Tickets & FAQs</h3>
          <p>Sistema de tickets y preguntas frecuentes</p>
        </div>
        
        <div class="tool-card" onclick="window.location.hash='businessbotsform'">
          <h3>📝 Form</h3>
          <p>Formularios y encuestas</p>
        </div>
        
        <div class="tool-card" onclick="window.location.hash='businessbotshome'">
          <h3>🏢 BusinessBots Home</h3>
          <p>Página principal de BusinessBots</p>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('content').innerHTML = homeHTML;
  updateActiveNav('home');
}

// Función mejorada del router
function handleRouter() {
  const hash = window.location.hash.replace('#', '');
  
  if (!hash || hash === 'home') {
    loadHomePage();
  } else {
    loadPage(hash);
  }
}

// Event listeners
window.addEventListener('hashchange', handleRouter);
window.addEventListener('load', handleRouter);

// Manejar clics en tarjetas de herramientas
document.addEventListener('click', (e) => {
  if (e.target.closest('.tool-card')) {
    const card = e.target.closest('.tool-card');
    // Ya está manejado por onclick, pero podemos agregar más lógica aquí si es necesario
  }
});

