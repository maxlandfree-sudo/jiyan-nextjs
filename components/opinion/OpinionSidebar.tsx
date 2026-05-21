"use client"

// OpinionSidebar — Sidopanel med mest lästa åsikter + nyhetsbrev
// Guardian-inspirerat, RTL-anpassat

export interface MostReadOpinionArticle {
  id: string
  headline: string
  author: string
  slug: string
}

interface OpinionSidebarProps {
  mostRead: MostReadOpinionArticle[]
}

export function OpinionSidebar({ mostRead }: OpinionSidebarProps) {
  return (
    <aside className="opinion-sidebar">
      {/* Mest lästa åsikter */}
      <div className="opinion-sidebar-widget">
        <div className="opinion-sidebar-widget-title">زیاتر خوێندراوەکان</div>
        <ol className="opinion-most-read-list">
          {mostRead.map((article, index) => (
            <li key={article.id} className="opinion-most-read-item">
              <span className="opinion-most-read-num">{index + 1}</span>
              <div className="opinion-most-read-content">
                <a href={`/article/${article.slug}`} className="opinion-most-read-link">
                  {article.headline}
                </a>
                <div className="opinion-most-read-author">{article.author}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Nyhetsbrev */}
      <div className="opinion-newsletter-widget">
        <div className="opinion-newsletter-icon">&#9993;</div>
        <div className="opinion-newsletter-label">نووسراوی ئەلیکترۆنی ڕای کەسی</div>
        <p className="opinion-newsletter-desc">
          باشترین ستوونەکان و بابەتە گرنگەکانی هەفتەیەک بکەوە ئیمەیڵەکەت — بەخۆڕایی.
        </p>
        <form
          className="opinion-newsletter-form"
          onSubmit={(e) => e.preventDefault()}
          aria-label="opinion newsletter"
        >
          <input
            type="email"
            placeholder="ئیمەیڵەکەت"
            className="opinion-newsletter-input"
            dir="ltr"
          />
          <button type="submit" className="opinion-newsletter-btn">
            بەشداربوون
          </button>
        </form>
        <p className="opinion-newsletter-privacy">
          <a href="/privacy">سیاسەتی تایبەتی</a> مان بخوێنەرەوە.
        </p>
      </div>

      {/* Ämnestagg-sektion */}
      <div className="opinion-sidebar-widget">
        <div className="opinion-sidebar-widget-title">بابەتەکان</div>
        <div className="opinion-tags">
          {[
            'ئۆتۆنۆمی کوردستان',
            'دیاسپۆرا',
            'فیمینیزم',
            'جیۆپۆلیتیک',
            'ئاووهەوا',
            'مافی مرۆڤ',
            'ئابووری',
            'مێژوو',
          ].map((tag) => (
            <a key={tag} href={`/opinion/topic/${tag}`} className="opinion-tag">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
