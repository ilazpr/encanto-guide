import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MAIN_SITE } from '../components/Layout'

export function About() {
  const { hash } = useLocation()
  useEffect(() => { if (hash) document.getElementById(hash.slice(1))?.scrollIntoView() }, [hash])
  return (
    <section className="page narrow prose">
      <h1>About this guide</h1>
      <p>This is a test collection built so the Encanto team can judge the idea before any public launch. It is <strong>pending Encanto editorial review</strong>.</p>
      <h2>How places were chosen</h2>
      <p>Places were selected from public knowledge of well-known Puerto Rico sites across five themes: food and drink, beaches, history and culture, the outdoors, and stops that may work with children. They are researched selections, not personal endorsements by anyone at Encanto, and they have not been visited for this guide. Encanto&rsquo;s curated Google Maps lists were not accessible to the build and were not imported.</p>
      <h2>What is checked, and what is not</h2>
      <ul>
        <li>Coordinates were looked up in OpenStreetMap on 15 November 2026.</li>
        <li>Opening hours, prices, ratings, accessibility and age suitability are <strong>not</strong> shown, because they have not been verified. Check the official source before you go.</li>
        <li>Business status (closed or open) for restaurants has not been verified against Google Places yet.</li>
        <li>No reviews or ratings are shown or invented. Photos are pending until licensed images or the official Google Places photo integration are in place.</li>
      </ul>
      <h2 id="disclosure">Affiliate disclosure</h2>
      <p>Encanto Experiences works with independent local tour operators and may earn a commission on bookings made through links in this guide, at no extra cost to you. Tours are operated and priced by those operators, and booking happens on their FareHarbor pages under their terms. This guide does not take payments or confirm bookings.</p>
      <h2>Places versus tours</h2>
      <p>A <em>place</em> is somewhere you can go on your own. A <em>tour</em> is a paid, guided product. They are stored as separate records and linked only where the connection is clear.</p>
      <p><a className="btn" href={MAIN_SITE}>Back to encantoexperiences.com</a></p>
    </section>
  )
}
