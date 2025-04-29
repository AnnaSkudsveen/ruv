import Vinnere2023 from "/vinnere2023.jpg";
import vinnere from "../data/ruv-prisvinnere.json";
function Artikkel2() {
  return (
    <>
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-3 px-4 items-center mt-10 w-full">
          <h1 className="text-xl font-medium  lg:max-w-[800px]">
            RUV-prisen og tidligere prisvinnere
          </h1>
          <p className="text-sm max-w-[800px]">
            Foreningen har opprettet RUV-prisen som skal være oppmuntringspremie
            og støttetiltak til lag eller enkeltpersoner, primært innen de yngre
            årsklasser. Det er RUV’s intensjon at prisen skal henge høyt, og ved
            at RUV i 2003 opprettet et ungdomsfond (se senere), har praksis for
            utdeling av RUVprisen blitt noe endret, som lista over prisvinnere
            viser. Det har ikke alltid vært klare kandidater blant de aktive. Da
            har styret valgt å gi prisen til tillitsvalgte og frivillige som
            gjennom mange års innsats har lagt forholdene til rette, slik at de
            aktive kan utøve sin idrett. RUV-prisen var lenge en krystallvase
            med inskripsjon, men fra 2004 har den blitt markert med et
            keramikkfat laget av den anerkjente keramikeren Eva Vold som er
            raufossing og bosatt i Oslo. RUV-prisen deles fortrinnsvis ut på
            RUV’s årsmøter, men har ved noen anledninger også blitt utdelt på
            Raufoss Fotballs årsmøter. I 2001, 2003 og 2008 ble det ikke utdelt
            noen pris. Espen Haug er den eneste som har fått RUV-prisen to
            ganger – henholdsvis som spiller og trener.
          </p>
          <img
            src={Vinnere2023}
            alt="Siv Hege Aspelien, Styreleder Bjørn Morten Skudsveen og Kenneth Karlsen. Siv Hege fikk RUV pris for sin store dugnadsinnsats og som frivillig ildsjel i klubben i mange år, og Kenneth for entusiasme og jobb for å etablere og drive gatelaget til Raufoss."
            className="w-full max-w-[800px] h-[400px] md:h-[600px] object-cover"
          />
          <p className="text-xs text-gray-500 max-w-[800px]">
            Siv Hege Aspelien, Styreleder Bjørn Morten Skudsveen og Kenneth
            Karlsen. Siv Hege fikk RUV pris for sin store dugnadsinnsats og som
            frivillig ildsjel i klubben i mange år, og Kenneth for entusiasme og
            jobb for å etablere og drive gatelaget til Raufoss.
          </p>
          <div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-8  lg:mx-0 lg:max-w-[800px]">
            <h2 className="text-center md:text-left font-bold">
              Lista over prisvinnere ser slik ut:
            </h2>
            <ul className="flex flex-col gap-2">
              {vinnere.map((person, index) => (
                <li key={index}>
                  {person.date} – {person.name}: {person.description}.
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
export default Artikkel2;
