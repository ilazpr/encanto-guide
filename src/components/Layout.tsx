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
          <img className="brand-logo" src={`${import.meta.env.BASE_URL}brand/logo-bosque.svg`} alt="Encanto Experiences" />
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
        <p className="fine">Photos are credited where shown. Photo, listing or fact wrong? <a href="mailto:isaac@encantoexperiences.com?subject=Encanto%20guide%3A%20photo%20or%20listing%20request">Tell us</a> and we will fix or remove it. Maps and photos from Google where shown; place coordinates from OpenStreetMap (ODbL) contributors.</p>
      </footer>
    </>
  )
}
