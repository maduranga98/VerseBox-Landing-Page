"use client";

export default function VerseboxIcon({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative"
    >
      <style>
        {`
          @keyframes sparkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }

          @keyframes flow {
            0% { stroke-dashoffset: 100; opacity: 0.2; }
            50% { opacity: 0.8; }
            100% { stroke-dashoffset: 0; opacity: 0.4; }
          }

          @keyframes pulse-glow {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(139, 92, 246, 0.3)); }
            50% { filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6)); }
          }

          .icon-box {
            animation: pulse-glow 3s ease-in-out infinite;
          }

          .sparkle-1 {
            animation: sparkle 2s ease-in-out infinite;
          }

          .sparkle-2 {
            animation: sparkle 2s ease-in-out infinite 0.5s;
          }

          .sparkle-3 {
            animation: sparkle 2s ease-in-out infinite 1s;
          }

          .flow-line-1 {
            stroke-dasharray: 100;
            animation: flow 3s ease-in-out infinite;
          }

          .flow-line-2 {
            stroke-dasharray: 100;
            animation: flow 3s ease-in-out infinite 0.5s;
          }

          .flow-line-3 {
            stroke-dasharray: 100;
            animation: flow 3s ease-in-out infinite 1s;
          }
        `}
      </style>

      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4F46E5", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#8B5CF6", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#F472B6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* 3D Box */}
      <path
        className="icon-box"
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
        stroke="url(#accentGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Flowing lines (verses) */}
      <path
        className="flow-line-1"
        d="M32 22C35 20 40 18 45 20"
        stroke="#F472B6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        className="flow-line-2"
        d="M32 28C36 26 42 24 47 26"
        stroke="#F472B6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        className="flow-line-3"
        d="M32 34C37 32 44 30 49 32"
        stroke="#F472B6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Sparkles */}
      <circle className="sparkle-1" cx="48" cy="18" r="2" fill="#8B5CF6" opacity="0.6" />
      <circle className="sparkle-2" cx="52" cy="25" r="1.5" fill="#F472B6" opacity="0.8" />
      <circle className="sparkle-3" cx="50" cy="32" r="1" fill="#8B5CF6" opacity="0.5" />
    </svg>
  );
}
