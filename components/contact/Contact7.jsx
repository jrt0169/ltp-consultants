"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";

export function Contact7() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
        {/* Form */}
        <div>
          <div className="mb-10">
            <div className="mb-6 h-1 w-10 rounded bg-accent" />
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Schedule
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
              Your consultation
            </h2>
            <p className="font-body text-muted">
              Tell us about your team and what you're working toward.
            </p>
          </div>

          <form className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="grid w-full items-center">
                <Label htmlFor="name" className="mb-2 font-body text-sm font-semibold">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Jane Smith"
                  className="rounded-sm border-line font-body"
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="company" className="mb-2 font-body text-sm font-semibold">
                  Company
                </Label>
                <Input
                  type="text"
                  id="company"
                  placeholder="Acme Corp"
                  className="rounded-sm border-line font-body"
                />
              </div>
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 font-body text-sm font-semibold">
                Work Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="jane@acmecorp.com"
                className="rounded-sm border-line font-body"
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2 font-body text-sm font-semibold">
                What challenge are you trying to solve?
              </Label>
              <Textarea
                id="message"
                placeholder="Describe your team's situation..."
                className="min-h-[140px] overflow-auto rounded-sm border-line font-body"
              />
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer font-body text-sm text-muted">
                I agree to the privacy policy and terms of service
              </Label>
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-sm bg-brand py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-mid sm:w-auto sm:px-10"
            >
              Book Consultation →
            </button>
          </form>
        </div>

        {/* Image + trust signals */}
        <div className="flex flex-col gap-8">
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://tempfile.aiquickdraw.com/image-format-converter/1776175463935-798ix57nue6.jpg"
              alt="LTP Consultants consultation"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="rounded-sm border border-line bg-surface p-7">
            <p className="mb-5 font-display text-lg font-semibold italic text-brand">
              &ldquo;They understood our culture from day one. No generic
              playbook — just real solutions.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-body text-sm font-bold text-white">
                P
              </div>
              <div>
                <p className="font-body text-sm font-semibold">Dr. Patricia Okonkwo</p>
                <p className="font-body text-xs text-muted">CMO, Regional Healthcare Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
