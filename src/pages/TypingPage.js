import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import Typer from '../templates/Typer'
import Timer from '../templates/Timer'
import {useParams} from 'react-router-dom'
import localForage from "localforage"
import lessons from '../lessons'

const HomePage = () => {
  const {str, id} = useParams()
  const [missed, setMissed] = React.useState(0)
  const [finished, setFinished] = React.useState(false)
  const [on, setOn] = React.useState(true)
  const [endTime, setEndTime] = React.useState('')

  const addMissed = () => {
    setMissed(missed + 1)
  }

  const onFinish = () => {
    setFinished(true)
    setOn(false)
  }

  const onEnd = async (time) => {
    setEndTime(`You took ${time} seconds.`)
    let newLessons = []
    await localForage.getItem('lessons')
      .then(result => {
        newLessons = result
        newLessons[id].completed = true
        return result
      }).then(r => console.log('getItem', r))
    await localForage.setItem('lessons', newLessons)
      .then(r => console.log('setItem', r))
  }

  return (
    <div className='body'>
        Missed: {missed}
        <br/>
        {endTime}
        <Typer text={str} onFinish={onFinish} addMissed={addMissed}/>
        <Timer on={on} onEnd={onEnd}/>
        { !finished ? <div/> : <Link to='/'>Next</Link>}
    </div>
  );
}

export default React.memo(HomePage)
