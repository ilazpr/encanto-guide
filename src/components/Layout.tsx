import { NavLink, Outlet, Link } from 'react-router-dom'
import { useSaved } from '../lib/saved'

export const MAIN_SITE = 'https://www.encantoexperiences.com/'

export function Layout() {
  const { ids } = useSaved()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="review-bar" role="note">
        Test collection · pending Encanto editorial review · not a public launch
      </div>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Encanto Puerto Rico guide, home">
          <span className="brand-name">Encanto</span>
          <span className="brand-sub">Puerto Rico guide</span>
        </Link>
        <nav aria-label="Primary">
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/book">Book</NavLink>
          <NavLink to="/saved">Saved{ids.length ? <span className="count" aria-label={`${ids.length} saved`}>{ids.length}</span> : null}</NavLink>
          <NavLink to="/about">About</NavLink>
          <a className="main-link" href={MAIN_SITE}>encantoexperiences.com<span aria-hidden="true"> ↗</span></a>
        </nav>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="site-footer">
        <p>
          Encanto Experiences may earn a commission when you book a tour through links in this guide, at no extra cost to you.{' '}
          <Link to="/about#disclosure">Affiliate disclosure</Link> · <Link to="/about">How places are chosen</Link> · <a href={MAIN_SITE}>Back to encantoexperiences.com</a>
        </p>
        <p className="fine">Map data © OpenStreetMap contributors. Place coordinates from OpenStreetMap (ODbL).</p>
      </footer>
    </>
  )
}
