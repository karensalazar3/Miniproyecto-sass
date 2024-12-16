import React, { useState } from 'react'
import './Form.scss'

const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newsData = { title, description }
    console.log(newsData)
  }

  return (
    <div className="form-container">
      <h2>Crear Noticia</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Crear Noticia</button>
      </form>
    </div>
  )
}

export default Form
