type ServiceCardProps = {
  title1: string;
  title2: string;
  image: string;
  color: "light" | "pink" | "dark"; 
};

export default function ServiceCard({ title1, title2, image, color }: ServiceCardProps) {
  let cardBg = "bg-light-pink";
  let titleBg = "bg-pink";

  if (color === "pink") {
    cardBg = "bg-pink";
    titleBg = "bg-white";
  }

  if (color === "dark") {
    cardBg = "bg-dark";
    titleBg = "bg-white";
  }

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-[45px] border border-dark p-8 shadow-[0_5px_0_#191a23] xl:p-12 ${cardBg}`}
    >
      <div className="flex flex-col justify-between gap-16 self-stretch">
        <h3 className="text-xl font-medium md:text-3xl">
          <span className={`block w-fit rounded-md px-2 ${titleBg}`}>{title1}</span>
          <span className={`block w-fit rounded-md px-2 ${titleBg}`}>{title2}</span>
        </h3>

        <a href="#" className={`flex items-center gap-4 text-xl ${color === "dark" ? "text-white" : ""}`}>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              color === "dark" ? "bg-white text-dark" : "bg-dark text-pink"
            }`}
          >
            ↗
          </span>
          <span className="hidden sm:inline">Learn more</span>
        </a>
      </div>

      <img src={`/images/services/${image}`} alt="" className="w-24 sm:w-40 lg:w-32 xl:w-52" />
    </div>
  );
}
