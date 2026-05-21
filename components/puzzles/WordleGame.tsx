'use client'

// WordleGame — fungerande mini-Wordle med kurdiska bokstäver
// Hemligt ord: "سەرد" (5 bokstäver i sorani-kurdiska)
// Regler: grön = rätt plats, gul = fel plats, grå = ej med

import { useState, useEffect, useCallback } from 'react'

// Hemligt ord (5 kurdiska bokstäver)
const SECRET_WORD = 'سەرد'

// Vi behöver ett 4-bokstavsord — kurdiska ord med 4 bokstäver
// سەرد = kall (4 bokstäver: س ە ر د)
// Använd "ژیان" = liv (4 bokstäver: ژ ی ا ن)
// Vi kör med ett 4-bokstavsord och anpassar grid
const WORD = 'ژیان'
const WORD_LENGTH = 4
const MAX_GUESSES = 6

// Kurdiska tangentbordsrader (sorani)
const KB_ROWS = [
  ['ق', 'و', 'ە', 'ر', 'ت', 'ی', 'ئ', 'ی', 'ۆ', 'پ'],
  ['ا', 'س', 'د', 'ف', 'گ', 'ه', 'ج', 'ک', 'ل'],
  ['DEL', 'ز', 'خ', 'چ', 'ڤ', 'ب', 'ن', 'م', 'ENTER'],
]

type TileState = 'empty' | 'active' | 'correct' | 'present' | 'absent'

interface Tile {
  letter: string
  state:  TileState
}

type KeyState = 'correct' | 'present' | 'absent' | 'unused'

function getTileColor(state: TileState): string {
  switch (state) {
    case 'correct': return '#15803d'
    case 'present': return '#b45309'
    case 'absent':  return '#6b7280'
    case 'active':  return 'white'
    default:        return 'white'
  }
}

function getTileBorder(state: TileState): string {
  switch (state) {
    case 'correct':
    case 'present':
    case 'absent':  return '2px solid transparent'
    case 'active':  return '2px solid #6b21a8'
    default:        return '2px solid #dcdcdc'
  }
}

function getKeyColor(state: KeyState): { bg: string; color: string } {
  switch (state) {
    case 'correct': return { bg: '#15803d', color: 'white' }
    case 'present': return { bg: '#b45309', color: 'white' }
    case 'absent':  return { bg: '#6b7280', color: 'white' }
    default:        return { bg: '#e5e7eb', color: '#111' }
  }
}

export function WordleGame() {
  const [guesses, setGuesses]   = useState<Tile[][]>(
    Array.from({ length: MAX_GUESSES }, () =>
      Array.from({ length: WORD_LENGTH }, () => ({ letter: '', state: 'empty' as TileState }))
    )
  )
  const [currentRow, setCurrentRow] = useState(0)
  const [currentCol, setCurrentCol] = useState(0)
  const [gameOver, setGameOver]     = useState(false)
  const [won, setWon]               = useState(false)
  const [keyStates, setKeyStates]   = useState<Record<string, KeyState>>({})
  const [shake, setShake]           = useState(false)
  const [message, setMessage]       = useState('')

  const wordLetters = WORD.split('')

  const evaluateGuess = useCallback((letters: string[]): TileState[] => {
    const result: TileState[]  = Array(WORD_LENGTH).fill('absent')
    const remaining: string[]  = [...wordLetters]
    const matched: boolean[]   = Array(WORD_LENGTH).fill(false)

    // Rätt plats
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (letters[i] === wordLetters[i]) {
        result[i]    = 'correct'
        matched[i]   = true
        remaining[i] = ''
      }
    }

    // Fel plats
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (result[i] === 'correct') continue
      const idx = remaining.indexOf(letters[i])
      if (idx !== -1 && !matched[idx]) {
        result[i]     = 'present'
        remaining[idx] = ''
      }
    }

    return result
  }, [wordLetters])

  const submitGuess = useCallback(() => {
    if (currentCol < WORD_LENGTH) {
      setShake(true)
      setMessage('زیاتر پیت داخل بکە')
      setTimeout(() => { setShake(false); setMessage('') }, 600)
      return
    }

    const letters   = guesses[currentRow].map(t => t.letter)
    const states    = evaluateGuess(letters)
    const newGuesses = guesses.map((row, ri) =>
      ri === currentRow
        ? row.map((tile, ci) => ({ ...tile, state: states[ci] }))
        : row
    )
    setGuesses(newGuesses)

    // Uppdatera tangenttillstånd
    const newKeyStates = { ...keyStates }
    letters.forEach((letter, i) => {
      const prev = newKeyStates[letter] ?? 'unused'
      const next = states[i] as KeyState
      if (prev === 'correct') return
      if (prev === 'present' && next !== 'correct') return
      newKeyStates[letter] = next
    })
    setKeyStates(newKeyStates)

    const isWin = states.every(s => s === 'correct')
    if (isWin) {
      setWon(true)
      setGameOver(true)
      setMessage('ئافەرین! دروست بووی! 🎉')
      return
    }

    if (currentRow + 1 >= MAX_GUESSES) {
      setGameOver(true)
      setMessage(`یاری تەواو بوو — وشەکە بوو: ${WORD}`)
      return
    }

    setCurrentRow(r => r + 1)
    setCurrentCol(0)
  }, [currentRow, currentCol, guesses, keyStates, evaluateGuess])

  const handleKey = useCallback((key: string) => {
    if (gameOver) return

    if (key === 'ENTER') {
      submitGuess()
      return
    }

    if (key === 'DEL' || key === 'Backspace') {
      if (currentCol === 0) return
      const newGuesses = guesses.map((row, ri) =>
        ri === currentRow
          ? row.map((tile, ci) =>
              ci === currentCol - 1 ? { letter: '', state: 'empty' as TileState } : tile
            )
          : row
      )
      setGuesses(newGuesses)
      setCurrentCol(c => c - 1)
      return
    }

    if (currentCol >= WORD_LENGTH) return

    // Lägg till bokstav
    const newGuesses = guesses.map((row, ri) =>
      ri === currentRow
        ? row.map((tile, ci) =>
            ci === currentCol ? { letter: key, state: 'active' as TileState } : tile
          )
        : row
    )
    setGuesses(newGuesses)
    setCurrentCol(c => c + 1)
  }, [gameOver, currentRow, currentCol, guesses, submitGuess])

  // Tangentbordslyssnare
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      handleKey(e.key === 'Backspace' ? 'DEL' : e.key === 'Enter' ? 'ENTER' : e.key)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [handleKey])

  const resetGame = () => {
    setGuesses(
      Array.from({ length: MAX_GUESSES }, () =>
        Array.from({ length: WORD_LENGTH }, () => ({ letter: '', state: 'empty' as TileState }))
      )
    )
    setCurrentRow(0)
    setCurrentCol(0)
    setGameOver(false)
    setWon(false)
    setKeyStates({})
    setMessage('')
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      {/* Titel */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3 style={{
          fontSize:   '1.4rem',
          fontWeight: 700,
          color:      '#15803d',
          fontFamily: 'var(--serif)',
        }}>
          وەردڵ
        </h3>
        <p style={{ fontSize: '0.8rem', color: '#767676', marginTop: '4px' }}>
          وشەی {WORD_LENGTH} پیتی کوردی بدۆزەرەوە
        </p>
      </div>

      {/* Meddelande */}
      {message && (
        <div style={{
          textAlign:    'center',
          padding:      '10px',
          marginBottom: '12px',
          background:   won ? '#dcfce7' : '#fef3c7',
          borderRadius: '4px',
          fontSize:     '0.88rem',
          fontWeight:   600,
          color:        won ? '#15803d' : '#92400e',
        }}>
          {message}
        </div>
      )}

      {/* Spelgrid */}
      <div
        style={{
          display:        'flex',
          flexDirection:  'column',
          gap:            '6px',
          marginBottom:   '24px',
          animation:      shake ? 'shake 0.5s ease' : 'none',
        }}
      >
        {guesses.map((row, ri) => (
          <div
            key={ri}
            style={{
              display:               'grid',
              gridTemplateColumns:   `repeat(${WORD_LENGTH}, 1fr)`,
              gap:                   '6px',
            }}
          >
            {row.map((tile, ci) => (
              <div
                key={ci}
                style={{
                  height:         '58px',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontSize:       '1.5rem',
                  fontWeight:     700,
                  fontFamily:     'var(--serif)',
                  border:         getTileBorder(tile.state),
                  background:     getTileColor(tile.state),
                  color:          tile.state === 'empty' || tile.state === 'active' ? '#111' : 'white',
                  borderRadius:   '3px',
                  transition:     'background 0.3s ease',
                  userSelect:     'none',
                }}
              >
                {tile.letter}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Tangentbord */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
        {KB_ROWS.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', gap: '5px', direction: 'ltr' }}>
            {row.map((key) => {
              const state  = keyStates[key] ?? 'unused'
              const colors = getKeyColor(state)
              const isSpecial = key === 'DEL' || key === 'ENTER'

              return (
                <button
                  key={key}
                  onClick={() => handleKey(key)}
                  style={{
                    minWidth:     isSpecial ? '60px' : '38px',
                    height:       '44px',
                    background:   colors.bg,
                    color:        colors.color,
                    border:       'none',
                    borderRadius: '4px',
                    fontSize:     isSpecial ? '0.65rem' : '0.95rem',
                    fontWeight:   600,
                    cursor:       'pointer',
                    fontFamily:   isSpecial ? 'var(--sans)' : 'var(--serif)',
                    transition:   'background 0.15s',
                    padding:      '0 4px',
                  }}
                >
                  {key === 'DEL' ? '⌫' : key === 'ENTER' ? 'ناردن' : key}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {/* Återstart-knapp */}
      {gameOver && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={resetGame}
            style={{
              background:   '#6b21a8',
              color:        'white',
              border:       'none',
              borderRadius: '4px',
              padding:      '10px 28px',
              fontSize:     '0.88rem',
              fontWeight:   700,
              cursor:       'pointer',
              fontFamily:   'var(--sans)',
            }}
          >
            دووبارە یاری بکە
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-6px); }
          40%      { transform: translateX(6px); }
          60%      { transform: translateX(-4px); }
          80%      { transform: translateX(4px); }
        }
      `}</style>
    </div>
  )
}
