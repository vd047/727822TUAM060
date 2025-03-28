import { useState } from "react";
import axios from "axios";

const NumberFetcher = ({ onFetch }) => {
  const [type, setType] = useState("p");

  const fetchNumbers = async () => {
    try {
      const res = await axios.get(`http://20.244.56.144/test/numbers/${type}`, {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTQ5NjI1LCJpYXQiOjE3NDMxNDkzMjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImIwMTZkOThhLTU4MGEtNDY1NC05YWU2LTg2YTE0MjFiMjg4NSIsInN1YiI6IjcyNzgyMnR1YW0wNjBAc2tjdC5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImIwMTZkOThhLTU4MGEtNDY1NC05YWU2LTg2YTE0MjFiMjg4NSIsImNsaWVudFNlY3JldCI6IlFLa2liSURRVVFiaXFCalAiLCJvd25lck5hbWUiOiJWaWRoeWEgRGV2aSIsIm93bmVyRW1haWwiOiI3Mjc4MjJ0dWFtMDYwQHNrY3QuZWR1LmluIiwicm9sbE5vIjoiNzI3ODIyVFVBTTA2MCJ9.3KgNIfnKMb77dSEFS2jQ1Vzebnvq_woFSEs-XScGJc4" },
        timeout: 500, // Ignore slow responses
      });
      onFetch(res.data.numbers);
    } catch (err) {
      console.error("Error fetching numbers:", err);
    }
  };

  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
    </div>
  );
};

export default NumberFetcher;
