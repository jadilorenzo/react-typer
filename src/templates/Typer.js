import React, { useState } from 'react'


const Typer = (props) => {

    const [word, setWord] = useState('')
    const [position, setPosition] = useState(0)

    const keyEvent = (incomingWord) => {
        const key = incomingWord.charAt(incomingWord.length - 1)
        if (props.text.charAt(position) === key) {
            setWord(word + key)
            setPosition(position + 1)
        } else {
            props.addMissed()
        }
        if (props.text.length === word.length) {
          props.onFinish()
        }
    }

    return (
            <div className='keyboard'>
              <span className='keyboard-input'>{props.text}</span>
              <br/>
              <input autoFocus={true} className='keyboard-input' value={word} onChange={(e) => keyEvent(e.target.value)}/>
            </div>
    )
}

export default Typer
