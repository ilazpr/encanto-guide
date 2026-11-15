import { describe, it, expect } from 'vitest'
import { filterPlaces, distanceKm } from './filter'
import { PLACES } from '../data/places'
import { TOURS } from '../data/tours'

describe('filterPlaces', () => {
  it('combines category and region', () => {
    const r = filterPlaces(PLACES, { q: '', cat: 'beach', region: 'east' })
    expect(r.length).toBeGreaterThan(0)
    expect(r.every((p) => (p.category === 'beach' || p.also?.includes('beach')) && p.region === 'east')).toBe(true)
  })
  it('searches accent-insensitively', () => {
    expect(filterPlaces(PLACES, { q: 'pinones', cat: '', region: '' }).some((p) => p.id === 'pinones')).toBe(true)
  })
  it('returns empty for no match', () => {
    expect(filterPlaces(PLACES, { q: 'zzzz', cat: '', region: '' })).toEqual([])
  })
})
describe('data integrity', () => {
  it('unique ids and valid coords', () => {
    expect(new Set(PLACES.map((p) => p.id)).size).toBe(PLACES.length)
    for (const p of PLACES) {
      expect(p.lat).toBeGreaterThan(17.8); expect(p.lat).toBeLessThan(18.6)
      expect(p.lng).toBeGreaterThan(-67.4); expect(p.lng).toBeLessThan(-65.2)
    }
  })
  it('tours keep affiliate params and reference real places', () => {
    const ids = new Set(PLACES.map((p) => p.id))
    for (const t of TOURS) {
      expect(t.bookingUrl).toContain('asn-ref=encanto')
      expect(t.bookingUrl).toContain('ref=encanto')
      t.placeIds.forEach((id) => expect(ids.has(id)).toBe(true))
    }
  })
  it('distance sanity', () => {
    expect(Math.round(distanceKm({ lat: 18.47, lng: -66.12 }, { lat: 18.0, lng: -66.61 }))).toBeGreaterThan(60)
  })
})
