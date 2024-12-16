import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ListNews.scss'

const ListNews = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    axios
      .get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=fashion&api-key=WggQzASxM8Gcx2EHNLtf7oE1AiorKADA'
      )
      .then((response) => {
        setArticles(response.data.response.docs)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loading">Cargando noticias...</div>
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>
  }

  return (
    <div className="list-news">
      <h2>Noticias de Moda</h2>
      <ul>
        {articles.map((article) => (
          <li key={article._id} className="article-item">
            <h3 className="headline">{article.headline.main}</h3>
            <p className="snippet">{article.snippet}</p>
            <a
              href={article.web_url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Leer más
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListNews
