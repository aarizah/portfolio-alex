# Mist Hero kit

Kit portable: navbar píldora + hero fotográfico + Vanta birds transparentes + frost de copy.

**No es código de esta web.** Corta la carpeta `mist-hero` completa y pégala en el otro proyecto.

## Qué incluye

| Archivo | Rol |
|---|---|
| `assets/hero.png` | Fondo del banner |
| `tokens.css` | Colores y capas |
| `content.ts` | Copy y links (cámbialos ahí) |
| `VantaLoader.tsx` | Three + Vanta por CDN |
| `MistHero.tsx` | Banner |
| `MistNav.tsx` | Nav flotante |
| `MistScene.tsx` | Monta nav + hero juntos |

## Dependencias

Next.js (App Router), Tailwind, `framer-motion`, `lucide-react`, `next/font`, `next/image`, `next/script`.

## Cómo pegarlo

1. Copia `mist-hero/` al otro repo (p. ej. `src/kits/mist-hero/`).
2. Copia `assets/hero.png` a `public/hero.png` del proyecto destino.
3. Importa los tokens en el CSS global:

```css
@import "./ruta/tokens.css";
```

4. En el layout o page:

```tsx
import { MistScene } from "./ruta/MistScene";

export default function Page() {
  return <MistScene />;
}
```

5. Las secciones destino de los CTAs deben existir (`#work`, `#process`, `#contact`, etc.) o edita `content.ts`.

## Receta visual (si lo rearmas a mano)

- Foto full-bleed + `filter: brightness(0.91) contrast(1.1) saturate(1.12)`
- Viñeta oscura en bordes + wash claro más suave sobre el agua
- Vanta BIRDS: `backgroundAlpha: 0`, `colorMode: "lerp"`, `color1: #699C8A`, `color2: #21ac7d`, capa al 28%
- Frost detrás del copy: `rgb(222 232 230 / 0.28)` + `backdrop-blur`
- Nav: `rgba(245,248,247,0.65)` + `blur(16px)` + borde `rgba(20,30,28,0.08)`
- Acento UI: `#3DB496` · superficie grisácea: `#EBEDEC`
