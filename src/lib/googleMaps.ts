// Loads the Google Maps JavaScript API once. The key is a browser key restricted by HTTP referrer and by API
// in Google Cloud; it is read from VITE_GOOGLE_MAPS_API_KEY at build time and is never committed.
export const MAPS_KEY: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ''

let loading: Promise<void> | null = null

export function loadGoogleMaps(): Promise<void> {
  if (!MAPS_KEY) return Promise.reject(new Error('no-key'))
  if (loading) return loading
  loading = new Promise<void>((resolve, reject) => {
    ;(window as unknown as { gm_authFailure?: () => void }).gm_authFailure = () => reject(new Error('auth'))
    ;(window as unknown as { __gmReady?: () => void }).__gmReady = () => {
      Promise.all([google.maps.importLibrary('maps'), google.maps.importLibrary('marker')]).then(() => resolve(), reject)
    }
    const s = document.createElement('script')
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(MAPS_KEY)}&loading=async&v=weekly&callback=__gmReady`
    s.async = true
    s.onerror = () => reject(new Error('load'))
    document.head.appendChild(s)
  })
  loading.catch(() => { loading = null })
  return loading
}
