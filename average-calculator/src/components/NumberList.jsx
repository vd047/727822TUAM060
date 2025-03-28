const NumberList = ({ numbers }) => {
    const avg = numbers.length ? numbers.reduce((a, b) => a + b, 0) / numbers.length : 0;
  
    return (
      <div>
        <h3>Numbers: {numbers.join(", ")}</h3>
        <h4>Average: {avg.toFixed(2)}</h4>
      </div>
    );
  };
  
  export default NumberList;
  