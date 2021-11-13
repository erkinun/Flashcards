import React, { useState } from 'react'

const Flashcard = ({ question, answer }) => {
  const [questionMode, setQuestionMode] = useState(true)
  return (
    <div>
      <div>{questionMode ? 'Question?' : 'Answer:'}</div>
      <div>{questionMode ? question : answer}</div>
      <div onClick={() => setQuestionMode(!questionMode)}>Switch</div>
    </div>
  )
}

export default Flashcard
