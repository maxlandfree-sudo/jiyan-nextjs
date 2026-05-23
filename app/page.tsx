// Jiyan ژیان — Startsida (Server Component)
// ISR: sidan regenereras var 60:e minut i produktion
export const revalidate = 3600
// Speglar index.html med Europa-sektionen som aktiv sektion
// I produktion hämtas data från Sanity CMS via getArticles()

import { Suspense } from 'react'
import { client, isSanityConfigured } from '@/sanity/lib/client'
import { HOMEPAGE_ARTICLES_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { ArticleCardData } from '@/components/articles/ArticleCard'
import { Navigation } from '@/components/layout/Navigation'
import { TopStrip } from '@/components/layout/TopStrip'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { BreakingBar } from '@/components/layout/BreakingBar'
import { RollingStrip } from '@/components/rolling-strip/RollingStrip'
import { HeroSection } from '@/components/articles/HeroSection'
import { CardRow } from '@/components/articles/CardRow'
import { OpinionStrip } from '@/components/articles/OpinionStrip'
import { SectionBlock } from '@/components/articles/SectionBlock'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { Footer } from '@/components/layout/Footer'
import { PaywallBanner } from '@/components/ui/PaywallBanner'
import { JoinCTA }      from '@/components/ui/JoinCTA'
import { NewsBannerGrid } from '@/components/articles/NewsBannerGrid'

// Statiska artikeldata (från index.html) — ersätts med Sanity-queries i produktion
const heroArticle = {
  id:          '1',
  headline:    { ckb: 'سەرۆکانی ئەوروپا گەیشتنە ڕێکەوتنی شکننەوەیەکی ئاگربەست لە بروکسێل' },
  standfirst:  { ckb: 'کۆبوونەوەی فریاگیرانەی یەکێتی ئەوروپا لەسەر گفتوگۆی ئاگربەستی ئۆکراینا لە بروکسێل بەکۆتایی گەیشت' },
  kicker:      { ckb: 'ئەوروپا' },
  kickerColor: 'blue' as const,
  imageUrl:    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
  author:      { name: 'جێنیفەر رانکین', initials: 'JR', avatarColor: '#005689' },
  slug:        { current: 'eu-ceasefire-brussels' },
}

const heroSideArticles = [
  {
    id: '2',
    headline:   { ckb: 'ماکرۆن ڕووبەڕووی گەورەترین سەرکێشی پارلەمانیی دەبێتەوە' },
    kicker:     { ckb: 'فەرەنسا' },
    imageUrl:   'https://images.unsplash.com/photo-1608170825938-a8ea0305e4a8?w=300&h=200&fit=crop',
    slug:       { current: 'macron-parliament-challenge' },
  },
  {
    id: '3',
    headline:   { ckb: 'حیزبی فیدێز کانی ئۆربان ئەکثەریەتی تایبەتی لەدەست دات لە هەڵبژاردنی هەرێمی' },
    kicker:     { ckb: 'مەجارستان' },
    imageUrl:   'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=200&fit=crop',
    slug:       { current: 'fidesz-loses-supermajority' },
  },
]

const cardRowArticles1 = [
  {
    id: '4',
    headline:    { ckb: 'بەستەکانی ئەڵپ گەیشتنە کەمترین ئاستی ٤٠ ساڵ لەکاتێکدا زانستمەندانی سویسرا ئاگاداری دەدات' },
    kicker:      { ckb: 'گەرمابوونی زەوی' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
    author:      { name: 'دامیان کارینگتن' },
    slug:        { current: 'alps-glaciers-40-year-low' },
  },
  {
    id: '5',
    headline:    { ckb: 'ئیتالیا و توونس ڕێکەوتنی کۆچبەریی نوێیان دامەزراند لەکاتێکدا تێپەڕینی سنووری یەکێتی ئەوروپا زیاد دەبێت' },
    kicker:      { ckb: 'کۆچبەری' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    author:      { name: 'لۆرێنزۆ تۆندۆ لە ڕۆم' },
    slug:        { current: 'italy-tunisia-migration-deal' },
  },
  {
    id: '6',
    headline:    { ckb: 'دادگای ڤارشۆ بڕیاری دادا کە ڕەفۆرمەکانی دادوەری حکومەت دژی دەستووری بنەڕەتین' },
    kicker:      { ckb: 'پۆڵەندا' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=200&fit=crop',
    author:      { name: 'شۆن واکەر لە ڤارشۆ' },
    slug:        { current: 'warsaw-court-unconstitutional' },
  },
  {
    id: '7',
    headline:    { ckb: 'یاسای بازاری دیجیتاڵی یەکێتی ئەوروپا ئەپڵ و گووگڵ بەرپرسدار دەکات' },
    kicker:      { ckb: 'تێکنۆلۆجیا' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=300&h=200&fit=crop',
    author:      { name: 'ئالیکس هێرن لە بروکسێل' },
    slug:        { current: 'eu-dma-apple-google' },
  },
]

const opinionArticles = [
  {
    id: 'o1',
    headline:    { ckb: '«کۆبوونەوەکەی یەکێتی ئەوروپا شتێکی بچووک بەدەست هێنا – نیشانیدا کە ٢٧ نەتەوە دەتوانن لەکاتی تاقیکردنی ڕاستیان ڕێکیبکەون»' },
    author:      { name: 'گابی هینسلیف', initials: 'GH', avatarColor: '#005689' },
    slug:        { current: 'eu-summit-27-nations-unity' },
  },
  {
    id: 'o2',
    headline:    { ckb: '«دواچووی دیمۆکراسی لە ئەوروپا ئەوەی نییە کە ئەوەی لازم بێت – بەڵام پەنجەرەکەی گەڕاندنەوەی خێرا داتنگدەبێت»' },
    author:      { name: 'تیمۆتی سنایدەر', initials: 'TS', avatarColor: '#041f4a' },
    slug:        { current: 'democracy-recession-europe' },
  },
  {
    id: 'o3',
    headline:    { ckb: '«تاوانبارکردنی کۆچبەری بۆ کێشەکانی ئابووری ئەوروپا درۆیەکی ئاسانە کە سیاسەتمەداران ترسیان لەوەیە دژی ڕابوەستن»' },
    author:      { name: 'ماریا جیۆرجیۆو', initials: 'MG', avatarColor: '#c70000' },
    slug:        { current: 'migration-blame-economic-lie' },
  },
]

// EU-politik artiklar (section block)
const euPoliticsArticles = [
  {
    id: 'eu1',
    headline:    { ckb: 'فۆن دەر لەیین ستراتیژیی پیشەسازی نوێی فراوانی ئاشکرا کرد پێش ڕاپۆرتی کارایی یەکێتی ئەوروپا' },
    kicker:      { ckb: 'کۆمیسیۆنی ئەوروپایی' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=200&h=136&fit=crop',
    author:      { name: 'جێنیفەر رانکین' },
    publishedAt: '٤ کاتژمێر پێش',
    slug:        { current: 'von-der-leyen-industrial-strategy' },
  },
  {
    id: 'eu2',
    headline:    { ckb: 'ئەندامانی پارلەمان دەنگیان دا بۆ بەهێزکردنی یاسای بەرپرسایەتی زیرەکی دەستکارکراو' },
    kicker:      { ckb: 'پارلەمانی ئەوروپایی' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=136&fit=crop',
    author:      { name: 'دان میلمۆ' },
    publishedAt: '٧ کاتژمێر پێش',
    slug:        { current: 'meps-ai-act-accountability' },
  },
  {
    id: 'eu3',
    headline:    { ckb: 'گفتوگۆی نرخی بەرپرسایەتی یەکێتی ئەوروپا–ئەمریکا دووبارە دەست پێکرد لەدوای شەش مانگ ماندوبوون' },
    kicker:      { ckb: 'بازرگانی' },
    kickerColor: 'blue' as const,
    author:      { name: 'فیلیپ ئینمان' },
    publishedAt: '٩ کاتژمێر پێش',
    slug:        { current: 'eu-us-carbon-tariff-talks' },
  },
  {
    id: 'eu4',
    headline:    { ckb: 'فەرەنسا فەندی بەرگری ئەوروپایی ٣٠٠ ملیار یۆرۆی پێشنیار کرد لەکاتێکدا هاوپەیمانانی ناتۆ لەسەر خەرجی گفتوگۆ دەکەن' },
    kicker:      { ckb: 'بەرگری' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=136&fit=crop',
    author:      { name: 'کیم ویلشەر' },
    publishedAt: '١٠ کاتژمێر پێش',
    slug:        { current: 'france-300bn-defence-fund' },
  },
  {
    id: 'eu5',
    headline:    { ckb: 'مۆڵدۆڤا و گۆرجستان بە فەرمی دەستیان کرد بە گفتوگۆی تازەبووناووی یەکێتی ئەوروپا' },
    kicker:      { ckb: 'فراوانبوون' },
    kickerColor: 'blue' as const,
    author:      { name: 'شۆن واکەر' },
    publishedAt: '١٢ کاتژمێر پێش',
    slug:        { current: 'moldova-georgia-eu-accession' },
  },
  {
    id: 'eu6',
    headline:    { ckb: 'بانکی ناوەندی ئەوروپا ڕێژەی سوودەکانی لە ٣.٢٥٪ راگرت بەرامبەر ئامارە جیاوازەکانی پەلەی نرخ' },
    kicker:      { ckb: 'ئابووری' },
    kickerColor: 'blue' as const,
    author:      { name: 'هیدەر ستیوارت' },
    publishedAt: '١٤ کاتژمێر پێش',
    slug:        { current: 'ecb-rates-hold-3-25' },
  },
]

// Ukraina-artiklar
const ukraineArticles = [
  {
    id: 'uk1',
    headline:    { ckb: 'هێزەکانی ڕووسیا هێرشی نوێیان لە شەوەکە کردە سەر هەرێمی خارکیڤ لەکاتێکدا گفتوگۆی ئاگربەست شکستیهێنا' },
    kicker:      { ckb: 'شەڕ' },
    kickerColor: 'red' as const,
    imageUrl:    'https://images.unsplash.com/photo-1617419248628-ba3e62b26e89?w=200&h=136&fit=crop',
    author:      { name: 'لووک هاردینگ' },
    publishedAt: '١ کاتژمێر پێش',
    slug:        { current: 'russia-kharkiv-attack-ceasefire-fail' },
  },
  {
    id: 'uk2',
    headline:    { ckb: 'نووسێنەری ئەمریکا گەیشتە کیێڤ لەگەڵ پێشنیارێکی نوێی پشتیوانی ئەمنیەتی بەرامبەر گۆڕانکاری سیاسەتی کاخی سپی' },
    kicker:      { ckb: 'دیپلۆماسی' },
    kickerColor: 'red' as const,
    author:      { name: 'پیتەر بیومۆنت' },
    publishedAt: '٣ کاتژمێر پێش',
    slug:        { current: 'us-envoy-kyiv-security-guarantee' },
  },
  {
    id: 'uk3',
    headline:    { ckb: 'داماڵینەوەی ئۆکراینا: چۆن کۆمپانیاکانی ئەوروپایی سەرنج دەکەنەوە بۆ گرێبەستەکانی بەهایان ملیاردانە' },
    kicker:      { ckb: 'داماڵینەوە' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=136&fit=crop',
    author:      { name: 'ڕۆمان ڤان دێر ئاۆوێرا' },
    publishedAt: '٥ کاتژمێر پێش',
    slug:        { current: 'ukraine-reconstruction-contracts' },
  },
  {
    id: 'uk4',
    headline:    { ckb: 'یەک میلیۆن پەنابەری ئۆکراینی ئامادەیی ماندنی هەمیشەیی لە یەکێتی ئەوروپا ئاشکرا دەکاتەوە لە توێژینەوەیەکی نوێدا' },
    kicker:      { ckb: 'پەنابەران' },
    kickerColor: 'blue' as const,
    author:      { name: 'جۆن هێنلی' },
    publishedAt: '٨ کاتژمێر پێش',
    slug:        { current: 'ukraine-refugees-permanent-eu' },
  },
]

// ئاووهەوا و ژینگە
const climateArticles = [
  {
    id: 'cl1',
    headline:    { ckb: 'بەرنامەی پاکی زەوی یەکێتی ئەوروپا ڕووبەڕووی کێشەی نوێی لا راستی پارلەمانی ئەوروپایی دەبێتەوە' },
    kicker:      { ckb: 'ڕێکخراوی پاکی زەوی' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=300&h=200&fit=crop',
    author:      { name: 'فیۆنا هاروی' },
    publishedAt: 'دوێنێ',
    slug:        { current: 'green-deal-far-right-opposition' },
  },
  {
    id: 'cl2',
    headline:    { ckb: 'ئەڵمانیا گەیشتە ڕێژەی ٦٢٪ی تایبەتی وزەی نوێبوونەوە لەکاتێکدا ئامادەیی بایی و خۆری لا کۆمری تێپەڕی' },
    kicker:      { ckb: 'وزەی نوێبوونەوە' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop',
    author:      { name: 'دامیان کارینگتن' },
    publishedAt: 'دوێنێ',
    slug:        { current: 'germany-62-percent-renewables' },
  },
  {
    id: 'cl3',
    headline:    { ckb: 'پیلی ئاوی دەریای مەدیتەرانە گەیشتە بەرزترین تۆماری خۆی لەکاتێکدا زانستمەندانی دەریایی ئاگاداری دەدات' },
    kicker:      { ckb: 'دەریاکان' },
    kickerColor: 'blue' as const,
    imageUrl:    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&h=200&fit=crop',
    author:      { name: 'پاتریک گرینفیلد' },
    publishedAt: '٢ ڕۆژ پێش',
    slug:        { current: 'mediterranean-temp-record-warning' },
  },
]

// Rolling strip-kort
const stripCards = [
  {
    href:       '/podcast',
    kicker:     'پۆدکاستی تایبەت',
    title:      'ڕۆژهەڵات: مێژوو، هێز و بەرگری',
    titleColor: 'podcast' as const,
    isPodcast:  true,
  },
  {
    href:       '/article/ai-bot-party-manchester',
    kicker:     "'شەوی باشی بوو'",
    title:      'بۆتی هۆشی دەستکرد بانمە بۆ جەژنەکەی لە مانچستەر',
    titleColor: 'red' as const,
    image:      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=150&h=150&fit=crop',
  },
  {
    href:       '/article/dubai-father-son-redemption',
    kicker:     "'لێکدراو و ئازاردراو'",
    title:      'چۆن باوک و کوری دەبنەوە مرۆڤی تەواوبوونەوەی دوبای',
    titleColor: 'red' as const,
    image:      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=150&h=150&fit=crop',
  },
  {
    href:       '/article/influencers-maga-alliance',
    kicker:     'جەیسۆن ئۆکوندایی',
    title:      'ئایا هاوپەیمانی نێوان ئینفلوئێنسەرەکان و MAGA دانی بە شکستیهێنان هەبوو؟',
    titleColor: 'navy' as const,
    image:      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    href:       '/article/eu-ceasefire-brussels',
    kicker:     'ئەوروپا',
    title:      'سەرۆکانی ئەوروپا گەیشتنە ڕێکەوتنی شکننەوەیەکی ئاگربەست لە بروکسێل',
    titleColor: 'red' as const,
    image:      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop',
  },
  {
    href:       '/culture',
    kicker:     '★★★★★ — فیلم',
    title:      '«سووتانی دار»: فیلمی کوردی کە جەشنوارەی کان بە شۆک خستەوە',
    titleColor: 'green' as const,
    image:      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=150&h=150&fit=crop',
  },
]

// Mest sedda artiklar (sidebar)
const mostViewedArticles = [
  { id: 'm1', headline: { ckb: 'سەرۆکانی ئەوروپا گەیشتنە ڕێکەوتنی شکننەوەیەک لەسەر فەندی داماڵینەوەی ئۆکراینا لە بروکسێل' }, slug: { current: 'eu-ceasefire-brussels' } },
  { id: 'm2', headline: { ckb: 'ماکرۆن ڕووبەڕووی گەورەترین سەرکێشی پارلەمانیی دەبێتەوە لەسەر ڕووی ڕێکارەکانی کەمکردنەوەی خەرجییەکان' }, slug: { current: 'macron-parliament-challenge' } },
  { id: 'm3', headline: { ckb: 'حیزبی فیدێز کانی ئۆربان ئەکثەریەتی تایبەتی لەدەست دات لە هەڵبژاردنی هەرێمی لە ئەنجامێکی شۆکاوی' }, slug: { current: 'fidesz-loses-supermajority' } },
  { id: 'm4', headline: { ckb: 'پیلی ئاوی دەریای مەدیتەرانە گەیشتە بەرزترین تۆماری خۆی، زانستمەداران ئاگاداری دەدات' }, slug: { current: 'mediterranean-temp-record-warning' } },
  { id: 'm5', headline: { ckb: 'ڕووسیا هێرشی نوێی لە شەوەکە کردەوە لەسەر هەرێمی خارکیڤ لەکاتێکدا گفتوگۆی ئاگربەست شکستیهێنا' }, slug: { current: 'russia-kharkiv-attack-ceasefire-fail' } },
  { id: 'm6', headline: { ckb: 'یەک میلیۆن پەنابەری ئۆکراینی ئامادەیی ماندنی هەمیشەیی لە یەکێتی ئەوروپا ئاشکرا دەکاتەوە' }, slug: { current: 'ukraine-refugees-permanent-eu' } },
]

// ── Sanity-datahämtning med graceful fallback ────────────────────────────────

// Typ för rådata från Sanity (GROQ-svar)
interface SanityArticleRaw {
  _id:          string
  headline?:    { ckb?: string; fa?: string; en?: string }
  standfirst?:  { ckb?: string; fa?: string; en?: string }
  kicker?:      { ckb?: string; fa?: string; en?: string }
  kickerColor?: 'blue' | 'red' | 'navy'
  coverImage?:  { _type: string; asset?: { _ref: string } }
  publishedAt?: string
  isPremium?:   boolean
  featured?:    boolean
  locale?:      string
  slug:         { current: string }
  author?:      { name?: string; nameKurdi?: string; initials?: string; avatarColor?: string }
}

// Omvandlar Sanity-rådata till ArticleCardData
function mapSanityArticle(raw: SanityArticleRaw): ArticleCardData {
  return {
    id:          raw._id,
    headline:    raw.headline    ?? {},
    standfirst:  raw.standfirst  ?? undefined,
    kicker:      raw.kicker      ?? undefined,
    kickerColor: raw.kickerColor ?? 'blue',
    imageUrl:    raw.coverImage?.asset
                   ? urlFor(raw.coverImage).width(800).height(400).fit('crop').url()
                   : undefined,
    publishedAt: raw.publishedAt
                   ? new Date(raw.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                   : undefined,
    isPremium:   raw.isPremium ?? false,
    slug:        raw.slug,
    author:      raw.author ?? undefined,
  }
}

async function getSanityArticles(): Promise<SanityArticleRaw[] | null> {
  if (!isSanityConfigured) return null
  try {
    return await client.fetch(HOMEPAGE_ARTICLES_QUERY)
  } catch {
    return null
  }
}

// Exportera startsidan som Server Component
export default async function HomePage() {
  // Hämtar från Sanity om env finns, annars används statisk data nedan
  const rawArticles = await getSanityArticles()
  const sanityArticles: ArticleCardData[] = rawArticles
    ? rawArticles.map(mapSanityArticle)
    : []

  // Välj hero: featured-artikel eller första i listan
  const sanityHero = sanityArticles.find((a) => (rawArticles?.find((r) => r._id === a.id)?.featured)) ?? sanityArticles[0]
  // Side-artiklar: de tre nästa efter hero
  const sanityHeroSide = sanityArticles.filter((a) => a.id !== sanityHero?.id).slice(0, 3)

  // Slå ihop Sanity-data med statisk fallback
  const resolvedHeroArticle     = sanityHero ?? heroArticle
  const resolvedHeroSideArticles = sanityHeroSide.length > 0 ? sanityHeroSide : heroSideArticles

  // Kortrad 1: använd Sanity-artiklar om det finns minst 4, annars statisk fallback
  const resolvedCardRow1: ArticleCardData[] = sanityArticles.length >= 4
    ? sanityArticles.slice(0, 4)
    : cardRowArticles1

  // Skapa dynamiska kort för rolling strip från Sanity-artiklar om de finns
  const resolvedStripCards = [
    // Vi behåller podcasten först
    stripCards[0],
    // Sedan fyller vi på med de senaste artiklarna från Sanity (max 5 st)
    ...(sanityArticles.length > 0
      ? sanityArticles.slice(0, 5).map((a) => ({
          href: `/article/${a.slug.current}`,
          kicker: a.kicker?.ckb || a.kicker?.fa || a.kicker?.en || 'هەواڵ',
          title: a.headline.ckb || a.headline.fa || a.headline.en || '',
          titleColor: (a.kickerColor === 'red' ? 'red' : a.kickerColor === 'navy' ? 'navy' : 'red') as 'red' | 'navy' | 'green',
          image: a.imageUrl,
        }))
      : stripCards.slice(1))
  ]

  return (
    <>
      {/* Toppmeny */}
      <TopStrip />

      {/* Header med logotyp */}
      <header className="jiyan-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '12px 0 0' }}>
            <div>
              <a href="/" className="jiyan-masthead-logo">ژیان</a>
              <div className="jiyan-masthead-date" suppressHydrationWarning>
                دووشەممە، ٢١ی ئایار ٢٠٢٦
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Huvudnavigation */}
      <Navigation />

      {/* Sektionshuvud — Europa är aktiv */}
      <SectionHeader
        title="ئەوروپا"
        subcategories={[
          { label: 'هەموو',           slug: 'all',      active: true },
          { label: 'یەکێتی ئەوروپا', slug: 'eu' },
          { label: 'فەرەنسا',        slug: 'france' },
          { label: 'ئەڵمانیا',       slug: 'germany' },
          { label: 'ئیتالیا',        slug: 'italy' },
          { label: 'ئیسپانیا',       slug: 'spain' },
          { label: 'ئۆکراینا',       slug: 'ukraine' },
          { label: 'باڵقان',          slug: 'balkans' },
          { label: 'کۆچبەری',        slug: 'migration' },
        ]}
      />

      {/* Breaking news-banner */}
      <BreakingBar
        text="کۆبوونەوەی فریاگیرانەی یەکێتی ئەوروپا لەسەر گفتوگۆی ئاگربەستی ئۆکراینا لە بروکسێل بەکۆتایی گەیشت – شوێن بکەوە"
        linkText="زیاتر بخوێنەرەوە"
        linkHref="/article/eu-ceasefire-brussels"
      />

      {/* Rolling strip */}
      <RollingStrip cards={resolvedStripCards} />

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '0 32px', padding: '24px 0' }}
               className="content-grid">

            {/* Huvudinnehåll */}
            <div>
              {/* Paywallbanner */}
              <PaywallBanner />

              {sanityArticles.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ borderTop: '3px solid var(--blue)', paddingTop: '8px', marginBottom: '12px' }}>
                    <h2 style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--blue)' }}>
                      دوایین هەواڵ
                    </h2>
                  </div>
                  <NewsBannerGrid articles={sanityArticles} />
                </div>
              )}

              {/* Hero-sektion */}
              <HeroSection
                heroArticle={resolvedHeroArticle}
                sideArticles={resolvedHeroSideArticles}
              />

              {/* Kortrad 1 */}
              <CardRow articles={resolvedCardRow1} />

              {/* Opinionsstrip */}
              <OpinionStrip articles={opinionArticles} />

              {/* EU-politiksektion */}
              <Suspense fallback={<div className="jiyan-skeleton" style={{ height: 240 }} />}>
                <SectionBlock
                  title="سیاسەتی یەکێتی ئەوروپا"
                  articles={euPoliticsArticles}
                  layout="two-col"
                />
              </Suspense>

              {/* Kortrad 2 */}
              <CardRow articles={[
                {
                  id: 'c2-1',
                  headline:    { ckb: 'هاوبەشی ئیسپانیا دژایەتی ئەمینی دەوڵەت زیندوو مایەوە بەڵام سانچێز ئاماژەی دەکات هەڵبژاردن لە خریفدا دێت' },
                  kicker:      { ckb: 'ئیسپانیا' },
                  kickerColor: 'blue' as const,
                  imageUrl:    'https://images.unsplash.com/photo-1608170825938-a8ea0305e4a8?w=300&h=200&fit=crop',
                  author:      { name: 'سام جۆنز لە مادرید' },
                  slug:        { current: 'spain-coalition-survives-sanchez' },
                },
                {
                  id: 'c2-2',
                  headline:    { ckb: 'گڵێچ ٨٠ هەزار هێکتار لە باکووری یۆنان وشاند لەکاتێکدا ئاتیکا حاڵەتی فریاگیری ئاشکرا دەکات' },
                  kicker:      { ckb: 'یۆنان' },
                  kickerColor: 'blue' as const,
                  imageUrl:    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=300&h=200&fit=crop',
                  author:      { name: 'هێلێنا سمیث لە ئەتێن' },
                  slug:        { current: 'greece-wildfire-80000-hectares' },
                },
                {
                  id: 'c2-3',
                  headline:    { ckb: 'حیزبی فیدێز کانی ئۆربان ئەکثەریەتی تایبەتی لەدەست دات لە هەڵبژاردنی هەرێمی لە ئەنجامێکی شۆکاوی بۆ سەرۆکی حکومەت' },
                  kicker:      { ckb: 'مەجارستان' },
                  kickerColor: 'blue' as const,
                  imageUrl:    'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=200&fit=crop',
                  author:      { name: 'شۆن واکەر' },
                  slug:        { current: 'fidesz-loses-supermajority' },
                },
                {
                  id: 'c2-4',
                  headline:    { ckb: 'سربیا و کۆسۆڤۆ گەیشتنە ڕێکەوتنی تایبەتی سنووری کە یەکێتی ئەوروپا ناونیشانی کرد لەدوای دوو ساڵ گفتوگۆ' },
                  kicker:      { ckb: 'باڵقان' },
                  kickerColor: 'blue' as const,
                  imageUrl:    'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=300&h=200&fit=crop',
                  author:      { name: 'جۆن هێنلی' },
                  slug:        { current: 'serbia-kosovo-border-deal' },
                },
              ]} />

              {/* Klimatsektion */}
              <Suspense fallback={<div className="jiyan-skeleton" style={{ height: 200 }} />}>
                <SectionBlock
                  title="گەرمابوونی زەوی و ژینگە"
                  articles={climateArticles}
                  layout="three-col"
                />
              </Suspense>

              {/* Ukraina-sektion */}
              <Suspense fallback={<div className="jiyan-skeleton" style={{ height: 200 }} />}>
                <SectionBlock
                  title="ئۆکراینا"
                  articles={ukraineArticles}
                  layout="two-col"
                  accentColor="red"
                />
              </Suspense>
            </div>

            {/* Sidopanel */}
            <aside className="jiyan-sidebar">
              <Sidebar mostViewedArticles={mostViewedArticles} />
            </aside>

          </div>
        </div>

        {/* CTA — Gå med i Jiyan */}
        <JoinCTA />

      </main>

      {/* Sidfot */}
      <Footer />
    </>
  )
}
