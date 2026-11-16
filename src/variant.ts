import type { Place } from './data/types'
import { COPY_B } from './data/copyB'

export type Variant = 'a' | 'b' | 'c'
export const VARIANT: Variant = (import.meta.env.VITE_VARIANT as Variant) || 'a'
export const VARIANT_LABEL: Record<Variant, string> = { a: 'A · Clean guide', b: "B · The friend's list", c: 'C · Photo and adventure' }

/** Version B uses plainer, friendlier summaries; everything else is shared. */
export const summaryFor = (p: Place) => (VARIANT === 'b' ? COPY_B[p.id] ?? p.summary : p.summary)

export const HOME_COPY = VARIANT === 'b'
  ? {
      eyebrow: 'Encanto · Puerto Rico guide',
      h1: "The list we'd send a friend who's coming to Puerto Rico.",
      lede: (n: number, t: number) => `${n} places you can just go to, and ${t} tours worth booking. Pick what sounds like your trip.`,
      start: 'Good places to start',
      startNote: "If it's your first time, start with one of these. Each one you can visit without booking.",
      needs: 'What are you in the mood for?',
      where: 'Or start from where you are staying',
    }
  : {
      eyebrow: 'Puerto Rico guide · test edition',
      h1: 'Places you can visit on your own, and tours worth booking.',
      lede: (n: number, t: number) => `${n} places across the island, kept separate from ${t} bookable experiences so you always know what is free to walk into and what needs a ticket.`,
      start: 'Good places to start',
      startNote: 'Editorial starting points for a first visit, not a ranking. Each is somewhere you can go without booking.',
      needs: 'Start with what you need',
      where: 'Or start from where you are staying',
    }

export const BLURB_B: Record<string, string> = {
  food: 'Markets, kiosks and old favorites',
  beach: 'Public beaches, from busy to quiet',
  culture: 'Forts, museums and old stories',
  outdoor: 'Rainforest, caves, lighthouses and swimming holes',
  kids: 'Ideas for the whole family (we are still checking each one)',
}
export const blurbFor = (id: string, fallback: string) => (VARIANT === 'b' ? BLURB_B[id] ?? fallback : fallback)

/** Pillar badges from the brand kit. Only three pillars exist, so only three categories get one. */
export const BADGE: Record<string, string | undefined> = { beach: 'brand/ocean.svg', outdoor: 'brand/forest.svg', culture: 'brand/culture.svg' }
