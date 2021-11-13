import React, { useState } from 'react'

const Flashcard = ({ question, answer }) => {
  const [showing, setShowing] = useState(question)
  return (
    <div>
      <div>Question: </div>
      <div>{showing}</div>
      <div>Switch</div>
    </div>
  )
}

export default Flashcard
