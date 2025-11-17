"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your launch date here
    const launchDate = new Date("2026-03-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-versebox-surface py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-versebox-text mb-6 sm:mb-8">
          Launching In
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-versebox hover:shadow-versebox-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-versebox-primary mb-1 sm:mb-2">
                {value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-versebox-text-secondary uppercase">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
