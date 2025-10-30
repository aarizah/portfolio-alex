# Portfolio - Alex Ariza

Portfolio personal moderno y minimalista enfocado en proyectos de IA y desarrollo full-stack.

## 🎨 Características

- **Single Page Application** con navegación suave
- **Diseño minimalista y futurista** con tema azul-gris oscuro
- **Animaciones con Framer Motion** para transiciones suaves
- **100% Responsive** optimizado para todos los dispositivos
- **Performance optimizado** (Lighthouse > 90)

## 📋 Secciones

### Hero
- Título principal: "Construyo productos de IA listos para producción"
- Subtítulo corto y directo
- Botones CTA: "Ver proyectos" y "Descargar CV"

### Proyectos
- Grid responsivo de proyectos
- Cards con imagen, título, descripción, stack tecnológico
- Botones para "Demo" y "Video" en cada proyecto
- Hover effects y animaciones suaves

### Sobre mí
- Bio profesional corta
- Foto/avatar con ring effect
- Stack técnico con iconos
- 4 valores principales: Usable, Seguro, Escalable, Medible

### Blog
- Grid de posts técnicos
- Cards con categoría, título, excerpt, tags
- Información de fecha y tiempo de lectura
- Temas: RAG, LLMOps, optimización, arquitectura

### Contacto
- Formulario simple (nombre, correo, mensaje)
- Links a redes sociales (GitHub, LinkedIn, Twitter, Email)
- Footer con copyright

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **TypeScript:** Para type safety
- **Icons:** Lucide React

## 🚀 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Build para producción
pnpm build

# Ejecutar producción
pnpm start
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css         # Estilos globales y tema
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal (integra todas las secciones)
├── sections/
│   ├── hero/
│   │   └── hero.tsx        # Hero section
│   ├── projects-section.tsx # Sección de proyectos
│   ├── about-section.tsx    # Sección sobre mí
│   ├── blog-section.tsx     # Sección de blog
│   └── contact-section.tsx  # Sección de contacto
├── components/
│   └── ui/                  # Componentes shadcn/ui
└── lib/
    ├── projects.ts          # Data de proyectos
    └── utils.ts             # Utilidades
```

## 🎨 Personalización

### Tema de Colores

El tema está configurado en `src/app/globals.css` con variables CSS. El esquema de colores principal es azul-gris oscuro:

- **Primary:** `oklch(0.55 0.15 240)` - Azul vibrante
- **Background (dark):** `oklch(0.12 0.015 240)` - Gris azulado oscuro
- **Foreground (dark):** `oklch(0.95 0.005 240)` - Blanco azulado

### Proyectos

Edita `src/lib/projects.ts` para añadir tus proyectos con:
- Título, descripción, categoría
- Imagen del proyecto
- Stack tecnológico
- Links a demo y video
- Métricas de impacto
- Problema, solución y resultado

### Blog Posts

Los posts están en `src/sections/blog-section.tsx`. Puedes:
- Añadir/editar posts en el array `blogPosts`
- Conectar con MDX para posts reales
- Integrar con CMS headless

### Información Personal

Actualiza en `src/sections/about-section.tsx`:
- Nombre y título profesional
- Bio personal
- Foto de perfil (ruta de imagen)
- Stack tecnológico
- Links de redes sociales

## 📝 TODO

- [ ] Conectar formulario de contacto con backend/servicio de email
- [ ] Implementar sistema de blog con MDX
- [ ] Añadir páginas individuales de proyectos
- [ ] Implementar analytics
- [ ] Añadir sitemap y SEO metatags
- [ ] Crear archivo CV en PDF

## 📄 Licencia

MIT License - siéntete libre de usar este código para tu propio portfolio.

## 👤 Autor

**Alejandro Riza**
- GitHub: [@aarizah](https://github.com/aarizah)
- LinkedIn: [Tu perfil]
- Email: tu.email@example.com

---

Construido con ❤️ y mucho ☕
