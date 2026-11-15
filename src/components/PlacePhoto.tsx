import { useEffect, useState } from 'react'
import type { Place } from '../data/types'
import { MAPS_KEY } from '../lib/googleMaps'
import { Fallback } from './Fallback'

interface GPhoto { name: string; widthPx?: number; heightPx?: number; authorAttributions?: { displayName: string; uri?: string }[] }
interface Details { photos?: GPhoto[]; businessStatus?: string }

// Session-only memory cache (no storage): Google content is fetched live and never persisted by us.
const cache = new Map<string, Details | 'none'>()

const STATUS_NOTE: Record<string, string> = {
  CLOSED_TEMPORARILY: 'Google lists this place as temporarily closed. Confirm before you go.',
  CLOSED_PERMANENTLY: 'Google lists this place as permanently closed.',
}

/** Detail pages only: one Places API (New) call for the top photo plus current business status. */
export function PlacePhoto({ place }: { place: Place }) {
  const id = place.googlePlaceId
  const [d, setD] = useState<Details | 'none' | null>(id ? cache.get(id) ?? null : 'none')
  const [imgFailed, setImgFailed] = useState(false)

  useEffect(() => {
    if (!id || !MAPS_KEY || cache.has(id)) { if (!id || !MAPS_KEY) setD('none'); return }
    let dead = false
    fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`, {
      headers: { 'X-Goog-Api-Key': MAPS_KEY, 'X-Goog-FieldMask': 'photos,businessStatus' },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((j: Details) => { cache.set(id, j); if (!dead) setD(j) })
      .catch(() => { if (!dead) setD('none') })
    return () => { dead = true }
  }, [id])

  const photo = d && d !== 'none' ? d.photos?.[0] : undefined
  const status = d && d !== 'none' && d.businessStatus ? STATUS_NOTE[d.businessStatus] : undefined
  const author = photo?.authorAttributions?.[0]

  return (
    <>
      {photo && !imgFailed ? (
        <figure className="gphoto">
          <img src={`https://places.googleapis.com/v1/${photo.name}/media?maxWidthPx=900&key=${encodeURIComponent(MAPS_KEY)}`} alt={`${place.name} (photo from Google Maps)`} loading="lazy" onError={() => setImgFailed(true)} />
          <figcaption>Photo via Google Maps{author ? <> · {author.uri ? <a href={author.uri} target="_blank" rel="noopener">{author.displayName}</a> : author.displayName}</> : null}</figcaption>
        </figure>
      ) : <Fallback name={place.name} category={place.category} big />}
      {status ? <p className="status-note" role="status">{status}</p> : null}
    </>
  )
}
