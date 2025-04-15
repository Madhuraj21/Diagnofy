// Minimal OptionsList component
function OptionsList({ options, selectedOptionId, onSelectOption, disabled }) {
  return (
    <div className="options-list" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {options.map(option => {
        const isSelected = selectedOptionId === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onSelectOption(option.id)}
            disabled={disabled}
            className={isSelected ? 'selected' : ''}
            style={{
              padding: '18px 22px',
              borderRadius: 12,
              border: isSelected ? '2.5px solid #6c63ff' : '1.5px solid #393c4d',
              background: isSelected ? 'linear-gradient(90deg, #6c63ff 0%, #23262f 100%)' : '#23262f',
              color: isSelected ? '#fff' : '#f3f4f6',
              fontWeight: 600,
              fontSize: '1.08rem',
              fontFamily: 'Montserrat, Arial, sans-serif',
              boxShadow: isSelected ? '0 2px 12px rgba(108,99,255,0.13)' : '0 1px 4px rgba(0,0,0,0.07)',
              cursor: disabled ? 'not-allowed' : 'pointer',
              outline: isSelected ? 'none' : undefined,
              transition: 'border 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s',
              letterSpacing: '0.01em',
              marginBottom: 0,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              position: 'relative',
              minHeight: 54
            }}
          >
            <span style={{
              display: 'inline-block',
              minWidth: 32,
              height: 32,
              borderRadius: '50%',
              background: isSelected ? '#fff' : '#393c4d',
              color: isSelected ? '#6c63ff' : '#bdbdbd',
              fontWeight: 700,
              fontSize: '1.08rem',
              fontFamily: 'Roboto Mono, monospace',
              textAlign: 'center',
              lineHeight: '32px',
              marginRight: 10,
              boxShadow: isSelected ? '0 0 0 2px #6c63ff33' : undefined,
              border: isSelected ? '2px solid #6c63ff' : '1.5px solid #393c4d',
              transition: 'background 0.2s, color 0.2s, border 0.2s'
            }}>{option.id}</span>
            <span style={{
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: 600,
              fontSize: '1.08rem',
              color: isSelected ? '#fff' : '#f3f4f6',
              letterSpacing: '0.01em',
              flex: 1
            }}>{option.text}</span>
            {isSelected && (
              <span style={{
                position: 'absolute',
                right: 18,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#fff',
                fontSize: 22,
                fontWeight: 700,
                pointerEvents: 'none',
                textShadow: '0 2px 8px #6c63ff55'
              }}>
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  )
}

export default OptionsList
