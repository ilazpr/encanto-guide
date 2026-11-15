import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Place } from '../data/types'

/**
 * DEVELOPMENT MAP: Leaflet + OpenStreetMap tiles.
 * Used when no Google Maps key is configured, or if Google Maps fails to load.
 */
export interface MapProps {
  places: Place[]
  activeId: string | null
  onSelect: (id: string) => void
  onHover?: (id: string | null) => void
  visible?: boolean
  single?: boolean
  fallbackNote?: string
}

export function LeafletMap({ places, activeId, onSelect, onHover, visible = true, single, fallbackNote }: MapProps) {
  const el = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)
  const markers = useRef<Map<string, L.Marker>>(new Map())
  const [tileError, setTileError] = useState(false)

  useEffect(() => {
    if (!el.current || map.current) return
    const m = L.map(el.current, { zoomControl: true, scrollWheelZoom: !single }).setView([18.2, -66.45], 9)
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(m)
    let errs = 0
    tiles.on('tileerror', () => { if (++errs > 3) setTileError(true) })
    tiles.on('tileload', () => { errs = 0; setTileError(false) })
    map.current = m
    return () => { m.remove(); map.current = null; markers.current.clear() }
  }, [single])

  useEffect(() => {
    const m = map.current
    if (!m) return
    markers.current.forEach((mk) => mk.remove())
    markers.current.clear()
    places.forEach((p) => {
      const mk = L.marker([p.lat, p.lng], {
        title: p.name,
        keyboard: true,
        icon: L.divIcon({ className: `pin pin-${p.category}`, html: '<span></span>', iconSize: [26, 26], iconAnchor: [13, 13] }),
      }).addTo(m)
      mk.on('click', () => onSelect(p.id))
      mk.on('mouseover', () => onHover?.(p.id))
      mk.on('mouseout', () => onHover?.(null))
      markers.current.set(p.id, mk)
    })
  }, [places, onSelect, onHover])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      const m = map.current
      if (!m) return
      m.invalidateSize()
      if (places.length === 1) m.setView([places[0].lat, places[0].lng], 12)
      else if (places.length > 1) m.fitBounds(L.latLngBounds(places.map((p) => [p.lat, p.lng] as [number, number])), { padding: [36, 36], maxZoom: 12 })
    }, 80)
    return () => clearTimeout(t)
  }, [places, visible])

  useEffect(() => {
    markers.current.forEach((mk, id) => {
      const node = mk.getElement()
      if (node) node.classList.toggle('pin-active', id === activeId)
      mk.setZIndexOffset(id === activeId ? 1000 : 0)
    })
  }, [activeId, places])

  return (
    <div className="map-wrap">
      <div ref={el} className="map" role="region" aria-label={`Map showing ${places.length} ${places.length === 1 ? 'place' : 'places'}`} />
      <p className="map-badge">{fallbackNote ?? "Development map (OpenStreetMap)."}</p>
      {tileError ? <p className="map-error" role="alert">Map tiles could not load. The list still works.</p> : null}
    </div>
  )
}
