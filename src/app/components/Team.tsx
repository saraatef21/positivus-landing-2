import Container from "./Container";
import SectionTitle from "./SectionTitle";
import TeamCard from "./TeamCard";
import Button from "./Button";

export default function Team() {
  return (
    <section>
      <Container>
        <SectionTitle
          title="Team"
          text="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <TeamCard
            name="John Smith"
            role="CEO and Founder"
            image="john-smith.png"
            bio="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          />
          <TeamCard
            name="Jane Doe"
            role="Director of Operations"
            image="jane-doe.png"
            bio="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          />
          <TeamCard
            name="Michael Brown"
            role="Senior SEO Specialist"
            image="michael-brown.png"
            bio="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          />
          <TeamCard
            name="Emily Johnson"
            role="PPC Manager"
            image="emily-johnson.png"
            bio="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          />
          <TeamCard
            name="Brian Williams"
            role="Social Media Specialist"
            image="brian-williams.png"
            bio="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          />
          <TeamCard
            name="Sarah Kim"
            role="Content Creator"
            image="sarah-kim.png"
            bio="2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
          />
        </div>

        <div className="mt-10 flex justify-end">
          <Button text="See all team" href="#" />
        </div>
      </Container>
    </section>
  );
}
