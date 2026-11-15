import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { CATEGORIES, REGIONS, type Category, type RegionId } from '../data/types'
import { PLACES } from '../data/places'
import { distanceKm, filterPlaces } from '../lib/filter'
import { MapView } from '../components/MapView'
import { PlaceCard } from '../components/PlaceCard'

export function Explore() {
  const [sp, setSp] = useSearchParams()
  const nav = useNavigate()
  const q = sp.get('q') ?? ''
  const cat = (sp.get('cat') ?? '') as Category | ''
  const region = (sp.get('region') ?? '') as RegionId | ''
  const view = sp.get('view') === 'map' ? 'map' : 'list'
  const [hover, setHover] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [me, setMe] = useState<{ lat: number; lng: number } | null>(null)
  const [geoMsg, setGeoMsg] = useState('')
  const cards = useRef(new Map<string, HTMLLIElement>())

  const set = (k: string, v: string) => {
    const n = new URLSearchParams(sp)
    if (v) n.set(k, v); else n.delete(k)
    setSp(n, { replace: true })
  }

  const results = useMemo(() => {
    const r = filterPlaces(PLACES, { q, cat, region })
    return me ? [...r].sort((a, b) => distanceKm(me, a) - distanceKm(me, b)) : r
  }, [q, cat, region, me])

  const onSelect = useCallback((id: string) => {
    setSelected(id)
    cards.current.get(id)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    cards.current.get(id)?.querySelector('a')?.focus({ preventScroll: true })
  }, [])

  useEffect(() => { if (selected && !results.some((p) => p.id === selected)) setSelected(null) }, [results, selected])

  const nearMe = () => {
    if (!navigator.geolocation) { setGeoMsg('Location is not available in this browser.'); return }
    setGeoMsg('Finding you…')
    navigator.geolocation.getCurrentPosition(
      (pos) => { setMe({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setGeoMsg('Sorted by distance from you. Location stays in your browser.') },
      () => setGeoMsg('Location permission was declined. Showing the default order.'),
      { timeout: 8000 },
    )
  }
  const clear = () => { setSp({}, { replace: true }); setMe(null); setGeoMsg('') }
  const active = hover ?? selected

  return (
    <div className="explore">
      <section className="filters" aria-label="Search and filters">
        <div className="search-row">
          <label className="sr" htmlFor="q">Search places</label>
          <input id="q" type="search" placeholder="Search places or towns" value={q} onChange={(e) => set('q', e.target.value)} />
          <button type="button" className="btn ghost" onClick={nearMe}>Near me</button>
        </div>
        <div className="chips" role="group" aria-label="Category">
          <button type="button" aria-pressed={!cat} onClick={() => set('cat', '')}>All</button>
          {CATEGORIES.map((c) => <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => set('cat', cat === c.id ? '' : c.id)}>{c.label}</button>)}
        </div>
        <div className="chips" role="group" aria-label="Region">
          <button type="button" aria-pressed={!region} onClick={() => set('region', '')}>Anywhere</button>
          {REGIONS.map((r) => <button key={r.id} type="button" aria-pressed={region === r.id} onClick={() => set('region', region === r.id ? '' : r.id)}>{r.label}</button>)}
        </div>
        <p className="status" role="status" aria-live="polite">{results.length} {results.length === 1 ? 'place' : 'places'}{geoMsg ? ` · ${geoMsg}` : ''}</p>
        {cat === 'kids' ? <p className="note">“With children” lists candidate stops with a stated basis. None has been verified for age suitability yet.</p> : null}
      </section>
      <div className="viewswitch" role="group" aria-label="View">
        <button type="button" aria-pressed={view === 'list'} onClick={() => set('view', '')}>List</button>
        <button type="button" aria-pressed={view === 'map'} onClick={() => set('view', 'map')}>Map</button>
      </div>
      <div className={`split-view view-${view}`}>
        <div className="list-pane">
          {results.length === 0 ? (
            <div className="empty"><h2>No places match</h2><p>Try a different region or clear the search.</p><button type="button" className="btn" onClick={clear}>Clear filters</button></div>
          ) : (
            <ul className="cards">
              {results.map((p) => <PlaceCard key={p.id} place={p} active={active === p.id} onHover={setHover} km={me ? distanceKm(me, p) : undefined} refCb={(el) => { if (el) cards.current.set(p.id, el); else cards.current.delete(p.id) }} />)}
            </ul>
          )}
        </div>
        <div className="map-pane">
          <MapView places={results} activeId={active} onSelect={onSelect} onHover={setHover} visible={view === 'map'} />
          {selected ? (() => { const p = results.find((x) => x.id === selected); return p ? (
            <div className="map-sheet"><strong>{p.name}</strong><span>{p.municipality}</span><button type="button" className="btn small" onClick={() => nav(`/place/${p.id}`)}>View details</button><button type="button" className="x" aria-label="Close" onClick={() => setSelected(null)}>×</button></div>
          ) : null })() : null}
        </div>
      </div>
    </div>
  )
}
