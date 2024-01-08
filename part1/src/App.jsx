import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={() => {
          setGood(good + 1);
        }}
        text='good'
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
        text='neutral'
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
        }}
        text='bad'
      />

      <h1>statistics</h1>
      <h3>good {good}</h3>
      <h3>neutral {neutral}</h3>
      <h3>bad {bad}</h3>
    </div>
  );
};

export default App;
