'use client'

// NewsletterCard — prenumerationskort med inline e-postfält
// Varje kort har unik accentfärg som matchar sektionsfärg

import { useState } from 'react'

interface NewsletterCardProps {
  name:         string
  description:  string
  frequency:    string          // هەفتانە | ڕۆژانە
  accentColor:  string          // hex-färg
  subscribers:  string          // t.ex. "١٢٥٠٠ خوێنەر"
  category:     string          // kategorinamn för ikon/märke
}

export function NewsletterCard({
  name,
  description,
  frequency,
  accentColor,
  subscribers,
  category,
}: NewsletterCardProps) {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('تکایە ئیمەیڵێکی دروست بنووسە')
      return
    }
    setLoading(true)
    setError('')
    // Simulera nätverksanrop
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <article
      dir="rtl"
      style={{
        background:   'white',
        border:       '1px solid #e8e8e8',
        borderTop:    `4px solid ${accentColor}`,
        borderRadius: '4px',
        padding:      '28px 24px 24px',
        display:      'flex',
        flexDirection:'column',
        gap:          '14px',
        transition:   'box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Märke + frekvens */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            background:  accentColor,
            color:       'white',
            fontSize:    '0.66rem',
            fontWeight:  700,
            padding:     '3px 10px',
            borderRadius:'2px',
            fontFamily:  'var(--sans)',
            letterSpacing:'0.04em',
          }}
        >
          {category}
        </span>
        <span
          style={{
            fontSize:   '0.72rem',
            color:      '#888',
            fontFamily: 'var(--sans)',
          }}
        >
          {frequency}
        </span>
      </div>

      {/* Namn */}
      <h2
        style={{
          fontSize:   '1.15rem',
          fontWeight: 700,
          color:      '#041f4a',
          margin:     0,
          fontFamily: 'var(--serif)',
          lineHeight: 1.3,
        }}
      >
        {name}
      </h2>

      {/* Beskrivning */}
      <p
        style={{
          fontSize:   '0.875rem',
          color:      '#555',
          lineHeight: 1.65,
          margin:     0,
          fontFamily: 'var(--sans)',
          flexGrow:   1,
        }}
      >
        {description}
      </p>

      {/* Prenumeranter-räknare */}
      <div
        style={{
          fontSize:   '0.78rem',
          color:      accentColor,
          fontWeight: 600,
          fontFamily: 'var(--sans)',
        }}
      >
        ✓ &nbsp;{subscribers}
      </div>

      {/* Prenumerera-formulär */}
      {submitted ? (
        <div
          style={{
            background:   '#f0faf5',
            border:       `1px solid ${accentColor}`,
            borderRadius: '3px',
            padding:      '12px 16px',
            fontSize:     '0.85rem',
            color:        accentColor,
            fontFamily:   'var(--sans)',
            textAlign:    'center',
          }}
        >
          سوپاس! پشتڕاستکردنەوەی بەشداری بۆ ئیمەیڵەکەت نێردرا ✓
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ئیمەیڵەکەت بنووسە..."
              dir="rtl"
              style={{
                flex:         1,
                padding:      '9px 12px',
                border:       '1px solid #ddd',
                borderRadius: '3px',
                fontSize:     '0.83rem',
                fontFamily:   'var(--sans)',
                outline:      'none',
                color:        '#333',
                minWidth:     0,
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                background:   loading ? '#aaa' : accentColor,
                color:        'white',
                border:       'none',
                padding:      '9px 18px',
                borderRadius: '3px',
                fontSize:     '0.83rem',
                fontWeight:   700,
                cursor:       loading ? 'wait' : 'pointer',
                fontFamily:   'var(--sans)',
                whiteSpace:   'nowrap',
                transition:   'background 0.15s',
              }}
            >
              {loading ? '...' : 'بەشداربە'}
            </button>
          </div>
          {error && (
            <p style={{ fontSize: '0.75rem', color: '#c70000', margin: 0, fontFamily: 'var(--sans)' }}>
              {error}
            </p>
          )}
        </form>
      )}
    </article>
  )
}
