// Minimal FeedbackDisplay component
function FeedbackDisplay({ isCorrect }) {
  if (isCorrect === null) return null
  return (
    <div style={{
      marginTop: 20,
      fontWeight: 600,
      color: isCorrect ? '#388e3c' : '#d32f2f',
      fontSize: 18
    }}>
      {isCorrect ? 'Correct!' : 'Incorrect!'}
    </div>
  )
}

export default FeedbackDisplay
