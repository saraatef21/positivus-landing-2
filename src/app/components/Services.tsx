import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services">
      <Container>
        <SectionTitle
          title="Services"
          text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />

        {/* كارت في الصف على الموبايل والتابلت، و2 على اللابتوب */}
        <div className="grid gap-10 lg:grid-cols-2">
          <ServiceCard title1="Search engine" title2="optimization" image="seo.png" color="light" />
          <ServiceCard title1="Pay-per-click" title2="advertising" image="ppc.png" color="pink" />
          <ServiceCard title1="Social Media" title2="Marketing" image="social-media.png" color="dark" />
          <ServiceCard title1="Email" title2="Marketing" image="email.png" color="light" />
          <ServiceCard title1="Content" title2="Creation" image="content.png" color="pink" />
          <ServiceCard title1="Analytics and" title2="Tracking" image="analytics.png" color="dark" />
        </div>
      </Container>
    </section>
  );
}
