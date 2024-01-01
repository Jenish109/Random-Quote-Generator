import React, { useState, useEffect } from "react";
import axios from "axios";
import "./quote.css";

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Even when you think you have your life all mapped out, things happen that shape your destiny in ways you might never have imagined.",
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadQuotes() {
      const response = await axios.get("https://type.fit/api/quotes");
      setQuotes(response.data);
    }

    loadQuotes();
  }, []);

  const getRandomQuote = () => {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selectedQuote);
  };

  const createPost = () => {
    setPosts((prevPosts) => [...prevPosts, quote.text]);
  };

  return (
    <div className="app-container">
      <div className="quote-container">
        <h1>Random Quote Generator</h1>

        <p>{quote.text}</p>

        <div className="btn">
          <button onClick={getRandomQuote}>Get New Quote</button>
          <button onClick={createPost}>Create Post</button>
        </div>
      </div>

      <div className="posts-container">
        <h2>Posts</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>

      <div className="name">-Jenish Vaghasiya</div>
    </div>
  );
};

export default Quote;
