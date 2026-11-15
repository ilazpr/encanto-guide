import type { Category } from '../data/types'

const TONE: Record<Category, { bg: string; fg: string }> = {
  food: { bg: '#c8573a', fg: '#fbe9df' },
  beach: { bg: '#2f7a86', fg: '#e3f2f2' },
  culture: { bg: '#8a5a2b', fg: '#f6e8d3' },
  outdoor: { bg: '#3e6b4a', fg: '#e5efdf' },
  kids: { bg: '#d09a2a', fg: '#2b2210' },
}

const SKIP = /^(castillo|balneario|playa|faro|parque|museo|bosque|hacienda|centro|plaza|paseo|zool[oó]gico|la|el|de|del|los|las)$/i
function initial(name: string) {
  const w = name.split(/\s+/).find((x) => !SKIP.test(x))
  return (w ?? name).charAt(0).toUpperCase()
}

/** Intentional placeholder shown until a licensed photo is available. Not a photo of the place. */
export function Fallback({ name, category, big }: { name: string; category: Category; big?: boolean }) {
  const t = TONE[category]
  return (
    <div className={`fallback${big ? ' big' : ''}`} style={{ background: t.bg, color: t.fg }} role="img" aria-label={`No photo yet for ${name}`}>
      <span className="fb-mark" aria-hidden="true">{initial(name)}</span>
      <span className="fb-note">Photo pending</span>
    </div>
  )
}
