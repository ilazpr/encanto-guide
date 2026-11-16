// Product analytics hook. Pushes events onto window.dataLayer for Google Tag Manager.
// No GTM container is loaded on this preview yet (it would pollute the main-site GA4 data); when the guide has its
// own domain and GA4 stream, add the GTM snippet to index.html and these events start flowing. No personal data.
type Params = Record<string, string | number | boolean | undefined>
export function track(event: string, params: Params = {}) {
  try {
    const w = window as unknown as { dataLayer?: unknown[] }
    ;(w.dataLayer = w.dataLayer ?? []).push({ event, ...params })
  } catch { /* analytics must never break the page */ }
}
export const asset = (p: string) => (/^(https?:)?\/\//.test(p) ? p : `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`)
