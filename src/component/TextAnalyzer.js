import { useState } from "react";

export const TextAnalyzer = () => {

  const [character, setCharacter] = useState("");
  const [word, setWord] = useState("");

  function handelInput(e) {
    let str = e.target.value;
    let words = str.trim().split(/\s+/).filter(Boolean).length;
    setCharacter(str);
    setWord(words);
  };

  function handleClear() {
    setCharacter("");
    setWord("");
  };

  return (
    <main>
       <h1>Live Word & Character Counter</h1>
       <p>Count words and characters instantly as you type. 100% free.</p>
      <div className="App">
        <textarea name="word" id="text" placeholder='Write or paste' value={character} onChange={(e) => handelInput(e)}></textarea>
        <div className="buttons">
          <button className={character ? "active" : " character-btn"}>Character <span>{character.length}</span></button>
          <button className={character ? "active" : " word-btn"}>Word <span>{!word ? "0" : word}</span></button>
          <button className={!word ? "clear-btn" : "red-active"} onClick={handleClear}>Clear</button>
        </div>
      </div>
    </main>
  );
};
