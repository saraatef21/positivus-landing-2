"use client"; // عشان بنستخدم useState

import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProcessStep from "./ProcessStep";

// الديزاين فيه وصف للخطوة الأولى بس، والباقي نصوص مؤقتة
const steps = [
  {
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  { title: "Research and Strategy Development", text: "We research your market and audience, then build a clear strategy for your goals." },
  { title: "Implementation", text: "We put the strategy into action: campaigns, content, and the tools you need." },
  { title: "Monitoring and Optimization", text: "We track the results and keep adjusting to get the best out of your budget." },
  { title: "Reporting and Communication", text: "You get regular, easy-to-read reports about how everything is going." },
  { title: "Continual Improvement", text: "We keep testing new ideas and improving what works." },
];

export default function Process() {
  // رقم الخطوة المفتوحة (0 = الأولى). -1 يعني كله مقفول
  const [openStep, setOpenStep] = useState(0);

  return (
    <section>
      <Container>
        <SectionTitle title="Our Working Process" text="Step-by-Step Guide to Achieving Your Business Goals" />

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              number={index + 1}
              title={step.title}
              text={step.text}
              isOpen={openStep === index}
              onClick={() => setOpenStep(openStep === index ? -1 : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
