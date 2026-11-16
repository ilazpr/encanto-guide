import { useEffect, useRef, useState } from 'react'
import type { Place } from '../data/types'
import { MAPS_KEY } from '../lib/googleMaps'
import { Fallback } from './Fallback'
import { asset } from '../lib/track'

interface GPhoto { name: string; widthPx?: number; heightPx?: number; authorAttributions?: { displayName: string; uri?: string }[] }
interface Details { photos?: GPhoto[]; businessStatus?: string }

// Session-only memory cache (no storage): Google content is fetched live and never persisted by us.
const cache = new Map<string, Details | 'none'>()

const STATUS_NOTE: Record<string, string> = {
  CLOSED_TEMPORARILY: 'Google lists this place as temporarily closed. Confirm before you go.',
  CLOSED_PERMANENTLY: 'Google lists this place as permanently closed.',
}

/** Fetches photo + status for one place, with a session-memory cache shared by cards and detail pages. */
export function usePlaceDetails(id: string | undefined, enabled = true) {
  const [d, setD] = useState<Details | 'none' | null>(id ? cache.get(id) ?? null : 'none')
  useEffect(() => {
    if (!enabled) return
    if (!id || !MAPS_KEY) { setD('none'); return }
    const hit = cache.get(id)
    if (hit) { setD(hit); return }
    let dead = false
    fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`, {
      headers: { 'X-Goog-Api-Key': MAPS_KEY, 'X-Goog-FieldMask': 'photos,businessStatus' },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((j: Details) => { cache.set(id, j); if (!dead) setD(j) })
      .catch(() => { if (!dead) setD('none') })
    return () => { dead = true }
  }, [id, enabled])
  return d
}

export function photoSrc(photo: GPhoto, w: number) {
  return `https://places.googleapis.com/v1/${photo.name}/media?maxWidthPx=${w}&key=${encodeURIComponent(MAPS_KEY)}`
}

const CARD_GOOGLE = import.meta.env.VITE_CARD_GOOGLE_PHOTOS !== '0'

/** List-card thumbnail: our own photo first; Google (optional, flag) only once the card scrolls into view. */
export function CardThumb({ place }: { place: Place }) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)
  const [bad, setBad] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || place.photo || !CARD_GOOGLE || !place.googlePlaceId || !MAPS_KEY) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { rootMargin: '100px' })
    io.observe(el)
    return () => io.disconnect()
  }, [place.googlePlaceId])
  const d = usePlaceDetails(place.googlePlaceId, seen && !place.photo && CARD_GOOGLE)
  const photo = d && d !== 'none' ? d.photos?.[0] : undefined
  if (place.photo) return <div className="thumb"><img src={asset(place.photo.thumb ?? place.photo.src)} alt="" loading="lazy" /><span className="thumb-credit">{place.photo.credit.split(' / ')[0]}</span></div>
  return (
    <div ref={ref} className="thumb">
      {photo && !bad
        ? <><img src={photoSrc(photo, 240)} alt="" loading="lazy" onError={() => setBad(true)} /><span className="thumb-credit">{photo.authorAttributions?.[0]?.displayName ?? 'Google Maps'}</span></>
        : <Fallback name={place.name} category={place.category} />}
    </div>
  )
}

/** Detail pages only: one Places API (New) call for the top photo plus current business status. */
export function PlacePhoto({ place }: { place: Place }) {
  const d = usePlaceDetails(place.googlePlaceId)
  const [imgFailed, setImgFailed] = useState(false)

  const photo = d && d !== 'none' ? d.photos?.[0] : undefined
  const status = d && d !== 'none' && d.businessStatus ? STATUS_NOTE[d.businessStatus] : undefined
  const author = photo?.authorAttributions?.[0]

  return (
    <>
      {photo && !imgFailed ? (
        <figure className="gphoto">
          <img src={photoSrc(photo, 900)} alt={`${place.name} (photo from Google Maps)`} loading="lazy" onError={() => setImgFailed(true)} />
          <figcaption>Photo via Google Maps{author ? <> · {author.uri ? <a href={author.uri} target="_blank" rel="noopener">{author.displayName}</a> : author.displayName}</> : null}</figcaption>
        </figure>
      ) : <Fallback name={place.name} category={place.category} big />}
      {status ? <p className="status-note" role="status">{status}</p> : null}
    </>
  )
}
