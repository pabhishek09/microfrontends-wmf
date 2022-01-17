
import React, { useEffect, useState } from 'react';

const Quote = () => {

  const [quote, setQuote] = useState();

  useEffect(async () => {
    const apiUrl = 'https://api.quotable.io/random?tags=technology,famous-quotes';
    const response = await fetch(apiUrl);
    const { content } = await response.json();
    setQuote(content);
  }, []);

  return (
    <div>
      {quote ? quote : 'Loading quote...'}
    </div>
  )
}

export default Quote;
