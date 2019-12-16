import React, {useState} from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom'
import localForage from "localforage";
localForage.config()
let lessons = []

const HomePage = () => {
  const [redirect, setRedirect] = useState(false)
  const [text, setText] = useState('')

  const handleLessonSelection = (t) => {
    setText(t)
    setRedirect(true)
  }

  React.useEffect(() => {
    localForage.getItem('lessons')
      .then(r => {lessons = r})
  }, [])

  if (redirect) {
    return <Redirect to={`/type/${text}`}/>
  } else {
    return (
      <div className='body'>
        {lessons.map(x => <button onClick={() => handleLessonSelection(x.text)} className='lesson'>{x.text}</button>)}
      </div>
    );
  }
}

export default React.memo(HomePage)
