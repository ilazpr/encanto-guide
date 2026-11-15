import { useSearchParams, Link } from 'react-router-dom'
import { TOURS, FAREHARBOR_TERMS } from '../data/tours'
import { REGIONS, type RegionId } from '../data/types'
import { TourCard } from '../components/TourCard'

export function Book() {
  const [sp, setSp] = useSearchParams()
  const region = (sp.get('region') ?? '') as RegionId | ''
  const list = TOURS.filter((t) => !region || t.region === region)
  return (
    <section className="page">
      <h1>Bookable experiences</h1>
      <p className="lede">Paid, guided tours from independent operators. Each opens that operator&rsquo;s FareHarbor page, where live prices and dates are shown. Nothing is booked in this guide.</p>
      <div className="chips" role="group" aria-label="Region">
        <button type="button" aria-pressed={!region} onClick={() => setSp({}, { replace: true })}>All regions</button>
        {REGIONS.map((r) => <button key={r.id} type="button" aria-pressed={region === r.id} onClick={() => setSp({ region: r.id }, { replace: true })}>{r.label}</button>)}
      </div>
      <p className="status" role="status">{list.length} {list.length === 1 ? 'tour' : 'tours'}</p>
      {list.length ? <ul className="tours">{list.map((t) => <TourCard key={t.id} tour={t} />)}</ul> : <div className="empty"><h2>No tours in this region yet</h2><p>This is a small sample of the Encanto catalog.</p></div>}
      <p className="muted small">Operators set their own terms: <a href={FAREHARBOR_TERMS} target="_blank" rel="noopener">FareHarbor terms</a>. This is a sample of Encanto&rsquo;s catalog; see all tours at <a href="https://www.encantoexperiences.com/puerto-rico-tours">encantoexperiences.com</a>. <Link to="/about#disclosure">Affiliate disclosure</Link>.</p>
    </section>
  )
}
