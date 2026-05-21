// ڕای کەسی — Opinionsida för Jiyan ژیان
export const dynamic = 'force-dynamic'
// Guardian commentisfree-inspirerat, RTL/soraniska kurdiska
// Statiska data — ersätts med Sanity-queries i produktion

import { Navigation } from '@/components/layout/Navigation'
import { TopStrip } from '@/components/layout/TopStrip'
import { Footer } from '@/components/layout/Footer'
import { OpinionHero } from '@/components/opinion/OpinionHero'
import { ColumnistGrid } from '@/components/opinion/ColumnistGrid'
import { OpinionFeed } from '@/components/opinion/OpinionFeed'
import { DebateSection } from '@/components/opinion/DebateSection'
import { OpinionSidebar } from '@/components/opinion/OpinionSidebar'
import type { OpinionHeroData } from '@/components/opinion/OpinionHero'
import type { ColumnistData } from '@/components/opinion/ColumnistCard'
import type { OpinionFeedArticle } from '@/components/opinion/OpinionFeed'
import type { DebateData } from '@/components/opinion/DebateSection'
import type { MostReadOpinionArticle } from '@/components/opinion/OpinionSidebar'

// ─── Featured opinion hero ───────────────────────────────────────────────────
const featuredOpinion: OpinionHeroData = {
  id: 'hero-1',
  headline: 'کوردستان لەسەر خاچی سیاسی: ئۆتۆنۆمی یان پووچەڵبوونی مامناوەند؟',
  standfirst:
    'پاش سی ساڵ لە ئازادیی ئیدارەیی، هەرێمی کوردستان ئێستا لەناو بارودۆخێکی ئاسایی نییەدایە. گفتوگۆکانی نێوان هەولێر و بەغدا پووچەڵبوونەوەی پێکردووە، ئابووری نیشتیمانی پیرۆزبوون مادونەتر دەبێت، و نەوجوانانی کورد ئۆمێدیان بڕیوەتەوە. بۆ چی؟ و لە کوێدا بەرامبەریەکان؟',
  pullquote: 'ئۆتۆنۆمی بەبێ سەروەری ئابووری وەک مالێکە بەبێ بنەماوە — لێکەوتووە بەلام هەمیشەیی نییە.',
  author: {
    name: 'شیرین مەحمود',
    bio: 'نووسەری سیاسی و پرۆفیسەری مافی بنەڕەتی لە زانکۆی ئامستەردام',
    avatarColor: '#1a3a5c',
    initials: 'شم',
  },
  imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=900&h=560&fit=crop',
  slug: 'kurdistan-political-crossroads-autonomy',
  publishedAt: '٢١ی ئایار ٢٠٢٦',
  topic: 'ڕای کەسی — کوردستان',
}

// ─── Kolumnister ─────────────────────────────────────────────────────────────
const columnists: ColumnistData[] = [
  {
    id: 'c1',
    name: 'شیرین مەحمود',
    bio: 'پرۆفیسەری مافی بنەڕەتی — ئامستەردام',
    avatarColor: '#1a3a5c',
    initials: 'شم',
    slug: 'shirin-mahmoud',
    latestArticle: {
      headline: 'کوردستان لەسەر خاچی سیاسی: ئۆتۆنۆمی یان پووچەڵبوونی مامناوەند؟',
      slug: 'kurdistan-political-crossroads-autonomy',
    },
  },
  {
    id: 'c2',
    name: 'کاوەی رەشیدی',
    bio: 'نووسەری ئابووری — تاران',
    avatarColor: '#c70000',
    initials: 'کر',
    slug: 'kaweh-rashidi',
    latestArticle: {
      headline: 'نەوت وەک چەکێک: ئابووری کوردستان لە سایەی شەڕی ئاکتیڤدا',
      slug: 'oil-weapon-kurdistan-economy',
    },
  },
  {
    id: 'c3',
    name: 'پەرێز هاشمی',
    bio: 'فیمینیستێکی کوردی — برلین',
    avatarColor: '#7b2d8b',
    initials: 'په',
    slug: 'pariz-hashemi',
    latestArticle: {
      headline: 'ژنان لە کوردستاندا: نێوان یاسای نوێ و دەستووری کۆن',
      slug: 'women-kurdistan-new-law-old-custom',
    },
  },
  {
    id: 'c4',
    name: 'لیلا ئەحمەدی',
    bio: 'ژورنالیستی ژینگەیی — لەندەن',
    avatarColor: '#005f4e',
    initials: 'لئ',
    slug: 'layla-ahmadi',
    latestArticle: {
      headline: 'ئاووهەوا لە کوردستاندا: گرمای زەوی وەک دیفاعی سیاسی',
      slug: 'climate-kurdistan-political-defence',
    },
  },
  {
    id: 'c5',
    name: 'بنیامین ئازیزی',
    bio: 'تیۆریستی سیاسی — پاریس',
    avatarColor: '#041f4a',
    initials: 'بئ',
    slug: 'benyamin-azizi',
    latestArticle: {
      headline: 'دیاسپۆرای کوردی: خوازراوی سیاسیی نوێ',
      slug: 'kurdish-diaspora-new-political-actor',
    },
  },
  {
    id: 'c6',
    name: 'نازەندە جەلال',
    bio: 'ئەدیبەی کوردی — ستۆکهۆڵم',
    avatarColor: '#c05800',
    initials: 'نج',
    slug: 'nazende-jalal',
    latestArticle: {
      headline: 'زمانی کوردی لە دیاسپۆرادا: مێراتەک لە خەتەردا',
      slug: 'kurdish-language-diaspora-heritage',
    },
  },
  {
    id: 'c7',
    name: 'ئامینە سەیدی',
    bio: 'دیپلۆماتی سابقی — ژنێڤ',
    avatarColor: '#005689',
    initials: 'ئس',
    slug: 'amina-seydi',
    latestArticle: {
      headline: 'کوردستان و یەکێتی ئەوروپا: دەرگاکە هاتۆتە گەرمکردنەوە؟',
      slug: 'kurdistan-eu-door-reopening',
    },
  },
  {
    id: 'c8',
    name: 'سیاوەش کریمی',
    bio: 'مامۆستای مێژوو — هەولێر',
    avatarColor: '#6b3fa0',
    initials: 'سک',
    slug: 'siawash-karimi',
    latestArticle: {
      headline: 'ئینقیلابی ژن: چۆن ئێران وەرگەڕاند و کوردستانی گۆڕی',
      slug: 'jin-revolution-iran-kurdistan-change',
    },
  },
]

// ─── Opinions-flöde ───────────────────────────────────────────────────────────
const opinionFeedArticles: OpinionFeedArticle[] = [
  {
    id: 'of1',
    headline: 'نەوت وەک چەکێک: ئابووری کوردستان لە سایەی شەڕی ئاکتیڤدا',
    standfirst:
      'کاتێک نەوتی کوردستانی خەونی نەوجوانانی کورد بووە، ئەمڕۆ بووەتە سەرچاوەی کێشە. بەرپرسایەتی سیاسی پێویستە هەڵوەستی ئابووریی ڕوون و دروست بەرپرس بێ.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&h=320&fit=crop',
    author: {
      name: 'کاوەی رەشیدی',
      avatarColor: '#c70000',
      initials: 'کر',
    },
    topic: 'ئابووری',
    publishedAt: '٢٠ی ئایار ٢٠٢٦',
    slug: 'oil-weapon-kurdistan-economy',
  },
  {
    id: 'of2',
    headline: 'ژنان لە کوردستاندا: نێوان یاسای نوێ و دەستووری کۆن',
    standfirst:
      'یاسای تازەی مافی ژنان لە هەرێمی کوردستاندا ئەوەی لازمی بووە نییەتی پرۆگرامکردنی چووەتەوە. فیمینیستانی کورد دەیانوێت یاسا بەتەنها شتێکی کاغەزی نەبێت.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=320&fit=crop',
    author: {
      name: 'پەرێز هاشمی',
      avatarColor: '#7b2d8b',
      initials: 'په',
    },
    topic: 'فیمینیزم',
    publishedAt: '١٩ی ئایار ٢٠٢٦',
    slug: 'women-kurdistan-new-law-old-custom',
  },
  {
    id: 'of3',
    headline: 'دیاسپۆرای کوردی: خوازراوی سیاسیی نوێ',
    standfirst:
      'دیاسپۆرای کوردی لە ئەوروپا و ئەمریکا ئەمڕۆ نیشانەی هێزێکی سیاسیی تازەیە کە نە بەغداش پێیان گوێ دەدات، نە هەولێرش. ئایا پارتی سیاسیی دیاسپۆرا دەتوانێت لە ناو ئەوروپادا ببێتە دەنگی کوردستان؟',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=320&fit=crop',
    author: {
      name: 'بنیامین ئازیزی',
      avatarColor: '#041f4a',
      initials: 'بئ',
    },
    topic: 'دیاسپۆرا',
    publishedAt: '١٨ی ئایار ٢٠٢٦',
    slug: 'kurdish-diaspora-new-political-actor',
  },
  {
    id: 'of4',
    headline: 'ئینقیلابی ژن: چۆن ئێران وەرگەڕاند و کوردستانی گۆڕی',
    standfirst:
      'ئینقیلابی «ژن، ژیان، ئازادی» لە ئێراندا تەنها ئیرانی نەگۆڕد. کوردستانی هەر دوو لایەکەشی گۆڕی — ئەمەش وە بەرامبەر بوونی نوێیی پێویستکردووە لەسەر ئاستی هەم لایەنگرانی هەرێم هەم ئۆپۆزیسیۆن.',
    imageUrl: 'https://images.unsplash.com/photo-1609904851355-89c8e237b0b2?w=500&h=320&fit=crop',
    author: {
      name: 'سیاوەش کریمی',
      avatarColor: '#6b3fa0',
      initials: 'سک',
    },
    topic: 'ئیران',
    publishedAt: '١٧ی ئایار ٢٠٢٦',
    slug: 'jin-revolution-iran-kurdistan-change',
  },
  {
    id: 'of5',
    headline: 'ئاووهەوا لە کوردستاندا: گرمای زەوی وەک دیفاعی سیاسی',
    standfirst:
      'پرسی ئاووهەوا لە کوردستاندا پرسێکی ژینگەیی تەنها نییە — بووەتە پرسێکی سیاسی. ئاوی کەم و خشکسالی دروودان دەبنەوە بۆ کێشەی نێوان کوردستان، تورکیا و ئێران.',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=320&fit=crop',
    author: {
      name: 'لیلا ئەحمەدی',
      avatarColor: '#005f4e',
      initials: 'لئ',
    },
    topic: 'ئاووهەوا',
    publishedAt: '١٦ی ئایار ٢٠٢٦',
    slug: 'climate-kurdistan-political-defence',
  },
  {
    id: 'of6',
    headline: 'زمانی کوردی لە دیاسپۆرادا: مێراتەک لە خەتەردا',
    standfirst:
      'لە بەرلین، ستۆکهۆڵم و تۆرنتۆدا مندالانی کورد بە کوردی قسە ناکەن. ئایا ئەمە تەنها کەمبووی بەشداری بووە، یان نیشانەی شکستی پرۆژەی کولتووری کوردایەتیی لە ئەوروپا؟',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&h=320&fit=crop',
    author: {
      name: 'نازەندە جەلال',
      avatarColor: '#c05800',
      initials: 'نج',
    },
    topic: 'کولتوور',
    publishedAt: '١٥ی ئایار ٢٠٢٦',
    slug: 'kurdish-language-diaspora-heritage',
  },
  {
    id: 'of7',
    headline: 'کوردستان و یەکێتی ئەوروپا: دەرگاکە هاتۆتە گەرمکردنەوە؟',
    standfirst:
      'پاش سی ساڵ نامەکردن، ئیشارەتەکانی یەکێتی ئەوروپا بۆ کوردستان ئەمڕۆ زیاتر ئەرێنییەتن. ئایا ئەمەش چانسێکی ڕاستیانەیە، یان دیپلۆماسیی بوچووک؟',
    imageUrl: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=500&h=320&fit=crop',
    author: {
      name: 'ئامینە سەیدی',
      avatarColor: '#005689',
      initials: 'ئس',
    },
    topic: 'دیپلۆماسی',
    publishedAt: '١٤ی ئایار ٢٠٢٦',
    slug: 'kurdistan-eu-door-reopening',
  },
  {
    id: 'of8',
    headline: 'مافی ڕايبووندنەوەی کوردستانی سوریا: ڕاستیەک یان خهوون؟',
    standfirst:
      'لەدوای کرێکارکردنی ئەمریکا بە ئاڵیانسی SDFی کوردی لە سوریادا، ئامادەکاریە سیاسیەکان بەئیستا خوازراوی کوردیی بووە — بەڵام بیرۆکەی فیدرالیزم هێشتا ناڕوونە.',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=320&fit=crop',
    author: {
      name: 'شیرین مەحمود',
      avatarColor: '#1a3a5c',
      initials: 'شم',
    },
    topic: 'جیۆپۆلیتیک',
    publishedAt: '١٣ی ئایار ٢٠٢٦',
    slug: 'rojava-right-self-determination',
  },
]

// ─── Debatt ───────────────────────────────────────────────────────────────────
const debateData: DebateData = {
  topic: 'ئایا کوردستان پێویستی بە سەربەخۆیییەکی تەواو هەیە؟',
  proArgument: {
    stance: 'بەڵێ — کات هاتووە',
    headline: '٤٠ ساڵ چاوەڕوانی بەسە — نیشتمانی سەربەخۆ هەقی خودمانە',
    summary:
      'کوردستان هەموو پێداویستیەکانی سەربەخۆیییەکی بەردەوامی هەیە: دامودەزگا، هێز، ڕایدانی خەڵک و مافی مرۆڤی نێودەوڵەتی. ئەوەی نییە ئارام و بەدەنگ بمێنینەوە — ئەوەی پێویستە قەدمی مێژووییمان بردریت.',
    author: 'بنیامین ئازیزی',
    authorBio: 'تیۆریستی سیاسی — پاریس',
    slug: 'full-independence-kurdistan-pro',
  },
  conArgument: {
    stance: 'نەخێر — ئاکامەکەی وێران دەبێت',
    headline: 'سەربەخۆیی بەبێ پشتیوانی نێودەوڵەتی لیلامی سیاسیی خراپی دەبێت',
    summary:
      'تا ناکریت پشتیوانی ئەمریکا، ئەوروپا و کەمەکەم جارتەرەکانی نێودەوڵەتیمان بخرێت سەر میز، سەربەخۆیی لە واقیعی ئەمڕۆدا ناکرێت — و ئاکامەکەی دیسانەوە کوردستانی پووچ دەبێتەوە.',
    author: 'ئامینە سەیدی',
    authorBio: 'دیپلۆماتی سابقی — ژنێڤ',
    slug: 'full-independence-kurdistan-con',
  },
}

// ─── Mest lästa åsikter ───────────────────────────────────────────────────────
const mostReadOpinion: MostReadOpinionArticle[] = [
  {
    id: 'mr1',
    headline: 'کوردستان لەسەر خاچی سیاسی: ئۆتۆنۆمی یان پووچەڵبوونی مامناوەند؟',
    author: 'شیرین مەحمود',
    slug: 'kurdistan-political-crossroads-autonomy',
  },
  {
    id: 'mr2',
    headline: 'ئینقیلابی ژن: چۆن ئێران وەرگەڕاند و کوردستانی گۆڕی',
    author: 'سیاوەش کریمی',
    slug: 'jin-revolution-iran-kurdistan-change',
  },
  {
    id: 'mr3',
    headline: 'ژنان لە کوردستاندا: نێوان یاسای نوێ و دەستووری کۆن',
    author: 'پەرێز هاشمی',
    slug: 'women-kurdistan-new-law-old-custom',
  },
  {
    id: 'mr4',
    headline: 'دیاسپۆرای کوردی: خوازراوی سیاسیی نوێ',
    author: 'بنیامین ئازیزی',
    slug: 'kurdish-diaspora-new-political-actor',
  },
  {
    id: 'mr5',
    headline: 'زمانی کوردی لە دیاسپۆرادا: مێراتەک لە خەتەردا',
    author: 'نازەندە جەلال',
    slug: 'kurdish-language-diaspora-heritage',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OpinionPage() {
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
              <div className="jiyan-masthead-date">
                دووشەممە، ٢١ی ئایار ٢٠٢٦
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigering */}
      <Navigation />

      {/* Sektionsheader — Opinion */}
      <div className="opinion-section-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div className="opinion-section-header-inner">
            <h1 className="opinion-section-header-title">ڕای کەسی</h1>
            <p className="opinion-section-header-desc">
              ستوونییەکان، ڕاپرسییەکان و دیباتەکانی ژیان — هووشمەندانەترین دەنگە سەربەخۆکان.
            </p>
          </div>
        </div>
      </div>

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>

          {/* Featured opinion hero */}
          <div style={{ padding: '28px 0 0' }}>
            <OpinionHero article={featuredOpinion} />
          </div>

          {/* Kolumnist-grid */}
          <div style={{ padding: '32px 0 0' }}>
            <ColumnistGrid columnists={columnists} />
          </div>

          {/* Huvud + Sidopanel */}
          <div
            className="opinion-main-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '0 32px', padding: '32px 0' }}
          >
            {/* Vänster: flöde + debatt */}
            <div>
              <OpinionFeed articles={opinionFeedArticles} />

              <div style={{ marginTop: '40px' }}>
                <DebateSection debate={debateData} />
              </div>
            </div>

            {/* Höger: sidopanel */}
            <OpinionSidebar mostRead={mostReadOpinion} />
          </div>

        </div>
      </main>

      {/* Sidfot */}
      <Footer />
    </>
  )
}
