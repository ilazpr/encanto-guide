import { Link } from 'react-router-dom'
import { CATEGORIES, REGIONS } from '../data/types'
import { PLACES } from '../data/places'
import { TOURS } from '../data/tours'
import { PlaceCard } from '../components/PlaceCard'
import { asset } from '../lib/track'
import { BADGE, HOME_COPY, blurbFor } from '../variant'

const START_HERE = ['el-morro', 'san-cristobal', 'el-yunque', 'flamenco', 'escambron', 'laguna-grande']

function useCalmVideo() {
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const saver = (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData
  return !reduce && !saver
}

export function Home() {
  const playVideo = useCalmVideo()
  const picks = START_HERE.map((id) => PLACES.find((p) => p.id === id)).filter((p) => !!p)
  return (
    <>
      <section className="hero hero-media">
        <div className="hero-bg" aria-hidden="true">
          {playVideo ? <video src={asset('video/hero.mp4')} poster={asset('video/hero-poster.jpg')} autoPlay muted loop playsInline preload="metadata" /> : <img src={asset('video/hero-poster.jpg')} alt="" />}
        </div>
        <div className="hero-copy">
        <p className="eyebrow">{HOME_COPY.eyebrow}</p>
        <h1>{HOME_COPY.h1}</h1>
        <p className="lede">{HOME_COPY.lede(PLACES.length, TOURS.length)}</p>
        <div className="hero-actions">
          <Link className="btn" to="/explore">Open the map</Link>
          <Link className="btn ghost" to="/explore?cat=kids">With children</Link>
          <Link className="btn ghost" to="/book">What can I book?</Link>
        </div>
        </div>
      </section>
      <section className="band">
        <h2>{HOME_COPY.start}</h2>
        <p className="muted">{HOME_COPY.startNote}</p>
        <ul className="cards start-grid">{picks.map((p) => <PlaceCard key={p!.id} place={p!} />)}</ul>
      </section>
      <section className="band">
        <h2>{HOME_COPY.needs}</h2>
        <ul className="grid cats">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <Link to={`/explore?cat=${c.id}`} className={`tile tile-${c.id}`}>
                {BADGE[c.id] ? <img className="tile-badge" src={asset(BADGE[c.id]!)} alt="" /> : null}
                <strong>{c.label}</strong>
                <span>{blurbFor(c.id, c.blurb)}</span>
                <em>{PLACES.filter((p) => p.category === c.id || p.also?.includes(c.id)).length} places</em>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="band alt">
        <h2>{HOME_COPY.where}</h2>
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
