import { useState } from 'react'
import { MAPS_KEY } from '../lib/googleMaps'
import { GoogleMap } from './GoogleMap'
import { LeafletMap, type MapProps } from './LeafletMap'

/** Google Maps when a key is configured; otherwise (or if Google fails to load) the OpenStreetMap fallback. */
export function MapView(props: MapProps) {
  const [failed, setFailed] = useState(false)
  if (!MAPS_KEY) return <LeafletMap {...props} fallbackNote="Development map (OpenStreetMap). No Google key configured." />
  if (failed) return <LeafletMap {...props} fallbackNote="Google Maps unavailable. Showing OpenStreetMap." />
  return <GoogleMap {...props} onFail={() => setFailed(true)} />
}
