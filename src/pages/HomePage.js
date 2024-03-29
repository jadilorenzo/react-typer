import React, {useState} from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom'
import localForage from "localforage";
localForage.config()

const HomePage = () => {
  const [redirect, setRedirect] = useState(false)
  const [text, setText] = useState('')
  const [index, setIndex] = useState('')
  const [lessons, setLessons] = useState([])

  const handleLessonSelection = (t, i) => {
    setText(t)
    setIndex(i)
    setRedirect(true)
  }

  React.useEffect(() => {
    localForage.getItem('lessons')
      .then(r => {
        setLessons(r)
        return r
      }).then(console.log)
  }, [])

  if (redirect) {
    return <Redirect to={`/type/${text}/${index}`}/>
  } else {
    return (
      <div className='body'>
        {lessons.map((x, index) => <button key={index} onClick={() => handleLessonSelection(x.text, index)} disabled={x.completed} className={'level'}>{index+1}</button>)}
      </div>
    );
  }
}

export default HomePage
