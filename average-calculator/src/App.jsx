import { useState } from "react";
import NumberFetcher from "./components/NumberFetcher";
import NumberList from "./components/NumberList";
import "./App.css"; // Import the CSS

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const windowSize = 10;

  const handleFetch = (newNumbers) => {
    const uniqueNumbers = [...new Set([...numbers, ...newNumbers])].slice(-windowSize);
    setNumbers(uniqueNumbers);
  };

  return (
    <div className="app-container">
      <h1>Average Calculator</h1>
      <NumberFetcher onFetch={handleFetch} />
      <NumberList numbers={numbers} />
    </div>
  );
};

export default App;
