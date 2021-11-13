import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './Flashcard.css'

const Flashcard = ({ question, answer }) => {
  const [questionMode, setQuestionMode] = useState(true)
  return (
    <div className='flashcard'>
      <div className='header'>{questionMode ? 'Question?' : 'Answer:'}</div>
      <div className='content'>{questionMode ? question : answer}</div>
      <div className='footer'>
        {questionMode ? (
          <Button
            variant='danger'
            onClick={() => setQuestionMode(!questionMode)}
          >
            Show the answer
          </Button>
        ) : (
          <Button
            variant='success'
            onClick={() => setQuestionMode(!questionMode)}
          >
            Question was?
          </Button>
        )}
      </div>
    </div>
  )
}

export default Flashcard
