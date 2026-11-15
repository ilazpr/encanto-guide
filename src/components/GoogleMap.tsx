import { useEffect, useRef } from 'react'
import { loadGoogleMaps } from '../lib/googleMaps'
import type { MapProps } from './LeafletMap'

type Marker = google.maps.marker.AdvancedMarkerElement

export function GoogleMap({ places, activeId, onSelect, onHover, visible = true, single, onFail }: MapProps & { onFail: () => void }) {
  const el = useRef<HTMLDivElement>(null)
  const map = useRef<google.maps.Map | null>(null)
  const markers = useRef<Map<string, Marker>>(new Map())
  const ready = useRef(false)

  const sync = () => {
    const m = map.current
    if (!m) return
    markers.current.forEach((mk) => { mk.map = null })
    markers.current.clear()
    places.forEach((p) => {
      const node = document.createElement('div')
      node.className = `pin pin-${p.category}`
      node.innerHTML = '<span></span>'
      const mk = new google.maps.marker.AdvancedMarkerElement({ map: m, position: { lat: p.lat, lng: p.lng }, title: p.name, content: node, gmpClickable: true })
      mk.addListener('click', () => onSelect(p.id))
      node.addEventListener('mouseenter', () => onHover?.(p.id))
      node.addEventListener('mouseleave', () => onHover?.(null))
      markers.current.set(p.id, mk)
    })
    markers.current.forEach((mk, id) => {
      ;(mk.content as HTMLElement).classList.toggle('pin-active', id === activeId)
      mk.zIndex = id === activeId ? 1000 : 0
    })
  }

  const fit = () => {
    const m = map.current
    if (!m || !visible) return
    if (places.length === 1) { m.setCenter({ lat: places[0].lat, lng: places[0].lng }); m.setZoom(12) }
    else if (places.length > 1) {
      const b = new google.maps.LatLngBounds()
      places.forEach((p) => b.extend({ lat: p.lat, lng: p.lng }))
      m.fitBounds(b, 36)
    }
  }

  useEffect(() => {
    let dead = false
    loadGoogleMaps().then(() => {
      if (dead || !el.current) return
      map.current = new google.maps.Map(el.current, {
        center: { lat: 18.2, lng: -66.45 }, zoom: 9, mapId: 'DEMO_MAP_ID', gestureHandling: single ? 'cooperative' : 'greedy',
        mapTypeControl: false, streetViewControl: false, fullscreenControl: false,
      })
      ready.current = true
      sync(); fit()
    }).catch(() => { if (!dead) onFail() })
    return () => { dead = true; markers.current.forEach((mk) => { mk.map = null }); markers.current.clear(); map.current = null }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [single])

  useEffect(() => { if (ready.current) { sync(); fit() } }, [places, activeId, visible]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="map-wrap">
      <div ref={el} className="map" role="region" aria-label={`Map showing ${places.length} ${places.length === 1 ? 'place' : 'places'}`} />
    </div>
  )
}
