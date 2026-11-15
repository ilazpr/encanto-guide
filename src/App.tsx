import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Explore } from './pages/Explore'
import { PlacePage } from './pages/PlacePage'
import { Book } from './pages/Book'
import { Saved } from './pages/Saved'
import { About } from './pages/About'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// HashRouter keeps shareable URLs working on any static host without server rewrites.
export default function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="place/:id" element={<PlacePage />} />
          <Route path="book" element={<Book />} />
          <Route path="saved" element={<Saved />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<section className="page narrow"><h1>Page not found</h1><p><a href="#/">Go to the guide home</a></p></section>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
