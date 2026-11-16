import { useSearchParams, Link } from 'react-router-dom'
import { TOURS, FAREHARBOR_TERMS } from '../data/tours'
import { REGIONS, type RegionId } from '../data/types'
import { TourCard } from '../components/TourCard'

export function Book() {
  const [sp, setSp] = useSearchParams()
  const region = (sp.get('region') ?? '') as RegionId | ''
  const theme = sp.get('theme') ?? ''
  const list = TOURS.filter((t) => (!region || t.region === region) && (!theme || t.theme === theme))
  const themes = ['Ocean', 'Forest', 'Old San Juan', 'Culture']
  const set = (r: string, th: string) => setSp({ ...(r ? { region: r } : {}), ...(th ? { theme: th } : {}) }, { replace: true })
  return (
    <section className="page">
      <h1>Bookable experiences</h1>
      <p className="lede">Paid, guided tours from independent operators. Each opens that operator&rsquo;s FareHarbor page, where live prices and dates are shown. Nothing is booked in this guide.</p>
      <div className="chips" role="group" aria-label="Region">
        <button type="button" aria-pressed={!region} onClick={() => set('', theme)}>All regions</button>
        {REGIONS.map((r) => <button key={r.id} type="button" aria-pressed={region === r.id} onClick={() => set(r.id, theme)}>{r.label}</button>)}
      </div>
      <div className="chips" role="group" aria-label="Type of experience">
        <button type="button" aria-pressed={!theme} onClick={() => set(region, '')}>All types</button>
        {themes.map((th) => <button key={th} type="button" aria-pressed={theme === th} onClick={() => set(region, th)}>{th}</button>)}
      </div>
      <p className="status" role="status">{list.length} {list.length === 1 ? 'tour' : 'tours'}</p>
      {list.length ? <ul className="tours">{list.map((t) => <TourCard key={t.id} tour={t} />)}</ul> : <div className="empty"><h2>No tours in this region yet</h2><p>Try another region or type.</p></div>}
      <p className="muted small">Operators set their own terms: <a href={FAREHARBOR_TERMS} target="_blank" rel="noopener">FareHarbor terms</a>. Encanto&rsquo;s full catalog is at <a href="https://www.encantoexperiences.com/puerto-rico-tours">encantoexperiences.com</a>. <Link to="/about#disclosure">Affiliate disclosure</Link>.</p>
    </section>
  )
}
