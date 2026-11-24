import Container from "./Container";

const logos = ["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"];

export default function Logos() {
  return (
    <section>
      <Container>
        {/* 3 في الصف على الموبايل و6 على الشاشات الكبيرة */}
        <div className="grid grid-cols-3 place-items-center gap-8 md:grid-cols-6">
          {logos.map((logo) => (
            <img key={logo} src={`/images/companies/${logo}.svg`} alt={logo} className="h-10" />
          ))}
        </div>
      </Container>
    </section>
  );
}
