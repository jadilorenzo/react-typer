import React, { useState } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'


const Typer = (props) => {
    const [word, setWord] = useState('')
    const [position, setPosition] = useState(0)

    const keyEvent = (incomingWord) => {
        const key = incomingWord.charAt(incomingWord.length - 1)
        console.log(key, word);
        if (props.text.charAt(position) === key) {
            setWord(word + key)
            setPosition(position + 1)
        } else {
            props.addMissed()
        }
    }

    return (
            <div className='keyboard'>
              {props.text}
              <br/>
              <input className='keyboard-input' value={word} onChange={(e) => keyEvent(e.target.value)}/>
            </div>
    )
}

export default Typer
