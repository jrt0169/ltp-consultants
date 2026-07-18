"use client";

import React from "react";

// Opens the Cal.com "Discovery Call" popup (same target as the nav Book button),
// so every booking CTA on the site behaves identically. The Cal embed script is
// loaded site-wide in app/layout.js.
export function BookCallButton({ className, children }) {
  return (
    <button
      type="button"
      data-cal-link="john-turner-edmqah/discovery-call"
      data-cal-namespace="discovery-call"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
