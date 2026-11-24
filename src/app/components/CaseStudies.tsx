import Container from "./Container";
import SectionTitle from "./SectionTitle";

const cases = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export default function CaseStudies() {
  return (
    <section id="use-cases">
      <Container>
        <SectionTitle
          title="Case Studies"
          text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        {/* موبايل: تحت بعض — تابلت وأكبر: 3 أعمدة */}
        <div className="grid gap-8 rounded-[45px] bg-dark p-8 text-white md:grid-cols-3 md:p-16">
          {cases.map((text) => (
            <div
              key={text}
              className="flex flex-col gap-5 border-white md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
            >
              <p className="text-lg">{text}</p>
              <a href="#" className="text-xl text-pink hover:underline">
                Learn more ↗
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
