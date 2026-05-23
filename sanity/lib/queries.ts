import { groq } from 'next-sanity'

// GROQ-queries för Jiyan — används i Next.js server components

// Hämta de senaste artiklarna för startsidan
export const HOMEPAGE_ARTICLES_QUERY = groq`
  *[_type == "article"] | order(publishedAt desc) [0...20] {
    _id,
    headline,
    standfirst,
    kicker,
    kickerColor,
    coverImage,
    publishedAt,
    articleType,
    isPremium,
    featured,
    slug,
    "author": author-> { name, nameKurdi, initials, avatarColor, photo },
    "category": category-> { title, slug, color }
  }
`

// Hämta hjälteartikeln (senaste breaking news eller manuellt vald)
export const HERO_ARTICLE_QUERY = groq`
  *[_type == "article" && articleType in ["breaking", "news"]] | order(publishedAt desc) [0] {
    _id,
    headline,
    standfirst,
    kicker,
    kickerColor,
    coverImage,
    publishedAt,
    slug,
    "author": author-> { name, nameKurdi, photo },
    "category": category-> { title, slug }
  }
`

// Hämta opinionsskribenter
export const OPINION_ARTICLES_QUERY = groq`
  *[_type == "article" && articleType == "opinion"] | order(publishedAt desc) [0...3] {
    _id,
    headline,
    slug,
    "author": author-> { name, nameKurdi, initials, avatarColor, photo }
  }
`

// Hämta artiklar per kategori
export const ARTICLES_BY_CATEGORY_QUERY = groq`
  *[_type == "article" && category->slug.current == $slug] | order(publishedAt desc) [0...$limit] {
    _id,
    headline,
    standfirst,
    kicker,
    coverImage,
    publishedAt,
    slug,
    "author": author-> { name, nameKurdi },
    "category": category-> { title, slug, color }
  }
`

// Hämta alla kategorier (för navigation)
export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(navOrder asc) {
    _id,
    title,
    slug,
    color,
    subcategories
  }
`

// Hämta aktiv utgåva
export const ACTIVE_ISSUE_QUERY = groq`
  *[_type == "issue" && isActive == true][0] {
    _id,
    title,
    date,
    breakingNews,
    "featuredArticle": featuredArticle-> {
      headline, standfirst, coverImage, slug
    }
  }
`

// Hämta en enskild artikel via slug
export const ARTICLE_BY_SLUG_QUERY = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    headline,
    standfirst,
    kicker,
    kickerColor,
    coverImage,
    body,
    publishedAt,
    articleType,
    isPremium,
    tags,
    "author": author-> { name, nameKurdi, bio, photo, initials, avatarColor },
    "category": category-> { title, slug, color, subcategories }
  }
`
