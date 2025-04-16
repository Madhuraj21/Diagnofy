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
          <div className="explanation-container" style={{padding: '18px 10px 18px 10px', maxWidth: 520, margin: '0 auto'}}>
            <span className="explanation-title" style={{marginBottom: 10, fontSize: '1.18rem'}}>Explanation</span>
            <div className="explanation-section" style={{marginBottom: 8, padding: 0}}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'linear-gradient(90deg, #e0e7ff 60%, #f3f4f6 100%)',
                border: '2px solid #6c63ff',
                borderRadius: 12,
                padding: '12px 16px',
                boxShadow: '0 2px 8px #6c63ff22',
                marginBottom: 0
              }}>
                <span style={{
                  background: '#6c63ff',
                  color: '#fff',
                  borderRadius: 20,
                  padding: '4px 16px',
                  fontWeight: 700,
                  fontFamily: 'Roboto Mono, monospace',
                  fontSize: '1.08em',
                  letterSpacing: '0.01em',
                  minWidth: 70,
                  textAlign: 'center',
                  boxShadow: '0 1px 4px #6c63ff33'
                }}>Correct Option: {scenario.correctAnswerId}</span>
                <span style={{color: '#23262f', fontWeight: 600, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.08em'}}>
                  {scenario.options.find(opt => opt.id === scenario.correctAnswerId)?.text}
                </span>
              </div>
              <div style={{marginTop: 6, marginBottom: 2, color: '#23262f', fontWeight: 500, fontSize: '1.01em'}}>
                {scenario.optionExplanations && scenario.optionExplanations[scenario.correctAnswerId]}
              </div>
              <div style={{marginTop: 6, color: '#23262f', fontSize: '1.01em', background: '#f8fafc', borderRadius: 8, padding: '10px 12px', boxShadow: '0 1px 4px #e0e7ff55'}}>{scenario.mainExplanation || "No explanation provided."}</div>
            </div>
            <div className="explanation-section" style={{marginTop: 8}}>
              <strong style={{marginBottom: 6, display: 'block', color: '#6c63ff', fontSize: '1.04em'}}>Why these options are incorrect?</strong>
              <div style={{display: 'flex', flexDirection: 'column', gap: 4, marginTop: 2}}>
                {scenario.options.filter(opt => opt.id !== scenario.correctAnswerId).map(opt => (
                  <div key={opt.id} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    background: '#23262f',
                    border: '1.5px solid #393c4d',
                    borderRadius: 10,
                    padding: '8px 10px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                    minHeight: 44
                  }}>
                    <span style={{
                      background: '#fbbf24',
                      color: '#23262f',
                      borderRadius: 16,
                      padding: '2px 12px',
                      fontWeight: 700,
                      fontFamily: 'Roboto Mono, monospace',
                      fontSize: '1em',
                      minWidth: 60,
                      textAlign: 'center',
                      marginTop: 2
                    }}>Option {opt.id}</span>
                    <div style={{color: '#fff', fontWeight: 500, fontFamily: 'Montserrat, Arial, sans-serif', lineHeight: 1.5, display: 'flex', flexDirection: 'column'}}>
                      <span style={{fontWeight: 600, marginBottom: 0}}>{opt.text}</span>
                      <span style={{fontWeight: 400, fontSize: '0.98em'}}>{scenario.optionExplanations && scenario.optionExplanations[opt.id]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
