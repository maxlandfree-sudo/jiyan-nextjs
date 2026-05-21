// BreakingBar — röd breaking news-remsa
// Speglar .breaking-bar i index.html

interface BreakingBarProps {
  text:      string
  linkText?: string
  linkHref?: string
}

export function BreakingBar({ text, linkText, linkHref }: BreakingBarProps) {
  return (
    <div className="jiyan-breaking-bar">
      <div
        style={{
          maxWidth:    'var(--max-width)',
          margin:      '0 auto',
          display:     'flex',
          gap:         '12px',
          alignItems:  'center',
          width:       '100%',
        }}
      >
        {/* "زیندوو" — LIVE-etikett */}
        <span className="jiyan-breaking-label">زیندوو</span>

        <span style={{ fontWeight: 600 }}>{text}</span>

        {linkHref && linkText && (
          <a
            href={linkHref}
            style={{ textDecoration: 'underline', opacity: 0.85 }}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  )
}
