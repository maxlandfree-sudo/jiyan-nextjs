// ColumnistGrid — 4-kolumns grid med kolumnistkort
// Guardian commentisfree columnist-sektion, RTL

import { ColumnistCard, type ColumnistData } from './ColumnistCard'

interface ColumnistGridProps {
  columnists: ColumnistData[]
}

export function ColumnistGrid({ columnists }: ColumnistGridProps) {
  return (
    <section className="columnist-grid-section">
      <div className="opinion-section-bar">
        <h2 className="opinion-section-title">ستوونییەکانمان</h2>
        <a href="/opinion/columnists" className="opinion-view-all">هەموو ستوونییەکان &larr;</a>
      </div>

      <div className="columnist-grid">
        {columnists.map((columnist) => (
          <ColumnistCard key={columnist.id} columnist={columnist} />
        ))}
      </div>
    </section>
  )
}
