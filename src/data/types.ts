export type Category = 'food' | 'beach' | 'culture' | 'outdoor' | 'kids'
export type RegionId = 'san-juan' | 'east' | 'north' | 'south' | 'west'

export const CATEGORIES: { id: Category; label: string; blurb: string }[] = [
  { id: 'food', label: 'Food & drink', blurb: 'Markets, kiosks and long-standing counters' },
  { id: 'beach', label: 'Beaches', blurb: 'Public balnearios and quieter coves' },
  { id: 'culture', label: 'History & culture', blurb: 'Forts, museums and ceremonial sites' },
  { id: 'outdoor', label: 'Outdoors', blurb: 'Rainforest, caves, dry forest, lighthouses' },
  { id: 'kids', label: 'With children', blurb: 'Candidate stops for families, pending review' },
]

export const REGIONS: { id: RegionId; label: string; blurb: string }[] = [
  { id: 'san-juan', label: 'San Juan & metro', blurb: 'Old San Juan, Santurce, Carolina, Piñones' },
  { id: 'east', label: 'East & islands', blurb: 'El Yunque, Luquillo, Fajardo, Culebra, Vieques' },
  { id: 'north', label: 'North coast', blurb: 'Arecibo and Manatí' },
  { id: 'south', label: 'South', blurb: 'Ponce, Patillas, Guánica' },
  { id: 'west', label: 'West', blurb: 'Rincón, Aguadilla, Cabo Rojo, Mayagüez' },
]

/** A physical place anyone can visit independently. Never holds Google content. */
export interface Place {
  id: string
  name: string
  category: Category
  /** Extra categories the place also appears under (e.g. a beach that is also a family candidate). */
  also?: Category[]
  region: RegionId
  municipality: string
  lat: number
  lng: number
  summary: string
  body: string
  /** Factual practical notes only. Anything unverified says "check". */
  practical: string[]
  /** Why this is a candidate for families. Omitted when we have no factual basis. */
  kidsBasis?: string
  officialUrl?: string
  /** Optional Google Place ID for the future official Places integration. */
  googlePlaceId?: string
  photo?: { src: string; credit: string; license: string; sourceUrl: string }
  sources: string[]
  coordsVerified: string
}

/** A paid, bookable product sold through an operator. Separate from places. */
export interface Tour {
  id: string
  title: string
  operatorHandle: string
  operator?: string
  bookingUrl: string
  durationHours?: number
  minAge?: number
  theme: 'Ocean' | 'Forest' | 'Old San Juan' | 'Culture'
  region: RegionId
  startCity?: string
  lat?: number
  lng?: number
  placeIds: string[]
  note?: string
  source: string
}
