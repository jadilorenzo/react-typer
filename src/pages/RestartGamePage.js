import React from 'react';
import '../App.css';
import localForage from "localforage"
import lessons from '../lessons'

const RestartGamePage = () => {
  return (
    <div className='body'>
      <button onClick={() => {
        localForage.setItem('lessons', lessons)
      }}>Start Game.</button>
    </div>
  );
}

export default React.memo(RestartGamePage)
