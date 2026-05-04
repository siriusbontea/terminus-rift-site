import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'
import Books from './routes/Books'
import BookDetail from './routes/BookDetail'
import Setting from './routes/Setting'
import Physics from './routes/Physics'
import Changelog from './routes/Changelog'
import About from './routes/About'
import NotFound from './routes/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:slug" element={<BookDetail />} />
        <Route path="setting" element={<Setting />} />
        <Route path="physics" element={<Physics />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
