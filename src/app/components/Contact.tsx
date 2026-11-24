"use client"; // عشان بنستخدم onSubmit

import Container from "./Container";
import SectionTitle from "./SectionTitle";

// شكل خانات الكتابة (مستخدم 3 مرات تحت)
const inputStyle = "w-full rounded-2xl border border-black bg-white px-7 py-4 text-lg";

export default function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // يمنع الصفحة إنها تعمل reload
    alert("Thanks! Your message has been sent.");
  }

  return (
    <section id="contact">
      <Container>
        <SectionTitle title="Contact Us" text="Connect with Us: Let's Discuss Your Digital Marketing Needs" />

        <div className="relative overflow-hidden rounded-[45px] bg-light-pink px-6 py-10 md:px-24 md:py-16">
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6 xl:max-w-[556px]">
            <div className="flex gap-8 text-lg">
              <label className="flex items-center gap-3">
                <input type="radio" name="type" defaultChecked className="h-6 w-6 accent-pink" />
                Say Hi
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="type" className="h-6 w-6 accent-pink" />
                Get a Quote
              </label>
            </div>

            <label className="flex flex-col gap-1">
              Name
              <input type="text" placeholder="Name" className={inputStyle} />
            </label>

            <label className="flex flex-col gap-1">
              Email*
              <input type="email" placeholder="Email" required className={inputStyle} />
            </label>

            <label className="flex flex-col gap-1">
              Message*
              <textarea placeholder="Message" rows={6} required className={inputStyle} />
            </label>

            <button type="submit" className="rounded-2xl bg-dark py-5 text-lg text-white hover:opacity-90">
              Send Message
            </button>
          </form>

          {/* الرسمة بتظهر في الشاشات الكبيرة بس */}
          <img
            src="/images/contact.svg"
            alt=""
            className="absolute -right-36 top-1/2 hidden -translate-y-1/2 xl:block"
          />
        </div>
      </Container>
    </section>
  );
}
