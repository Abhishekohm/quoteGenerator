import React, { useState } from "react";
const url = "https://game-of-thrones-quotes.herokuapp.com/v1/random"; // api url 

function App() {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState(false);
  const handleClick = async (e) => {
    const tres = await fetch(url);
    // console.log(tres.status);

    const res = await tres.json();
    setQuote(res);
    if (tres.status !== 200) {
      setError(true);
      setQuote(tres);
    } else {
      setQuote(res);
      setError(false);
    }
  };
  return (
    <section>
      {!error ? (
        quote && (
          <div className="quoteCtn">
            <p>"{quote.sentence}"</p>
            <h4>- {quote.character.name}</h4>
          </div>
        )
      ) : (
        <>
          <div className="errorCtn">{quote.statusText}</div>
        </>
      )}
      <section className="btnCtn">
        <button onClick={handleClick}>Get a Quote</button>
      </section>
    </section>
  );
}

export default App;
