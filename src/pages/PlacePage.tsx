import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { asset, track } from '../lib/track'
import { PLACES } from '../data/places'
import { TOURS, FAREHARBOR_TERMS } from '../data/tours'
import { CATEGORIES, REGIONS } from '../data/types'
import { directionsUrl } from '../lib/filter'
import { PlacePhoto } from '../components/PlacePhoto'
import { SaveButton } from '../components/SaveButton'
import { ShareButton } from '../components/ShareButton'
import { MapView } from '../components/MapView'
import { TourCard } from '../components/TourCard'

export function PlacePage() {
  const { id } = useParams()
  const nav = useNavigate()
  const place = PLACES.find((p) => p.id === id)
  useEffect(() => { if (id) track('place_view', { place_id: id }) }, [id])
  if (!place) return (
    <section className="page narrow"><h1>Place not found</h1><p>That link may be old. <Link to="/explore">Browse all places</Link>.</p></section>
  )
  const cat = CATEGORIES.find((c) => c.id === place.category)!
  const region = REGIONS.find((r) => r.id === place.region)!
  const linked = TOURS.filter((t) => t.placeIds.includes(place.id))
  const nearby = linked.length ? [] : TOURS.filter((t) => t.region === place.region).slice(0, 3)
  const back = () => (window.history.length > 1 ? nav(-1) : nav('/explore'))
  return (
    <article className="page place">
      <button type="button" className="back" onClick={back}>← Back</button>
      <div className="place-head">
        <div className="place-media">
          {place.photo ? <figure><img src={asset(place.photo.src)} alt={`${place.name}`} /><figcaption>Photo: {place.photo.credit}</figcaption></figure> : <PlacePhoto place={place} />}
        </div>
        <div>
          <p className="eyebrow">{cat.label} · {place.municipality} · {region.label}</p>
          <h1>{place.name}</h1>
          <p className="lede">{place.summary}</p>
          <p><span className="tag free">Visit independently</span></p>
          <div className="actions">
            <a className="btn" href={directionsUrl(place)} target="_blank" rel="noopener" onClick={() => track('directions_click', { place_id: place.id })}>Directions ↗</a>
            <SaveButton id={place.id} name={place.name} />
            <ShareButton title={place.name} />
            {place.officialUrl ? <a className="btn ghost" href={place.officialUrl} target="_blank" rel="noopener">Official site ↗</a> : null}
          </div>
        </div>
      </div>
      <div className="place-grid">
        <div>
          <h2>About</h2>
          <p>{place.body}</p>
          {place.kidsBasis ? <><h2>With children</h2><p>{place.kidsBasis} <span className="muted">Candidate only; not verified for age suitability.</span></p></> : null}
          <h2>Practical</h2>
          <ul className="plain">{place.practical.map((t) => <li key={t}>{t}</li>)}{place.practical.length === 0 ? <li>No verified practical details yet.</li> : null}</ul>
          <p className="muted small">Coordinates {place.lat.toFixed(5)}, {place.lng.toFixed(5)} · checked {place.coordsVerified} · Status: pending editorial review</p>
        </div>
        <div className="mini-map"><MapView places={[place]} activeId={place.id} onSelect={() => {}} single /></div>
      </div>
      {(linked.length || nearby.length) ? (
        <section className="bookable">
          <h2>{linked.length ? 'Book a guided visit' : `Tours in ${region.label}`}</h2>
          <p className="muted">{linked.length ? 'Paid tours connected to this place, sold by independent operators.' : 'Not tied to this place, but departing from the same region.'} Prices and availability are shown on the operator&rsquo;s booking page.</p>
          <ul className="tours">{[...linked, ...nearby].map((t) => <TourCard key={t.id} tour={t} />)}</ul>
          <p className="muted small">Booking happens on FareHarbor under the operator&rsquo;s terms: <a href={FAREHARBOR_TERMS} target="_blank" rel="noopener">FareHarbor terms</a>. Encanto may earn a commission. <Link to="/about#disclosure">Disclosure</Link>.</p>
        </section>
      ) : null}
    </article>
  )
}
