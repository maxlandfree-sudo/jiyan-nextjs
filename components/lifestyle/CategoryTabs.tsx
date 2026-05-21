// CategoryTabs — Ikonrad med 5 livsstilskategorier

interface Category {
  label: string
  icon:  string
  slug:  string
}

interface CategoryTabsProps {
  categories: Category[]
  active?:    string
}

export function CategoryTabs({ categories, active }: CategoryTabsProps) {
  return (
    <div
      style={{
        display:      'flex',
        gap:          '8px',
        overflowX:    'auto',
        scrollbarWidth: 'none',
        padding:      '12px 0 16px',
        marginBottom: '8px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {categories.map((cat) => {
        const isActive = cat.slug === active
        return (
          <a
            key={cat.slug}
            href={`/lifestyle?cat=${cat.slug}`}
            style={{
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              gap:            '6px',
              padding:        '12px 20px',
              borderRadius:   '2px',
              border:         isActive
                ? '2px solid var(--lifestyle)'
                : '2px solid var(--border)',
              background:     isActive ? '#fff5f1' : 'var(--off)',
              textDecoration: 'none',
              color:          isActive ? 'var(--lifestyle)' : 'var(--text)',
              fontWeight:     isActive ? 700 : 400,
              fontSize:       '0.85rem',
              whiteSpace:     'nowrap',
              transition:     'border-color 0.15s, background 0.15s',
              minWidth:       '80px',
            }}
          >
            <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{cat.icon}</span>
            <span>{cat.label}</span>
          </a>
        )
      })}
    </div>
  )
}
