import { Link } from 'react-router-dom'
import { CATEGORIES, REGIONS } from '../data/types'
import { PLACES } from '../data/places'
import { TOURS } from '../data/tours'

export function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Puerto Rico guide · test edition</p>
        <h1>Places you can visit on your own, and tours worth booking.</h1>
        <p className="lede">{PLACES.length} places across the island, kept separate from {TOURS.length} bookable experiences so you always know what is free to walk into and what needs a ticket.</p>
        <div className="hero-actions">
          <Link className="btn" to="/explore">Open the map</Link>
          <Link className="btn ghost" to="/explore?cat=kids">With children</Link>
          <Link className="btn ghost" to="/book">What can I book?</Link>
        </div>
      </section>
      <section className="band">
        <h2>Start with what you need</h2>
        <ul className="grid cats">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <Link to={`/explore?cat=${c.id}`} className={`tile tile-${c.id}`}>
                <strong>{c.label}</strong>
                <span>{c.blurb}</span>
                <em>{PLACES.filter((p) => p.category === c.id || p.also?.includes(c.id)).length} places</em>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="band alt">
        <h2>Or start from where you are staying</h2>
        <ul className="grid regions">
          {REGIONS.map((r) => (
            <li key={r.id}>
              <Link to={`/explore?region=${r.id}`} className="region">
                <strong>{r.label}</strong>
                <span>{r.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="band split">
        <div>
          <h2>Two kinds of listing</h2>
          <p><span className="tag free">Visit independently</span> A physical place. No booking needed to arrive, though some have entry rules.</p>
          <p><span className="tag paid">Paid tour</span> A guided product sold by a local operator. Booking opens on the operator&rsquo;s FareHarbor page.</p>
        </div>
        <div>
          <h2>About this collection</h2>
          <p>This is a working draft for team review. Selections were researched, not personally endorsed, and are pending Encanto editorial review.</p>
          <Link to="/about">How we chose &rarr;</Link>
        </div>
      </section>
    </>
  )
}
