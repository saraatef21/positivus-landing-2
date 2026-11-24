type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export default function TeamCard({ name, role, image, bio }: TeamCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-[45px] border border-dark bg-white p-8 shadow-[0_5px_0_#191a23]">
      <div className="flex items-start justify-between">
        <div className="flex items-end gap-5">
          <img src={`/images/team/${image}`} alt={name} className="h-24 w-24" />
          <div>
            <h3 className="text-xl font-medium">{name}</h3>
            <p>{role}</p>
          </div>
        </div>

        <a
          href="#"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-pink"
        >
          in
        </a>
      </div>

      <hr />

      <p className="text-lg">{bio}</p>
    </div>
  );
}
