import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <section>
      <Container>
        {/* موبايل: تحت بعض — لابتوب: الكلام شمال والصورة يمين */}
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <h1 className="text-4xl font-medium md:text-6xl">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg md:text-xl">
              Our digital marketing agency helps businesses grow and succeed online through a range
              of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <div>
              <Button text="Book a consultation" />
            </div>
          </div>

          <img src="/images/hero.svg" alt="" className="w-full max-w-[600px] lg:w-1/2" />
        </div>
      </Container>
    </section>
  );
}
