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
    <div className="bg-versebox-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-versebox-text mb-8">
          Launching In
        </h3>
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-white p-6 rounded-2xl shadow-versebox"
            >
              <div className="text-4xl font-bold text-versebox-primary mb-2">
                {value}
              </div>
              <div className="text-sm text-versebox-text-secondary uppercase">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
