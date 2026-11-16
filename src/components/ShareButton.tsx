import { useState } from 'react'
import { track } from '../lib/track'

export function ShareButton({ title }: { title: string }) {
  const [done, setDone] = useState(false)
  const share = async () => {
    const url = window.location.href
    track('share_click', { title })
    try {
      if (navigator.share) { await navigator.share({ title, url }); return }
      await navigator.clipboard.writeText(url)
      setDone(true); setTimeout(() => setDone(false), 2000)
    } catch { /* user cancelled or unsupported */ }
  }
  return <button type="button" className="btn ghost" onClick={share}>{done ? 'Link copied' : 'Share'}</button>
}
