import React, { useState } from 'react'
import { useRouter } from 'next/router'
import style from './FormExample.module.css'

const FormExample = () => {
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()
  const [data, setData] = useState({
    name: '',
    allergies: '',
    date: '',
    rsvp: '',
  })
  const { name, allergies, date, rsvp } = data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsPending(true)
      await fetch(
        'https://v1.nocodeapi.com/joshsiara78032/google_sheets/RWcTAdyDqKAuiwmp?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            [name, allergies, date, rsvp, new Date().toLocaleString()],
          ]),
        }
      )
      router.push('/success')
      setIsPending(false)
      setData({ ...data, name: '', allergies: '', date: '', rsvp: '' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {!isPending && (
        <form className={style.form} onSubmit={handleSubmit}>
          <label className={style.labelForm}>select one</label>
          <div className={style.radio}>
            <input
              type="radio"
              name="rsvp"
              value="yas"
              onChange={handleChange}
              required
            />
              <label className={style.marginRight}>YAS</label> {' '}
            <input
              type="radio"
              name="rsvp"
              value="nah"
              onChange={handleChange}
            />
              <label>NAH</label>
          </div>
          <label className={style.label}>Full Name</label>
          <input
            required
            placeholder="e.g. Sahar Rules"
            className={style.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label className={style.label}>
            Allergies <span className={style.labelSecond}>(optional)</span>
          </label>
          <input
            type="text"
            placeholder="FYI Sahar is allergic to nuts"
            className={style.input}
            name="allergies"
            value={allergies}
            onChange={handleChange}
          />
          <label className={style.label}>
            When Is My Actual Birthday?
            <br />
            <span className={style.labelSecond}>
              Get this wrong and you don&apos;t eat!
            </span>
          </label>
          <input
            required
            placeholder="Hint, it's in January!"
            className={style.input}
            type="text"
            name="date"
            value={date}
            onChange={handleChange}
          />
          <button className={style.submit}>submit</button>
        </form>
      )}
      {isPending && (
        <div className={style.loading}>
          <div className={style.loadingText}>submitting</div>
          <div className={style.loader}>Loading...</div>
        </div>
      )}
    </>
  )
}

export default FormExample
