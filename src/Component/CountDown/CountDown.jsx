import { use, useEffect, useRef, useState } from "react"

function CountDown() {
  const [target, setTarget] = useState(null);
  const [diff, setDiff] = useState(0);
  const useId = useRef(null);

  function handleSubmit() {
    useId.current = setInterval(() => {
      setDiff(new Date(target) - new Date());
    }, 1000);
  }

  useEffect(() => {
    if(diff <= 0) {
      clearInterval(useId.current);
      setDiff(0);
    }
  }, [diff]);

  const getDays = () => {
     return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  const getHours = () => {
    const hrInMilliSecond = diff % (1000 * 60 * 60 * 24);
    return Math.floor(hrInMilliSecond / (1000 * 60 * 60));
  }
  
  const getMinutes = () => {
    const minInMilliSecond = diff % (1000 * 60 * 60);
    return Math.floor(minInMilliSecond / (1000 * 60));
  }

  const getSeconds = () => {
    const secInMilliSecond = diff % (1000 * 60);
    return Math.floor(secInMilliSecond / 1000);
  }

  return (
    <div className="countdown">
      <h1>CountDown Component</h1>
      <p>This is a placeholder for the CountDown component.</p>
      <div className="countdown-date">
        <input 
          type="datetime-local" id="date-time" 
          onChange={(e) => setTarget((e.target.value))}
        />
        <button id="submit" onClick={handleSubmit}>Start</button>
      </div>

      {diff}
      <div className="countdown-display">
        <ul>
          <li><span id="days">{getDays()} : </span> Days</li>
          <li><span id="hours">{getHours()} :</span> Hours</li>
          <li><span id="minutes">{getMinutes()} :</span> Minutes</li>
          <li><span id="seconds">{getSeconds()} </span> Seconds</li>
        </ul>
      </div>
    </div>
  )
}

export default CountDown