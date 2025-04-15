import { useState } from 'react'
import scenarios from './data/scenarios'
import './App.css'
import ScenarioDisplay from './components/ScenarioDisplay'
import OptionsList from './components/OptionsList'
import FeedbackDisplay from './components/FeedbackDisplay'
import HintButton from './components/HintButton'

function App() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const scenario = scenarios[currentScenarioIndex]
  const [selectedOptionId, setSelectedOptionId] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [hintsRevealedCount, setHintsRevealedCount] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)

  const handleSubmit = () => {
    if (!selectedOptionId) return
    setIsSubmitted(true)
    setIsCorrect(selectedOptionId === scenario.correctAnswerId)
  }

  const handleRevealHint = () => {
    if (hintsRevealedCount < scenario.hints.length) {
      setHintsRevealedCount(hintsRevealedCount + 1)
    }
  }

  const handleViewExplanation = () => setShowExplanation(true)
  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1)
      setSelectedOptionId(null)
      setIsSubmitted(false)
      setIsCorrect(null)
      setHintsRevealedCount(0)
      setShowExplanation(false)
    } else {
      setGameCompleted(true)
    }
  }

  if (gameCompleted) {
    return (
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fafbfc' }}>
        <main style={{ maxWidth: 480, width: '100%', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.04)', padding: 32, textAlign: 'center' }}>
          <h2 style={{ fontWeight: 600, fontSize: 22, marginBottom: 16 }}>Congratulations!</h2>
          <div style={{ fontSize: 17, color: '#1976d2', marginBottom: 24 }}>
            You have completed all scenarios.<br />Thank you for playing!
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="app-container">
      <main>
        <h2 className="main-heading">Dental Diagnosis Puzzle</h2>
        <div style={{ marginBottom: 24 }}>
          <ScenarioDisplay scenarioText={scenario.scenarioText} />
        </div>
        <OptionsList
          options={scenario.options}
          selectedOptionId={selectedOptionId}
          onSelectOption={isSubmitted ? () => {} : setSelectedOptionId}
          disabled={isSubmitted}
        />
        <HintButton
          onRevealHint={handleRevealHint}
          disabled={isSubmitted}
          allRevealed={hintsRevealedCount >= scenario.hints.length}
        />
        <div style={{ marginTop: 10, minHeight: 24 }}>
          {scenario.hints.slice(0, hintsRevealedCount).map((hint, idx) => (
            <div key={idx} className="hint">Hint {idx + 1}: {hint}</div>
          ))}
        </div>
        <button
          style={{
            marginTop: 24,
            padding: '10px 24px',
            borderRadius: 8,
            border: 'none',
            background: selectedOptionId ? '#6c63ff' : '#31344b',
            color: '#fff',
            fontWeight: 600,
            fontSize: 16,
            cursor: selectedOptionId && !isSubmitted ? 'pointer' : 'not-allowed',
            transition: 'background 0.2s'
          }}
          onClick={handleSubmit}
          disabled={!selectedOptionId || isSubmitted}
        >
          Submit Answer
        </button>
        <div className={isSubmitted ? `feedback animate-feedback${isCorrect ? '' : ' incorrect'}` : 'feedback'}>
          <FeedbackDisplay isCorrect={isCorrect} />
        </div>
        {isSubmitted && (
          <button
            style={{
              marginTop: 24,
              padding: '8px 18px',
              borderRadius: 8,
              border: 'none',
              background: '#388e3c',
              color: '#fff',
              fontWeight: 500,
              fontSize: 15,
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onClick={handleViewExplanation}
            disabled={showExplanation}
          >
            View Explanation
          </button>
        )}
        {showExplanation && (
          <div className="explanation-container">
            <span className="explanation-title">Explanation</span>
            {(() => {
              const [main, rest] = scenario.explanation.split('Rationale:');
              const [rationale, whyIncorrect] = rest ? rest.split('Why other options are incorrect:') : [null, null];
              // Extract the correct answer line for bolding and styling
              let correctLine = null;
              let mainRest = main;
              if (main && main.match(/Correct Answer: \d+\./)) {
                const match = main.match(/(Correct Answer: \d+\. )(.*)/);
                if (match) {
                  correctLine = match[2];
                  mainRest = main.replace(match[0], '');
                }
              }
              return (
                <>
                  {correctLine && (
                    <div style={{
                      fontWeight: 700,
                      fontFamily: 'Montserrat, Arial, sans-serif',
                      fontSize: '1.08rem',
                      color: '#6c63ff',
                      marginBottom: 6,
                      letterSpacing: '0.01em',
                    }}>
                      Correct Option:<br/>
                      <span style={{fontWeight: 800, color: '#23262f', background:'#fbbf24', borderRadius:4, padding:'2px 7px', fontSize:'1.08em'}}>
                        Option {scenario.options.findIndex(opt => opt.text === correctLine) + 1}: {correctLine}
                      </span>
                    </div>
                  )}
                  {mainRest && <div className="explanation-section">{mainRest.trim()}</div>}
                  {rationale && <div className="explanation-section"><strong>Rationale:</strong><br/>{rationale.trim()}</div>}
                  {whyIncorrect && (
                    <div className="explanation-section">
                      <strong style={{color: '#6c63ff'}}>Why these options are incorrect:</strong>
                      <div style={{margin: '10px 0 0 0'}}>
                        {(() => {
                          // Always split by option: look for patterns like Option: Reason
                          const splitOptions = whyIncorrect
                            .split(/(?=[A-Z][^:]*:)/g)
                            .map(s => s.trim())
                            .filter(Boolean);
                          return splitOptions.map((opt, idx) => {
                            const colonIdx = opt.indexOf(':');
                            if (colonIdx > 0) {
                              const label = opt.slice(0, colonIdx+1);
                              const reason = opt.slice(colonIdx+1).trim();
                              return (
                                <div key={idx} className="explanation-option-reason">
                                  <span className="explanation-option-label" style={{color:'#fbbf24', fontWeight:700, fontFamily:'Roboto Mono, monospace', fontSize:'1em', marginRight:6}}>{label}</span>
                                  <span className="explanation-option-text" style={{color:'#e0e0e0', fontWeight:500, fontFamily:'Montserrat, Arial, sans-serif', fontSize:'1em'}}>{reason}</span>
                                </div>
                              );
                            }
                            // If no colon, treat the whole as reason
                            return (
                              <div key={idx} className="explanation-option-reason">
                                <span className="explanation-option-label"></span>
                                <span className="explanation-option-text" style={{color:'#e0e0e0', fontWeight:500, fontFamily:'Montserrat, Arial, sans-serif', fontSize:'1em'}}>{opt}</span>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        )}
        {showExplanation && (
          <button
            style={{
              marginTop: 24,
              padding: '8px 18px',
              borderRadius: 8,
              border: 'none',
              background: '#6c63ff',
              color: '#fff',
              fontWeight: 500,
              fontSize: 15,
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onClick={handleNextScenario}
          >
            Next Scenario
          </button>
        )}
        <div style={{ fontSize: 13, color: '#888', marginTop: 24 }}>Scenario {scenario.id}</div>
      </main>
    </div>
  )
}

export default App
