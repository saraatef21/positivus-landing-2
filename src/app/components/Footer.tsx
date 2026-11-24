import Container from "./Container";

const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
const socials = ["in", "f", "X"];

export default function Footer() {
  return (
    <footer className="mt-20 lg:mt-32">
      <Container>
        <div className="rounded-t-[45px] bg-dark px-6 py-12 text-white md:px-16">
          {/* اللوجو + اللينكات + السوشيال */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <img src="/images/logo-white.svg" alt="Positivus" className="h-8" />

            <nav className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
              {links.map((link) => (
                <a key={link} href="#" className="text-lg underline">
                  {link}
                </a>
              ))}
            </nav>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-dark"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* بيانات التواصل + الاشتراك */}
          <div className="mt-12 flex flex-col gap-10 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-5 text-lg">
              <h3 className="w-fit rounded-md bg-pink px-2 text-xl font-medium text-black">Contact us:</h3>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl bg-[#292a32] p-8 md:flex-row md:p-14">
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-white bg-transparent px-7 py-5 text-lg placeholder:text-white"
              />
              <button className="rounded-2xl bg-pink px-9 py-5 text-lg text-black">Subscribe to news</button>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white pt-12 text-lg md:flex-row md:gap-10">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
