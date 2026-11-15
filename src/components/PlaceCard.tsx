import { Link } from 'react-router-dom'
import type { Place } from '../data/types'
import { CATEGORIES, REGIONS } from '../data/types'
import { Fallback } from './Fallback'
import { SaveButton } from './SaveButton'

export function PlaceCard({ place, active, onHover, km, refCb }: { place: Place; active?: boolean; onHover?: (id: string | null) => void; km?: number; refCb?: (el: HTMLLIElement | null) => void }) {
  const cat = CATEGORIES.find((c) => c.id === place.category)!
  const region = REGIONS.find((r) => r.id === place.region)!
  return (
    <li ref={refCb} className={`card${active ? ' active' : ''}`} onMouseEnter={() => onHover?.(place.id)} onMouseLeave={() => onHover?.(null)} onFocus={() => onHover?.(place.id)} onBlur={() => onHover?.(null)}>
      <Link to={`/place/${place.id}`} className="card-link">
        <div className="card-media">
          {place.photo ? <img src={place.photo.src} alt="" loading="lazy" /> : <Fallback name={place.name} category={place.category} />}
        </div>
        <div className="card-body">
          <p className="eyebrow">{cat.label} · {place.municipality}{km !== undefined ? ` · ${km < 10 ? km.toFixed(1) : Math.round(km)} km away` : ''}</p>
          <h3>{place.name}</h3>
          <p className="summary">{place.summary}</p>
          <p className="meta"><span className="tag free">Visit independently</span> <span className="muted">{region.label}</span></p>
        </div>
      </Link>
      <SaveButton id={place.id} name={place.name} compact />
    </li>
  )
}
