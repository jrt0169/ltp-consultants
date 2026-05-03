"use client";

import React from "react";

export function Logo4() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 md:mb-12 lg:mb-14">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Industry Affiliates
          </h2>
          <p className="max-w-2xl md:text-md">
            PDN's training programs are built around evidence-based frameworks developed in collaboration with our industry affiliates. Our curriculum is grounded in The Flow System methodology and distributed through our affiliated publishing imprint, 3 Helix Publishing™.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex min-h-[140px] w-full items-center justify-center bg-neutral-lightest px-6 py-8">
            <img
              src="/Flow%20System%20Logo%20SM%20Transparent.png"
              alt="The Flow System"
              className="max-h-20 w-auto object-contain"
            />
          </div>
          <div className="flex min-h-[140px] w-full items-center justify-center bg-neutral-lightest px-6 py-8">
            <img
              src="/Image-1-300.png"
              alt="The Flow System — Triple Helix of Flow concept"
              className="max-h-20 w-auto object-contain"
            />
          </div>
          <div className="flex min-h-[140px] w-full flex-col items-center justify-center bg-neutral-lightest px-6 py-8 text-center">
            <p className="text-lg font-bold uppercase tracking-widest">
              3 Helix Publishing™
            </p>
          </div>
          <div className="flex min-h-[140px] w-full items-center justify-center bg-neutral-lightest px-6 py-8">
            <img
              src="/23320_LTP_logo_PS-03.png"
              alt="LTP Consultants"
              className="max-h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
