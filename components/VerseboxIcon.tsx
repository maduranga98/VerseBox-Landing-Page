export default function VerseboxIcon({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4F46E5", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* 3D Box */}
      <path
        d="M12 22L32 12L52 22V42L32 52L12 42V22Z"
        stroke="url(#iconGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Center line */}
      <path
        d="M32 12V52"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Flowing lines (verses) */}
      <path
        d="M32 22C35 20 40 18 45 20"
        stroke="#F472B6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M32 28C36 26 42 24 47 26"
        stroke="#F472B6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M32 34C37 32 44 30 49 32"
        stroke="#F472B6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Sparkles */}
      <circle cx="48" cy="18" r="2" fill="#8B5CF6" opacity="0.6" />
      <circle cx="52" cy="25" r="1.5" fill="#F472B6" opacity="0.8" />
      <circle cx="50" cy="32" r="1" fill="#8B5CF6" opacity="0.5" />
    </svg>
  );
}
