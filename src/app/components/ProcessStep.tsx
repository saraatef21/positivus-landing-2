type ProcessStepProps = {
  number: number;
  title: string;
  text: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function ProcessStep({ number, title, text, isOpen, onClick }: ProcessStepProps) {
  return (
    <div
      className={`rounded-[45px] border border-dark px-6 py-8 shadow-[0_5px_0_#191a23] md:px-16 md:py-10 ${
        isOpen ? "bg-pink" : "bg-light-pink"
      }`}
    >
      <button onClick={onClick} className="flex w-full items-center justify-between gap-4 text-left">
        <span className="flex items-center gap-4 md:gap-6">
          <span className="text-3xl font-medium md:text-6xl">0{number}</span>
          <span className="text-lg font-medium md:text-3xl">{title}</span>
        </span>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark bg-light-pink text-2xl md:h-14 md:w-14 md:text-4xl">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && <p className="mt-6 border-t border-black pt-6 text-lg">{text}</p>}
    </div>
  );
}
