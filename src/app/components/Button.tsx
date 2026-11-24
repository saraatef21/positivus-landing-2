type ButtonProps = {
  text: string;
  href?: string;
};

export default function Button({ text, href = "#contact" }: ButtonProps) {
  return (
    <a
      href={href}
      className="inline-block w-full rounded-2xl bg-dark px-9 py-5 text-center text-lg text-white hover:opacity-90 md:w-auto"
    >
      {text}
    </a>
  );
}
