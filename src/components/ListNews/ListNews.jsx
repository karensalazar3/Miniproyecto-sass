import { useState, useEffect } from 'react';
import axios from 'axios';

function ListNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hacemos la solicitud a la API
    axios
      .get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=fashion&api-key=WggQzASxM8Gcx2EHNLtf7oE1AiorKADA'
      )
      .then((response) => {
        setArticles(response.data.response.docs);  // Guardamos los artículos
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []); // Este efecto se ejecuta una sola vez cuando el componente se monta

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>News List</h2>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h3>{article.headline.main}</h3>
            <p>{article.snippet}</p>
            <a href={article.web_url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListNews;
