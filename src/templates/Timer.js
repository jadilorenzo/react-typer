import React, { useState } from 'react';
const initialTime = new Date()

const Timer = (props) => {
  const [time, setTime] = useState((props.time === undefined) ? 0 : props.time )


  const secToMin = (time) => {
    let min = 0
    let paddingZero = ''
    let sec = time
    if (time > 60) {
      min = Math.floor(time / 60)
      sec = sec - min*60
    }
    if (sec < 10) {
      paddingZero = '0'
    }
    return `${min}:${paddingZero}${sec}`
  }

  const timeoutID = window.setTimeout(() => {
    setTime((new Date() - initialTime) / 1000)
  }, 1000);

  if (!props.on) {
     window.clearTimeout(timeoutID)
     props.onEnd(secToMin(Math.round(time)))
  }

  return (
    <div className='timer'>{secToMin(Math.round(time))}</div>
  )
}

export default Timer;
