import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1>Not found</h1>
      <p className="lede">
        That page doesn't exist. It may have moved, or the link may be wrong.
      </p>
      <p>
        <Link className="back-link" to="/">← Back to home</Link>
      </p>
    </>
  )
}
