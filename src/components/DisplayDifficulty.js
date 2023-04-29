import React from 'react'

const DisplayDifficulty = (props) => {
  return (
    <div className='display'>
        {props.difficulty ? `Difficulty set to : ${props.difficulty}`
        : "No difficulty set"}
    </div>
  );
}

export default DisplayDifficulty;