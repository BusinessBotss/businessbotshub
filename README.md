# Business Bots Hub 🤖

Centro unificado de aplicaciones y herramientas para Business Bots Solutions.

## 🚀 Versiones

### 1. Hub HTML/Vanilla JS (SPA)
Aplicación de una sola página con arquitectura limpia y router por hash.

**Características:**
- ✅ Router funcional por hash (#home, #tickets, #presupuesto, etc.)
- ✅ Fragmentos HTML inyectados dinámicamente
- ✅ Estilos unificados con paleta profesional
- ✅ Responsive y accesible

**URLs:**
- Local: `http://localhost:8000`
- GitHub Pages: `https://businessbotss.github.io/businessbotshub/`

### 2. React + Vite + Tailwind
Interfaz moderna con componente Galaxy animado.

**Características:**
- ✅ Fondo Galaxy interactivo con Canvas
- ✅ Mouse repulsion y efectos de glow
- ✅ Build optimizado con Vite
- ✅ Tailwind CSS para estilos rápidos

**URLs:**
- Local: `http://localhost:5173`
- GitHub Pages: `https://businessbotss.github.io/businessbotshub/business-bots-react/`

## 📁 Estructura

```
businessbotshub/
├── index.html                 # Hub SPA principal
├── css/styles.css            # Estilos unificados
├── js/app.js                 # Router por hash
├── pages/                    # Fragmentos HTML
│   ├── businessbotshome.html
│   ├── expressbudget.html
│   ├── discountservices.html
│   ├── ticketandfaqs.html
│   └── businessbotsform.html
├── business-bots-react/      # Aplicación React
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Galaxy.jsx
│   │   └── ...
│   └── package.json
├── .github/workflows/
│   └── deploy.yml            # CI/CD para GitHub Pages
└── docs/                     # Build output (GitHub Pages)
```

## 🎨 Paleta de Colores

```css
--bg: #0b0f12                /* Fondo principal */
--surface: #0f1620           /* Tarjetas */
--accent: #00d46a            /* Verde principal */
--accent-2: #00ffa3          /* Verde brillante */
--text: #e6f0ea              /* Texto */
--muted: #9aa6a1             /* Texto secundario */
```

## 🛠️ Instalación Local

### Hub HTML
```bash
# Opción 1: Python
python3 -m http.server 8000
# Abre http://localhost:8000

# Opción 2: Node.js
npx serve .
```

### React
```bash
cd business-bots-react
npm install
npm run dev
# Abre http://localhost:5173
```

## 🚀 Deployment

### GitHub Pages (Automático)

El workflow CI/CD en `.github/workflows/deploy.yml` se ejecuta automáticamente en cada push a `main`.

**Qué hace:**
1. ✅ Construye la app React con Vite
2. ✅ Copia el Hub HTML a `/docs`
3. ✅ Copia la app React a `/docs/business-bots-react`
4. ✅ Despliega automáticamente en GitHub Pages

**Configuración requerida en GitHub:**
1. Ir a Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: /docs
5. Guardar

**URLs finales:**
- Hub: `https://businessbotss.github.io/businessbotshub/`
- React: `https://businessbotss.github.io/businessbotshub/business-bots-react/`

## 📝 Comandos

### Hub HTML
```bash
# Iniciar servidor local
python3 -m http.server 8000

# Build para producción (manual)
mkdir -p docs
cp -r index.html css js pages docs/
```

### React
```bash
cd business-bots-react

# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## 🔧 Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla + React)
- **Build Tools:** Vite, npm
- **Styling:** Tailwind CSS, CSS personalizado
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📄 Licencia

© 2025 Business Bots Solutions — Todos los derechos reservados.

---

¿Preguntas? Contacta a: info@businessbots.hub