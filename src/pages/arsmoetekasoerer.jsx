import arsmoter from "../data/arsmoter.json";

function aarsmoeter() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col gap-3 px-4 items-center mt-10 w-full lg:max-w-[800px]">
        <h2 className="text-center md:text-left font-bold">
          Årsmøtekåsører/tema:
        </h2>
        <ul className="flex flex-col gap-2">
          {arsmoter.map((reason, index) => (
            <li key={index}>
              {reason.date} – {reason.name}: {reason.description}.
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default aarsmoeter;
