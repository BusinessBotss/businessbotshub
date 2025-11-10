#!/bin/bash

# Script para preparar archivos para GitHub Pages
# Ejecutar: npm run build-all (desde root)

echo "🔨 Preparando build para GitHub Pages..."

# Crear carpeta docs
mkdir -p docs

# Copiar Hub HTML
echo "📋 Copiando Hub HTML..."
cp index.html docs/
cp -r css docs/
cp -r js docs/
cp -r pages docs/

# Copiar React build si existe
if [ -d "business-bots-react/dist" ]; then
  echo "⚛️  Copiando React build..."
  mkdir -p docs/business-bots-react
  cp -r business-bots-react/dist/* docs/business-bots-react/
else
  echo "⚠️  React build no encontrado. Ejecuta: cd business-bots-react && npm run build"
fi

echo "✅ Build completado en /docs"
echo ""
echo "📊 Contenido de /docs:"
ls -la docs/
