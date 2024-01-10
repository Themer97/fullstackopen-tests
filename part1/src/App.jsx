import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Statistics = ({ all, average, good, text, value }) => {
  const positive = (good / all) * 100;

  return (
    <table>
      <tbody>
        <td>
          {text} {value}
        </td>
        {all === 0 ? (
          <h3>No feedback given</h3>
        ) : (
          good && (
            <>
              <tr>
                <td>all {all}</td>
              </tr>
              <tr>
                <td>average {average}</td>
              </tr>
              <tr>
                <td>positive {positive}%</td>
              </tr>
            </>
          )
        )}
      </tbody>
    </table>
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

      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />

      <h1>statistics</h1>
      <Statistics all={all} average={average} good={good} />
    </div>
  );
};

export default App;
