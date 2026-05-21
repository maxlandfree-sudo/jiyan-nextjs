// VideoGrid — 2×3 grid av VideoCard

import { VideoCard } from './VideoCard'

interface VideoItem {
  id:           string
  title:        string
  thumbnailUrl: string
  duration:     string
  category:     string
  date:         string
  slug:         string
}

interface VideoGridProps {
  videos: VideoItem[]
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div
      style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:                 '20px',
      }}
    >
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  )
}
