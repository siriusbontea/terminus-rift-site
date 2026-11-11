import { useState, type FormEvent } from 'react'
import { site } from '../content/site'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')
  const configured = site.contactEndpoint.length > 0

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!configured) return

    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(site.contactEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`Submit failed (${res.status})`)
      setStatus('ok')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Submit failed')
    }
  }

  if (!configured) {
    return (
      <p className="muted">
        The contact form isn't configured yet. Once the form-handling endpoint
        is set in <code>.env.local</code> as <code>VITE_CONTACT_ENDPOINT</code>,
        this section will accept messages.
      </p>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Your name
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        Email (optional — only if you want a reply)
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" required minLength={10} />
      </label>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
      />
      <div>
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </div>
      {status === 'ok' && (
        <p className="contact-form__status contact-form__status--ok">
          Message sent. Thanks — I'll read it.
        </p>
      )}
      {status === 'error' && (
        <p className="contact-form__status contact-form__status--error">
          {error || 'Something went wrong. Please try again.'}
        </p>
      )}
    </form>
  )
}
