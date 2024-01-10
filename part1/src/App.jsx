import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Statistics = ({ all, average, good }) => {
  const positive = (good / all) * 100;
  return (
    <>
      <h3>all {all}</h3>
      <h3>average {average}</h3>
      <h3>positive {positive}%</h3>
    </>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={() => {
          setGood(good + 1);
          setAll(all + 1);
          setAverage(average + 1);
        }}
        text='good'
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
          setAll(all + 1);
          setAverage(average + 0);
        }}
        text='neutral'
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
          setAll(all + 1);
          setAverage(average - 1);
        }}
        text='bad'
      />

      <h1>statistics</h1>
      <h3>good {good}</h3>
      <h3>neutral {neutral}</h3>
      <h3>bad {bad}</h3>
      <Statistics all={all} average={average} good={good} />
    </div>
  );
};

export default App;
