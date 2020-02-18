import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist() // async access to event https://reactjs.org/docs/events.html
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    fetch('https://formspree.io/mrgejkql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: inputs })
    }).then(response => {
      handleServerResponse(
        true,
        'Thanks, your message has been sent.'
      )
    })
      .catch(error => {
        handleServerResponse(
          false,
          'Sorry, we weren\'t able to send your message!'
        )
      })
  }
  return (
    <section className="contact-section">
      <form onSubmit={handleOnSubmit} className="form">
      <h3 className="heading-3">Or a message via the form: </h3>

      <div className="form__form-control">
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          placeholder="you@example.com"
          required
          value={inputs.email}
        />
        </div>
        <div className="form__form-control">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          placeholder="What's on your mind?"
          required
          rows="5"
          value={inputs.message}
        />
        </div>
        <div className="form__form-control">
        <button type="submit" disabled={status.submitting} className="btn btn--primary">
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
        </div>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <div className="msg">{status.info.msg}</div>}

      </form>

    </section>
  )
}
