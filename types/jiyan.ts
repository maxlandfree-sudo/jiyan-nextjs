// TypeScript-typer för Jiyan-tidskriften
// Speglar Sanity-schemas och stöder RTL-språk

// Flerspråkigt textfält
export interface MultiLangText {
  ckb?: string  // Kurdiska sorani (RTL)
  fa?:  string  // Farsi/Persiska (RTL)
  en?:  string  // Engelska (LTR)
}

// Sanity bildtyp
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  alt?: string
}

// Skribent
export interface Author {
  _id:          string
  name:         string
  nameKurdi?:   string
  slug?:        { current: string }
  photo?:       SanityImage
  initials?:    string
  avatarColor?: string
  bio?:         string
  role?:        'journalist' | 'columnist' | 'photographer' | 'editor'
}

// Kategori (t.ex. Europa, Kurdistan, Opinion)
export interface Category {
  _id:             string
  title:           MultiLangText
  slug:            { current: string }
  description?:    string
  color?:          'blue' | 'red' | 'navy' | 'green'
  navOrder?:       number
  subcategories?:  Array<{
    ckb?: string
    fa?:  string
    en?:  string
    slug: string
  }>
}

// Artikel
export interface Article {
  _id:          string
  headline:     MultiLangText
  standfirst?:  MultiLangText
  kicker?:      MultiLangText
  kickerColor?: 'blue' | 'red' | 'navy'
  coverImage?:  SanityImage
  body?:        {
    ckb?: unknown[]  // Portable Text-block
    fa?:  unknown[]
    en?:  unknown[]
  }
  publishedAt?: string
  articleType?: 'news' | 'opinion' | 'analysis' | 'culture' | 'sport' | 'breaking'
  isPremium?:   boolean
  tags?:        string[]
  slug:         { current: string }
  author?:      Author
  category?:    Category
}

// Utgåva
export interface Issue {
  _id:              string
  title:            string
  date:             string
  coverImage?:      SanityImage
  featuredArticle?: Article
  breakingNews?:    MultiLangText
  isActive?:        boolean
}

// Stödd språkkod
export type Locale = 'ckb' | 'fa' | 'en'

// Textens riktning baserat på språk
export const LOCALE_DIR: Record<Locale, 'rtl' | 'ltr'> = {
  ckb: 'rtl',
  fa:  'rtl',
  en:  'ltr',
}

// Rolling strip-kort (Guardian-stil)
export interface StripCard {
  href:     string
  kicker:   string
  title:    string
  titleColor?: 'red' | 'navy' | 'podcast' | 'green'
  image?:   string
  isPodcast?: boolean
}
