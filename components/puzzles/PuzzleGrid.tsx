// PuzzleGrid — 2×2 grid för spelkort

interface PuzzleGridProps {
  children: React.ReactNode
}

export function PuzzleGrid({ children }: PuzzleGridProps) {
  return (
    <div
      style={{
        display:               'grid',
        gridTemplateColumns:   'repeat(2, 1fr)',
        gap:                   '20px',
      }}
    >
      {children}
    </div>
  )
}
