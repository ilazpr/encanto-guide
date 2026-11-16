import type { Tour } from '../data/types'
import { REGIONS } from '../data/types'
import { track } from '../lib/track'

const hrs = (h: number) => (h < 1 ? `${Math.round(h * 60)} min` : `${h} h`)

export function TourCard({ tour }: { tour: Tour }) {
  const region = REGIONS.find((r) => r.id === tour.region)!
  return (
    <li className="tour">
      <div>
        <p className="eyebrow">Paid tour · {tour.theme} · {region.label}</p>
        <h3>{tour.title}</h3>
        <p className="muted small">
          {tour.durationHours ? hrs(tour.durationHours) : 'Duration: see booking page'}
          {tour.minAge !== undefined ? ` · Min. age ${tour.minAge}` : ''}
          {tour.startCity ? ` · Starts in ${tour.startCity}` : ''}
        </p>
        <p className="muted small">
          Operator: {tour.operator ?? 'see booking page'} <span className="handle">(FareHarbor account “{tour.operatorHandle}”)</span>
        </p>
        {tour.note ? <p className="small">{tour.note}</p> : null}
      </div>
      <a className="btn" href={tour.bookingUrl} target="_blank" rel="noopener sponsored" onClick={() => track('book_click', { tour_id: tour.id, operator: tour.operatorHandle })} aria-label={`Check availability for ${tour.title} (opens FareHarbor in a new tab)`}>
        Check availability <span aria-hidden="true">↗</span>
      </a>
    </li>
  )
}
