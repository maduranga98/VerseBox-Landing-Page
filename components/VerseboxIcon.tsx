"use client";

import Image from "next/image";

export default function VerseboxIcon({ size = 64 }: { size?: number }) {
  return (
    <div
      className="relative rounded-lg border-2 border-versebox-primary/20 bg-white p-1.5 shadow-sm hover:shadow-md hover:border-versebox-primary/40 transition-all duration-300"
      style={{ width: size + 12, height: size + 12 }}
    >
      <Image
        src="/versebox-logo.svg"
        alt="VERSEBOX Logo"
        width={size}
        height={size}
        className="relative"
        priority
      />
    </div>
  );
}
