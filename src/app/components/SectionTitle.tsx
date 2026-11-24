type SectionTitleProps = {
  title: string;
  text: string;
};

export default function SectionTitle({ title, text }: SectionTitleProps) {
  return (
    <div className="mb-10 flex flex-col items-center gap-6 text-center md:mb-20 md:flex-row md:text-left">
      <h2 className="shrink-0 rounded-md bg-pink px-2 text-4xl font-medium">{title}</h2>
      <p className="max-w-[580px] text-lg">{text}</p>
    </div>
  );
}
