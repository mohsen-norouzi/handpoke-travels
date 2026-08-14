export function FourPointStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0.4 13.35 10.65 23.6 12 13.35 13.35 12 23.6 10.65 13.35 0.4 12 10.65 10.65Z" />
    </svg>
  );
}

export function SparkleStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0 L15.54 8.46 24 12 15.54 15.54 12 24 8.46 15.54 0 12 8.46 8.46Z" />
    </svg>
  );
}

const SUN_RAYS = [
  { x1: "20", y1: "10.8", x2: "20", y2: "3.6" },
  { x1: "24.6", y1: "12.03", x2: "27.1", y2: "7.7" },
  { x1: "27.97", y1: "15.4", x2: "34.2", y2: "11.8" },
  { x1: "29.2", y1: "20", x2: "34.2", y2: "20" },
  { x1: "27.97", y1: "24.6", x2: "34.2", y2: "28.2" },
  { x1: "24.6", y1: "27.97", x2: "27.1", y2: "32.3" },
  { x1: "20", y1: "29.2", x2: "20", y2: "36.4" },
  { x1: "15.4", y1: "27.97", x2: "12.9", y2: "32.3" },
  { x1: "12.03", y1: "24.6", x2: "5.8", y2: "28.2" },
  { x1: "10.8", y1: "20", x2: "5.8", y2: "20" },
  { x1: "12.03", y1: "15.4", x2: "5.8", y2: "11.8" },
  { x1: "15.4", y1: "12.03", x2: "12.9", y2: "7.7" },
] as const;

export function SunEyeLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      aria-hidden="true"
      className={className}
    >
      <circle cx="20" cy="20" r="6.2" />
      <ellipse cx="20" cy="20" rx="3.1" ry="1.7" />
      <circle cx="20" cy="20" r="0.9" fill="currentColor" stroke="none" />
      {SUN_RAYS.map((ray) => (
        <line key={`${ray.x1}-${ray.y1}`} {...ray} />
      ))}
    </svg>
  );
}

export function ScrollMouse({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <line x1="8" y1="0.6" x2="8" y2="4.2" />
      <path d="M3.2 8.2 C3.2 5.6 5.35 4.4 8 4.4 C10.65 4.4 12.8 5.6 12.8 8.2 C12.8 13.4 10.6 18.8 8 21 C5.4 18.8 3.2 13.4 3.2 8.2 Z" />
    </svg>
  );
}

export function BotanicalArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M92 318 C90 250 78 200 86 140 C92 92 118 58 128 18" />
      <path d="M86 210 C62 198 48 168 44 140" />
      <path d="M88 176 C112 164 132 140 140 112" />
      <path d="M90 128 C70 118 58 96 54 74" />
      <path d="M98 96 C118 86 136 66 142 44" />
      <ellipse cx="38" cy="128" rx="11" ry="18" transform="rotate(-18 38 128)" />
      <ellipse cx="48" cy="156" rx="9" ry="15" transform="rotate(-28 48 156)" />
      <ellipse cx="148" cy="104" rx="10" ry="17" transform="rotate(22 148 104)" />
      <ellipse cx="136" cy="132" rx="8" ry="14" transform="rotate(30 136 132)" />
      <ellipse cx="50" cy="68" rx="9" ry="16" transform="rotate(-24 50 68)" />
      <ellipse cx="146" cy="40" rx="8" ry="14" transform="rotate(18 146 40)" />
      <path d="M128 18 C124 10 132 6 136 14 C140 6 148 12 142 20 C150 22 146 32 138 26 C134 34 124 28 128 18Z" />
      <path d="M54 74 C48 66 56 60 60 68 C64 60 72 66 66 74 C74 78 68 86 60 80 C56 88 48 82 54 74Z" />
      <path d="M62 248 C58 236 70 234 72 246 C78 236 88 244 80 252 C86 260 74 266 70 254 C62 262 56 254 62 248Z" />
      <path d="M108 236 C112 224 124 228 120 238 C130 236 132 250 122 248 C124 258 112 258 110 248 C100 250 102 238 108 236Z" />
    </svg>
  );
}

export function TerracottaDrop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 220"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M108 6C148 14 172 48 174 92c3 52-18 96-54 118-34 22-82 18-108-10C-12 174-6 118 18 74 40 32 72-2 108 6Z" />
    </svg>
  );
}

export function RoughCircleFrame({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M200.2 18.4 C248 16 296 32 330 66 C366 102 386 150 387.6 200.4 C390 254 372 304 336 338 C298 374 246 390 199.4 387.8 C148 386 98 368 64 332 C28 294 12 244 12.6 199.2 C14 146 32 96 68 62 C104 26 152 14 200.2 18.4Z"
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinejoin="round"
      />
      <path
        d="M201 26.8 C246 24.6 290 40 321 71 C354 104 372 150 373.4 198 C376 248 360 294 328 326 C294 360 246 376 200 374.2 C152 372 106 356 74 322 C42 288 26 242 26.8 198 C28 148 46 102 78 70 C112 36 156 24 201 26.8Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeOpacity="0.55"
      />
    </svg>
  );
}
