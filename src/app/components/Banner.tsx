import Container from "./Container";
import Button from "./Button";

export default function Banner() {
  return (
    <section>
      <Container>
        <div className="relative rounded-[45px] bg-light-pink p-8 md:p-16">
          <div className="flex flex-col gap-6 lg:max-w-[500px]">
            <h3 className="text-3xl font-medium">Let’s make things happen</h3>
            <p className="text-lg">
              Contact us today to learn more about how our digital marketing services can help your
              business grow and succeed online.
            </p>
            <div>
              <Button text="Get your free proposal" />
            </div>
          </div>

          <img
            src="/images/cta.svg"
            alt=""
            className="absolute right-16 top-1/2 hidden w-[300px] -translate-y-1/2 lg:block xl:w-[360px]"
          />
        </div>
      </Container>
    </section>
  );
}
