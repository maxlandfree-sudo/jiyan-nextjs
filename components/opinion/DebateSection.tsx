// DebateSection — Pro/Con-format, två spalter med motstående argument
// Guardian-inspirerat "The Debate" format, RTL

export interface DebateData {
  topic: string
  proArgument: {
    stance: string
    headline: string
    summary: string
    author: string
    authorBio: string
    slug: string
  }
  conArgument: {
    stance: string
    headline: string
    summary: string
    author: string
    authorBio: string
    slug: string
  }
}

interface DebateSectionProps {
  debate: DebateData
}

export function DebateSection({ debate }: DebateSectionProps) {
  return (
    <section className="debate-section">
      {/* Header */}
      <div className="debate-header">
        <div className="debate-label">مووچەکانەکە</div>
        <h2 className="debate-topic">{debate.topic}</h2>
      </div>

      <div className="debate-columns">
        {/* Pro */}
        <div className="debate-col debate-pro">
          <div className="debate-stance-badge debate-pro-badge">{debate.proArgument.stance}</div>
          <a href={`/article/${debate.proArgument.slug}`} className="debate-link">
            <h3 className="debate-col-headline">{debate.proArgument.headline}</h3>
          </a>
          <p className="debate-col-summary">{debate.proArgument.summary}</p>
          <div className="debate-author">
            <span className="debate-author-name">{debate.proArgument.author}</span>
            <span className="debate-author-bio">{debate.proArgument.authorBio}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="debate-divider" aria-hidden="true">
          <div className="debate-vs">VS</div>
        </div>

        {/* Con */}
        <div className="debate-col debate-con">
          <div className="debate-stance-badge debate-con-badge">{debate.conArgument.stance}</div>
          <a href={`/article/${debate.conArgument.slug}`} className="debate-link">
            <h3 className="debate-col-headline">{debate.conArgument.headline}</h3>
          </a>
          <p className="debate-col-summary">{debate.conArgument.summary}</p>
          <div className="debate-author">
            <span className="debate-author-name">{debate.conArgument.author}</span>
            <span className="debate-author-bio">{debate.conArgument.authorBio}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
