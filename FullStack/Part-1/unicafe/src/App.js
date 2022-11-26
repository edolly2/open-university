import { useState } from 'react'

const Statistics = (props) => {

  const AllFeedback = () => {
    let total = (props.good + props.neutral + props.bad);
    return total;
  }

  const AverageFeedback = () => {
    let total = (props.good + props.neutral + props.bad);
    return total;
  }

  return (
    <div>
      <h2>Statistics</h2>
      {props.bad || props.good || props.neutral ? (

        <div>
          <div>Good:</div>
          <div>Neutral:</div>
          <div>Bad:</div>
          <div>Total Feedback: {AllFeedback()}</div>
          <div>Average Feedback:</div>
          <div>Positive Feedback Percent:</div>
        </div>
      ) : (
        <p>No Feedback Given</p>
      )}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  console.log({ good, neutral, bad });


  return (

    <div>
      <div>
        <h2>Give Feedback</h2>
        <div>
          <button onClick={() => {
            setGood(good + 1);
          }}>
            GOOD
          </button>
          <button onClick={() => {
            setNeutral(neutral + 1)
          }}>
            NEUTRAL
          </button>
          <button onClick={() => {
            setBad(bad + 1)
          }}>
            BAD
          </button>
        </div>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />


    </div>

  )
}

export default App