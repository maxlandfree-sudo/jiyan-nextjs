'use client'

// JoinCTA — "بەشداربە لە ژیان" — CTA-sektion med e-postfält
// Gradient-bakgrund, e-postinput och submit-knapp

import { useState } from 'react'

export function JoinCTA() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setError('تکایە ئیمەیڵێکی دروست داخل بکە')
      return
    }

    // Simulerar registration
    setSubmitted(true)
    setError('')
  }

  return (
    <section
      style={{
        background:  'linear-gradient(135deg, var(--navy) 0%, #005689 100%)',
        padding:     'clamp(40px, 6vw, 72px) 20px',
        marginTop:   '48px',
        textAlign:   'center',
      }}
    >
      <div style={{ maxWidth: '620px', margin: '0 auto' }}>

        {/* Logotyp-accent */}
        <div style={{
          fontSize:     '2.2rem',
          fontWeight:   900,
          color:        'var(--yellow)',
          fontFamily:   'var(--serif)',
          marginBottom: '12px',
          letterSpacing: '-0.5px',
        }}>
          ژیان
        </div>

        {/* Rubrik */}
        <h2 style={{
          fontSize:     'clamp(1.4rem, 4vw, 2rem)',
          fontWeight:   700,
          color:        'white',
          fontFamily:   'var(--serif)',
          marginBottom: '14px',
          lineHeight:   1.3,
        }}>
          بەشداربە لە ژیان
        </h2>

        {/* Undertext */}
        <p style={{
          fontSize:     '0.95rem',
          color:        'rgba(255,255,255,0.75)',
          lineHeight:   1.7,
          marginBottom: '28px',
          maxWidth:     '480px',
          margin:       '0 auto 28px',
        }}>
          هەواڵ، شیکاری و ڕایەکانی تایبەت بۆ ئیمەیڵت بنێرە.
          بەبێ بەها. بەبێ ڕیکلام. تەنها ڕووناکییەکانی ژیان.
        </p>

        {submitted ? (
          /* Bekräftelse */
          <div style={{
            background:   'rgba(255,255,255,0.12)',
            border:       '1px solid rgba(255,255,255,0.25)',
            borderRadius: '6px',
            padding:      '20px 28px',
            color:        'white',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✓</div>
            <p style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>
              سوپاس! ئیمەیڵت تۆمار کرا
            </p>
            <p style={{ fontSize: '0.85rem', opacity: 0.75 }}>
              بەمزووانە ئیمەیڵی پشتڕاستکردنەوە بۆ {email} دەنێردرێت.
            </p>
          </div>
        ) : (
          /* Formulär */
          <form
            onSubmit={handleSubmit}
            style={{
              display:        'flex',
              gap:            '10px',
              maxWidth:       '480px',
              margin:         '0 auto',
              flexWrap:       'wrap',
              justifyContent: 'center',
            }}
          >
            <div style={{ flex: '1 1 260px', position: 'relative' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="ئیمەیڵەکەت بنووسە"
                aria-label="ئیمەیڵ"
                style={{
                  width:        '100%',
                  padding:      '13px 16px',
                  fontSize:     '0.9rem',
                  border:       error ? '2px solid #fca5a5' : '2px solid rgba(255,255,255,0.25)',
                  borderRadius: '4px',
                  background:   'rgba(255,255,255,0.1)',
                  color:        'white',
                  outline:      'none',
                  fontFamily:   'var(--sans)',
                }}
                onFocus={(e) => {
                  if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.6)'
                }}
                onBlur={(e) => {
                  if (!error) e.target.style.borderColor = 'rgba(255,255,255,0.25)'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                flex:         '0 0 auto',
                background:   'var(--yellow)',
                color:        'var(--navy)',
                border:       'none',
                borderRadius: '4px',
                padding:      '13px 28px',
                fontSize:     '0.9rem',
                fontWeight:   800,
                cursor:       'pointer',
                fontFamily:   'var(--sans)',
                whiteSpace:   'nowrap',
                transition:   'opacity 0.15s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'    }}
            >
              بەشداربە ئێستا
            </button>

            {error && (
              <div style={{
                width:      '100%',
                color:      '#fca5a5',
                fontSize:   '0.8rem',
                marginTop:  '-4px',
                textAlign:  'start',
                padding:    '0 4px',
              }}>
                {error}
              </div>
            )}
          </form>
        )}

        {/* Privacy-notering */}
        {!submitted && (
          <p style={{
            fontSize:   '0.72rem',
            color:      'rgba(255,255,255,0.45)',
            marginTop:  '16px',
          }}>
            بە بەشداربوون، ڕازیت بە
            {' '}
            <a href="/privacy" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'underline' }}>سیاسەتی تایبەتی</a>
            {' '}
            ژیان.
          </p>
        )}

      </div>
    </section>
  )
}
