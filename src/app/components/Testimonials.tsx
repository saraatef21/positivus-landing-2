"use client";

import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const quote =
  "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.";

const testimonials = [
  { text: quote, name: "John Smith", role: "Marketing Director at XYZ Corp" },
  { text: quote, name: "John Smith", role: "Marketing Director at XYZ Corp" },
  { text: quote, name: "John Smith", role: "Marketing Director at XYZ Corp" },
  { text: quote, name: "John Smith", role: "Marketing Director at XYZ Corp" },
  { text: quote, name: "John Smith", role: "Marketing Director at XYZ Corp" },
];

function TestimonialCard({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <div className="w-[280px] shrink-0 sm:w-[480px] lg:w-[606px]">
      <div className="relative rounded-[45px] border border-pink px-7 py-8 text-white md:px-[52px] md:py-12 md:text-lg">
        “{text}”
        <svg
          className="absolute -bottom-[38px] left-12 md:left-[115px]"
          width="64"
          height="39"
          viewBox="0 0 64 39"
        >
          <path d="M0 0 L32 38 L64 0" fill="#191a23" stroke="#f7a9c5" />
        </svg>
      </div>

      <div className="mt-12 pl-16 md:pl-20">
        <p className="text-xl font-medium text-pink">{name}</p>
        <p className="text-white md:text-lg">{role}</p>
      </div>
    </div>
  );
}

function Star({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path d="M7 2L14 0L12 7L14 14L7 12L0 14L2 7L0 0L7 2Z" fill={color} />
    </svg>
  );
}

function Arrow({ left }: { left?: boolean }) {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" className={left ? "rotate-180" : ""}>
      <path d="M0 8H19M12 1L19 8L12 15" fill="none" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  return (
    <section>
      <Container>
        <SectionTitle
          title="Testimonials"
          text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />

        <div className="overflow-hidden rounded-[45px] bg-dark py-12 md:py-[84px]">
          <div className="flex justify-center gap-5 lg:gap-12">
            <TestimonialCard {...testimonials[prev]} />
            <TestimonialCard {...testimonials[current]} />
            <TestimonialCard {...testimonials[next]} />
          </div>

          <div className="mx-auto mt-14 flex max-w-[564px] items-center justify-between px-8 md:mt-[124px]">
            <button onClick={() => setCurrent(prev)} aria-label="Previous">
              <Arrow left />
            </button>

            <div className="flex gap-5">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrent(index)} aria-label={`Testimonial ${index + 1}`}>
                  <Star color={index === current ? "#f7a9c5" : "white"} />
                </button>
              ))}
            </div>

            <button onClick={() => setCurrent(next)} aria-label="Next">
              <Arrow />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
