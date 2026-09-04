import { useState } from 'react';
import wallSvg from './imports/Web-1/svg-uom61kpuhv';

const wallPosts = [
  {
    name: 'Carlos R.',
    time: '5 min ago. Public',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=280&fit=crop',
    likes: '23k',
    comments: '3k',
  },
  {
    name: 'Maria L.',
    time: '12 min ago. Public',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=280&fit=crop',
    likes: '15k',
    comments: '1.2k',
  },
  {
    name: 'Alex M.',
    time: '18 min ago. Public',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=800&h=280&fit=crop',
    likes: '31k',
    comments: '5k',
  },
  {
    name: 'Sara K.',
    time: '25 min ago. Public',
    avatar: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=80&h=80&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1758691737584-a8f17fb34475?w=800&h=280&fit=crop',
    likes: '8.5k',
    comments: '947',
  },
];

function HeartIcon() {
  return (
    <svg fill="none" viewBox="0 0 34 34" width="28" height="28">
      <defs>
        <linearGradient id="heart-grad-wp" x1="2.803" x2="30.839" y1="17.067" y2="17.067" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6900" />
          <stop offset="0.5" stopColor="#F54900" />
          <stop offset="1" stopColor="#CA3500" />
        </linearGradient>
      </defs>
      <path d={wallSvg.p36eb5e80} fill="url(#heart-grad-wp)" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg fill="none" viewBox="0 0 32 32" width="26" height="26">
      <defs>
        <linearGradient id="comment-grad-wp" x1="3.943" x2="27.598" y1="15.773" y2="15.773" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6900" />
          <stop offset="0.5" stopColor="#F54900" />
          <stop offset="1" stopColor="#CA3500" />
        </linearGradient>
      </defs>
      <path d={wallSvg.p3ebf3d80} stroke="url(#comment-grad-wp)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ActivityWaveIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" width="20" height="20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={wallSvg.p2c39f180} />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg fill="none" viewBox="0 0 19 19" width="18" height="18" stroke="#4A5565" strokeWidth="1.59" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.36 1.59V4.77" />
      <path d="M12.72 1.59V4.77" />
      <path d={wallSvg.p24f3f200} />
      <path d="M2.38 7.96H16.70" />
    </svg>
  );
}

interface PostProps {
  name: string;
  time: string;
  avatar: string;
  image: string;
  likes: string;
  comments: string;
}

function WallPostCard({ name, time, avatar, image, likes, comments }: PostProps) {
  return (
    <div
      className="rounded-[14px] overflow-hidden border border-[#ffd6a7] shadow-[0px_8px_16px_-3px_rgba(0,0,0,0.06)] hover:shadow-[0px_12px_24px_rgba(255,105,0,0.12)] transition-shadow duration-200"
      style={{ backgroundImage: "linear-gradient(145deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 95%)" }}
    >
      {/* Profile row */}
      <div className="flex items-center gap-3 px-4 md:px-5 pt-4 md:pt-5 pb-3 md:pb-4">
        <img
          src={avatar}
          alt={name}
          className="rounded-[14px] shrink-0 object-cover"
          style={{ width: 56, height: 56 }}
        />
        <div className="flex flex-col">
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold text-[16px] md:text-[17px] text-[#09090a] leading-tight">{name}</span>
          <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[13px] md:text-[15px] text-[rgba(31,31,34,0.57)] leading-tight mt-0.5">{time}</span>
        </div>
      </div>

      {/* Post image area */}
      <div className="mx-4 md:mx-5 mb-3 md:mb-4 rounded-[11px] overflow-hidden border border-[#ff6900]/30" style={{ height: '200px' }}>
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Reactions row */}
      <div className="flex items-center gap-4 md:gap-5 px-4 md:px-5 pb-4 md:pb-5">
        <div className="flex items-center gap-2">
          <HeartIcon />
          <span className="font-['Roboto:Regular',sans-serif] text-[14px] md:text-[15px] text-black">{likes}</span>
        </div>
        <div className="flex items-center gap-2">
          <CommentIcon />
          <span className="font-['Roboto:Regular',sans-serif] text-[14px] md:text-[15px] text-black">{comments}</span>
        </div>
      </div>
    </div>
  );
}

export default function WallPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <main className="flex-1 overflow-y-auto px-4 md:px-6 py-5 md:py-6 flex flex-col gap-4 md:gap-5">
      {/* Page heading */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h1
          className="font-['Inter:Regular',sans-serif] text-[28px] md:text-[38px] leading-tight bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(16,24,40) 0%, rgb(245,73,0) 100%)" }}
        >
          Walls
        </h1>
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <p className="font-['Inter:Regular',sans-serif] text-[14px] md:text-[17px] text-[#4a5565]">Here's what's happening in your Wall</p>
        </div>
      </div>

      {/* Orange banner */}
      <div
        className="relative z-30 rounded-[14px] shadow-[0px_10px_16px_-3px_rgba(0,0,0,0.08)] flex items-center gap-3 px-4 md:px-6 h-[64px] md:h-[72px] shrink-0"
        style={{ backgroundImage: "linear-gradient(to right, #ff6900, #f54900, #ca3500)" }}
      >
        <ActivityWaveIcon />
        <span className="font-['Inter:Regular',sans-serif] text-[15px] md:text-[17px] text-white">Últimos Posts Del Wall</span>
        <div className="ml-auto relative">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 md:px-4 py-1 md:py-1.5 rounded-[10px] md:rounded-[11px] cursor-pointer transition-all duration-150"
          >
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] md:text-[14px] text-white">Filters</span>
            <svg fill="none" viewBox="0 0 24 24" width="14" height="14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-150 ${filtersOpen ? 'rotate-180' : ''}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {filtersOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-[180px] bg-white rounded-[12px] shadow-2xl border border-[#ffd6a7] py-1 z-50">
                {['All Posts', 'Recent First', 'Announcements', 'Most Liked', 'My Posts'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFiltersOpen(false)}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-[#364153] font-['Inter:Regular',sans-serif] hover:bg-orange-50 hover:text-[#f54900] transition-colors duration-100 cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Post cards */}
      <div className="flex flex-col gap-4 md:gap-5">
        {wallPosts.map((post, i) => (
          <WallPostCard key={i} {...post} />
        ))}
      </div>
    </main>
  );
}
