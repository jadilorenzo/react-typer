import React, { useState } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'


const Typer = (props) => {
  const [word, setWord] = useState('')
  const [position, setPosition] = useState(0)

  const keyEvent = (key) => {
    if (props.text.charAt(position) === key) {
      setWord([...word, key])
      setPosition(position + 1)
    } else {
      props.addMissed()
    }
  }

  return (
    <div className='keyboard'>
      {props.text}/{word}
      <KeyboardEventHandler
        handleKeys={['all']}
        onKeyEvent={(key, e) => keyEvent(key)} />
    </div>
  )
}

export default Typer
