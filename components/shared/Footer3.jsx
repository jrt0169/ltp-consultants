"use client";

import Link from "next/link";
import React from "react";

export function Footer3() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <Link href="/">
                <img
                  src="/Logo-01.png"
                  alt="PDN – Performance Development Network"
                  className="inline-block h-16 w-auto"
                />
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Location</p>
              <p className="mb-5 text-sm md:mb-6">College Station, TX</p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <Link href="/services/what-we-do">What we do</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/about">About us</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <button
                  data-cal-link="john-turner-edmqah/discovery-call"
                  data-cal-namespace="discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="text-left"
                >
                  Book now
                </button>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link href="/services/what-we-do">Services</Link>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <button
                  data-tally-open="q4jKz8"
                  data-tally-overlay="1"
                  className="text-left"
                >
                  Contact us
                </button>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Privacy</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Terms</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">© 2026 Performance Development Network. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of service</a>
            </li>
            <li className="underline">
              <a href="#">Cookies settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
