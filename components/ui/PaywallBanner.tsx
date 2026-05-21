// PaywallBanner — betalväggsbanner
// Speglar .paywall-banner i index.html

export function PaywallBanner() {
  return (
    <div className="jiyan-paywall-banner">
      <div style={{ fontSize: '1.4rem', flexShrink: 0 }}>🔓</div>
      <div>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '3px' }}>
          ژورنالیزمی سەربەخۆ گرینگە
        </h4>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>
          پشتگیری ڕاپۆرتاژی ئەوروپای ژیان بکە لە کەمترین €١ لە هەفتەیەک.
        </p>
      </div>
      <a
        href="/support"
        style={{
          marginRight:   'auto',
          background:    'var(--blue)',
          color:         'white',
          fontSize:      '0.8rem',
          fontWeight:    700,
          padding:       '8px 16px',
          borderRadius:  '2px',
          whiteSpace:    'nowrap',
          flexShrink:    0,
          textDecoration: 'none',
        }}
      >
        پشتگیریمان بکە
      </a>
    </div>
  )
}
