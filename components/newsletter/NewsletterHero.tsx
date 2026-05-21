// NewsletterHero — Hero-banner för nyhetsbrevssidan
// Stor gradient-bakgrund (navy → blå), soranisk kurdiska, RTL

export function NewsletterHero() {
  return (
    <section
      style={{
        background:    'linear-gradient(135deg, #041f4a 0%, #003580 50%, #005689 100%)',
        padding:       '80px 24px',
        textAlign:     'center',
        position:      'relative',
        overflow:      'hidden',
      }}
      dir="rtl"
    >
      {/* Dekorativ bakgrundscirkel */}
      <div
        aria-hidden="true"
        style={{
          position:     'absolute',
          top:          '-80px',
          left:         '50%',
          transform:    'translateX(-50%)',
          width:        '600px',
          height:       '600px',
          borderRadius: '50%',
          background:   'rgba(255,255,255,0.03)',
          pointerEvents:'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
        {/* Märke */}
        <div
          style={{
            display:        'inline-block',
            background:     'rgba(255,255,255,0.12)',
            border:         '1px solid rgba(255,255,255,0.25)',
            color:          'rgba(255,255,255,0.9)',
            fontSize:       '0.72rem',
            letterSpacing:  '0.08em',
            padding:        '4px 14px',
            borderRadius:   '2px',
            marginBottom:   '24px',
            fontFamily:     'var(--sans)',
            textTransform:  'uppercase',
          }}
        >
          نووسراوەی ئەلیکترۆنی
        </div>

        {/* Rubrik */}
        <h1
          style={{
            color:       'white',
            fontSize:    'clamp(2rem, 5vw, 3.2rem)',
            fontWeight:  700,
            lineHeight:  1.15,
            marginBottom:'20px',
            fontFamily:  'var(--serif)',
          }}
        >
          بمانەوە لەگەڵ ژیان
        </h1>

        {/* Undertext */}
        <p
          style={{
            color:       'rgba(255,255,255,0.75)',
            fontSize:    '1.05rem',
            lineHeight:  1.7,
            marginBottom:'0',
            fontFamily:  'var(--sans)',
          }}
        >
          بەخۆڕایی بەشدار بە و نووسراوەکانی ژیان بۆ ئیمەیڵەکەت بگیرەوە.
          <br />
          هەفتانە · بێ تەلار · دەتوانیت هەر کاتێک بیبڕیتەوە
        </p>
      </div>
    </section>
  )
}
