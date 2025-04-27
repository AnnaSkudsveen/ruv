import { Link } from "react-router-dom";
import Raufosslaget from "../../public/raufoss-laget.jpg";
import AllStarTeam from "../../public/All-star-team.png";
import Tribune from "../../public/tribune.jpg";

function Home() {
  return (
    <>
      <div className="mx-10 flex justify-center h-[600px]">
        <img
          src={Raufosslaget}
          alt="Bildet av raufossfotball feirer"
          className="h-full w-full object-cover object-top max-w-[1200px]"
        />
      </div>
      <section className="flex flex-col mt-5 gap-4 justify-center items-center">
        <h1 className="text-3xl text-[#dda520]">Velkommen</h1>
        <p className="max-w-[741px] text-center text-sm px-4 sm:px-6 lg:px-10">
          RUV er en forening av utflyttede raufossinger og andre sympatisører av
          Raufoss- fotballen. Vi vil gjennom vår virksomhet gi en håndsrekning
          til det viktige sosiale og trivselsmessige arbeid som gjøres for og
          blant ungdommen av Raufoss Idrettslag, spesielt når det gjelder
          fotballsporten.
        </p>
      </section>
      <section className="flex flex-col gap-5 items-center mt-10">
        <h2 className="font-medium">Hva er nytt i RUV?</h2>
        <div className="flex flex-col gap-5 md:flex-row md:gap-10 items-center justify-around w-full max-w-[600px]">
          <Link
            to="/33-år-i-2021"
            className="flex flex-col gap-3 items-center w-[250px] h-[300px]"
          >
            <img
              src={Tribune}
              alt="tegning av Raufossfotballens utflyttede venners allstars"
              className="h-[200px]"
            />
            <p className="text-xs text-gray-400">3. Januar 2025</p>
            <h3 className="text-black hover:text-[#9f7000] text-center">
              Raufossfotballens Utflyttede Venner 33 år i 2021
            </h3>
            <p className="text-xs text-gray-400">Av Thor Willy Granlund</p>
          </Link>
          <Link
            to="/ruv-prisen"
            className="flex flex-col gap-3 items-center justify-between w-[250px] h-full"
          >
            <img
              src={AllStarTeam}
              alt="tegning av Raufossfotballens utflyttede venners allstars"
              className="h-[200px] relative top-0"
            />
            <p className="text-xs text-gray-400">3. Januar 2025</p>
            <h3 className="text-black hover:text-[#9f7000] text-center">
              RUV-prisen og tidligere prisvinnere
            </h3>
          </Link>
        </div>
      </section>
      <section className="flex flex-col gap-5 items-center mt-10">
        <h2>Bildegalleri</h2>
      </section>
    </>
  );
}

export default Home;
