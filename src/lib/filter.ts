import type { Category, Place, RegionId } from '../data/types'

export interface Filters {
  q: string
  cat: Category | ''
  region: RegionId | ''
}

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function inCategory(p: Place, cat: Category) {
  return p.category === cat || !!p.also?.includes(cat)
}

export function filterPlaces(all: Place[], f: Filters): Place[] {
  const q = norm(f.q.trim())
  return all.filter((p) => {
    if (f.cat && !inCategory(p, f.cat)) return false
    if (f.region && p.region !== f.region) return false
    if (q && !norm(`${p.name} ${p.municipality} ${p.summary}`).includes(q)) return false
    return true
  })
}

export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

export const directionsUrl = (p: { lat: number; lng: number }) =>
  `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`
