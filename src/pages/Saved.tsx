import { Link } from 'react-router-dom'
import { PLACES } from '../data/places'
import { useSaved } from '../lib/saved'
import { PlaceCard } from '../components/PlaceCard'

export function Saved() {
  const { ids } = useSaved()
  const list = ids.map((id) => PLACES.find((p) => p.id === id)).filter((p): p is NonNullable<typeof p> => !!p)
  return (
    <section className="page">
      <h1>Saved places</h1>
      <p className="muted">Stored only in this browser. No account, nothing sent to a server.</p>
      {list.length === 0 ? <div className="empty"><h2>Nothing saved yet</h2><p>Use the bookmark on any place to keep it here.</p><Link className="btn" to="/explore">Explore places</Link></div> : <ul className="cards grid-cards">{list.map((p) => <PlaceCard key={p.id} place={p} />)}</ul>}
    </section>
  )
}
