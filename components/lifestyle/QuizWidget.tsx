'use client'

// QuizWidget — Enkel statisk quiz om vilolängd
// "چەند ساتێک ئاسوودەی ڕۆژت پێویستە؟"

import { useState } from 'react'

const ANSWERS = [
  { id: 'a', label: '٦ ساعات یان کەمتر',        result: 'تە ب تە کەمتر خەوت. جەسەدت ئاگا دەدات!' },
  { id: 'b', label: '٧ – ٨ ساعات',               result: 'پەسەندە! ئەمەش ئاستی تەندروستانەیە.' },
  { id: 'c', label: '٩ ساعات یان زیاتر',          result: 'ئایا تازگی تووشی ژووری بووی؟ پشکنینی پزیشکی بکە.' },
]

export function QuizWidget() {
  const [selected, setSelected] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)

  const result = ANSWERS.find((a) => a.id === selected)

  function handleSubmit() {
    if (selected) setAnswered(true)
  }

  function handleReset() {
    setSelected(null)
    setAnswered(false)
  }

  return (
    <div
      style={{
        background:   '#fff5f1',
        border:       '1px solid #f4b8a0',
        borderTop:    '3px solid var(--lifestyle)',
        borderRadius: '2px',
        padding:      '20px',
        marginBottom: '32px',
      }}
    >
      <div
        style={{
          fontSize:     '0.72rem',
          fontWeight:   700,
          color:        'var(--lifestyle)',
          marginBottom: '8px',
          letterSpacing: '0.04em',
        }}
      >
        تاقیکردنەوەی تەندروستی
      </div>
      <h3
        style={{
          fontFamily:   'var(--serif)',
          fontSize:     '1.05rem',
          fontWeight:   700,
          lineHeight:   1.5,
          marginBottom: '16px',
          color:        'var(--text)',
        }}
      >
        چەند ساتێک ئاسوودەی ڕۆژت پێویستە؟
      </h3>

      {!answered ? (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            {ANSWERS.map((answer) => (
              <label
                key={answer.id}
                style={{
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '10px',
                  padding:      '10px 14px',
                  borderRadius: '2px',
                  border:       selected === answer.id
                    ? '2px solid var(--lifestyle)'
                    : '2px solid var(--border)',
                  background:   selected === answer.id ? '#fff' : 'transparent',
                  cursor:       'pointer',
                  fontFamily:   'var(--sans)',
                  fontSize:     '0.9rem',
                  transition:   'border-color 0.15s',
                }}
              >
                <input
                  type="radio"
                  name="quiz"
                  value={answer.id}
                  checked={selected === answer.id}
                  onChange={() => setSelected(answer.id)}
                  style={{ accentColor: 'var(--lifestyle)' }}
                />
                {answer.label}
              </label>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selected}
            style={{
              background:   selected ? 'var(--lifestyle)' : 'var(--border)',
              color:        selected ? '#fff' : 'var(--muted)',
              border:       'none',
              padding:      '10px 20px',
              fontFamily:   'var(--sans)',
              fontWeight:   700,
              fontSize:     '0.88rem',
              borderRadius: '2px',
              cursor:       selected ? 'pointer' : 'not-allowed',
              transition:   'background 0.15s',
            }}
          >
            وەڵامەکەم ببینە
          </button>
        </>
      ) : (
        <div>
          <div
            style={{
              background:   'var(--lifestyle)',
              color:        '#fff',
              padding:      '16px',
              borderRadius: '2px',
              marginBottom: '12px',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>ئەنجامت:</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', lineHeight: 1.6 }}>
              {result?.result}
            </div>
          </div>
          <button
            onClick={handleReset}
            style={{
              background:   'transparent',
              color:        'var(--lifestyle)',
              border:       '2px solid var(--lifestyle)',
              padding:      '8px 16px',
              fontFamily:   'var(--sans)',
              fontWeight:   700,
              fontSize:     '0.82rem',
              borderRadius: '2px',
              cursor:       'pointer',
            }}
          >
            دوبارە تاقیبکەرەوە
          </button>
        </div>
      )}
    </div>
  )
}
