"use client";

import Image from "next/image";

export default function VerseboxIcon({ size = 64 }: { size?: number }) {
  return (
    <Image
      src="/versebox-logo.svg"
      alt="VERSEBOX Logo"
      width={size}
      height={size}
      className="relative"
      priority
    />
  );
}
