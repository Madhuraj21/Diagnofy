// Minimal HintButton component
function HintButton({ onRevealHint, disabled, allRevealed }) {
  return (
    <button
      style={{
        marginTop: 20,
        padding: '8px 18px',
        borderRadius: 8,
        border: 'none',
        background: disabled ? '#b0b0b0' : '#1976d2',
        color: '#fff',
        fontWeight: 500,
        fontSize: 15,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.2s',
        opacity: allRevealed ? 0.7 : 1
      }}
      onClick={onRevealHint}
      disabled={disabled || allRevealed}
    >
      {allRevealed ? 'All Hints Shown' : 'Request Hint'}
    </button>
  )
}

export default HintButton
