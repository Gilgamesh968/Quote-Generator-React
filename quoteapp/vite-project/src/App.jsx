import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const api_key = '3KLI/bFO1WXlhNo+EA/rXg==LlzfqrXWOXdubEzO';
  const getQuote = async () => {
    const response = await fetch(
      'https://api.api-ninjas.com/v1/quotes?category=success',
      {
        headers: {
          'X-Api-Key': api_key,
        },
      }
    );
    const data = await response.json();
    setQuote(data[0].quote);
    setAuthor(data[0].author);
    console.log(data[0]);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <div className='App' id='quote-box'>
      <h1 id='text'>{quote}</h1>
      <h3 id='author'>{author}</h3>
      <button onClick={getQuote} id='new-quote'>
        New Quote
      </button>
      <a target='_blank'
        href={`https://twitter.com/intent/tweet?text=${quote}`}
        id='tweet-quote'
      >
        Tweet
      </a>
    </div>
    </>
  )
}

export default App;
