import { Link } from "react-router-dom";
import Tribune from "/tribune.jpg";
import AllStarTeam from "/All-star-team.png";
import vinnere from "../data/ruv-prisvinnere.json";
import onsdagsKaffe from "/Bilde1.png";
import arsmoter from "../data/arsmoter.json";
import ungdomsfond from "../data/ngdomsfond.json";
import aeresmedlemmer from "/Bilde2.png";

function Artikkel1() {
  return (
    <>
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 ">
        <section className="flex flex-col gap-5 px-4 items-center mt-10 w-full lg:max-w-[800px]">
          <h1 className="text-xl font-medium  ">
            Raufossfotballens Utflyttede Venner (RUV) 33 år i 2021
          </h1>
          <img src={Tribune} alt="" className="w-full max-w-[800px] " />
          <p className="text-gray-600 text-xs italic">
            Av Thor Willy Granlund (2021)– redigert av Bjørn Morten Skudsveen
            2025
          </p>
          <div className="flex flex-col gap-3 px-4 sm:px-6 lg:px-8  lg:mx-0 lg:max-w-[800px]">
            <h2 className="text-center md:text-left font-bold">Hva er RUV?</h2>
            <p className="text-base w-full max-w-[800px]">
              En herreklubb av pensjonister som sitter på Theaterkaféen i Oslo,
              drikker vin og mener mye om Raufoss Fotball? Nei RUV er slett
              ingen «Gutteklubben Grei», men en venneforening med sterk
              tilknytning til Raufoss og en genuin interesse for
              raufossfotballen. Vi har mye telefonisk kontakt og vanligvis ett
              styremøte i året. Årsmøtet vårt er basert på sosialt samvær og
              gjerne med en eller flere foredragsholdere med tilknytning til
              Raufoss-samfunnet. Driften er meget nøktern, og ved hjelp av bl.a.
              gratis møtelokaler, foredragsholdere uten honorar og endring av
              innkallinger/referater fra brevpost til e-post, er
              driftskostnadene lave.
            </p>
            <h2 className="text-center md:text-left font-bold">
              Stiftelsesmøte
            </h2>
            <p className="text-base w-full max-w-[800px]">
              Den 17. februar 1988 ble det avholdt stiftelsesmøte for RUV i
              BUL’s lokaler i Nordal Bruns gate i Oslo. Halfdan Hegtun hadde
              lenge gått «svanger» med idéen om å opprette RUV, og han tok
              sammen med Vegard Østlien initiativet til stiftelsen av
              foreningen. Det konstituerte styret hadde denne sammensetningen;
              Halfdan Hegtun, Vegard Østlien, Tom Løkken, Thor Næss og Odd
              Andersen. Hegtun, Næss og Andersen har dessverre gått bort.
            </p>
            <h2 className="text-center md:text-left font-bold">
              Foreningens intensjoner
            </h2>
            <p className="text-base w-full max-w-[800px]">
              RUV vil gjennom sin virksomhet gi en håndsrekning til det viktige
              sosiale og trivselsmessige arbeid som gjøres for og blant
              ungdommen av Raufoss Idrettslag, spesielt når det gjelder
              fotballsporten. Styret skal holde seg orientert om aktuelle
              kandidater til premier, stipender og lignende, og styret kan også
              gi midler eller premier til andre grener innen Raufoss Idrettslag
              som for eksempel skisport, friidrett og lignende. Det skorter med
              andre ord ikke på foreningens ambisjoner. RUV-prisen og
              prisvinnere Foreningen har opprettet RUV-prisen som skal være
              oppmuntringspremie og støttetiltak til lag eller enkeltpersoner,
              primært innen de yngre årsklasser. Det er RUV’s intensjon at
              prisen skal henge høyt, og ved at RUV i 2003 opprettet et
              ungdomsfond (se senere), har praksis for utdeling av RUVprisen
              blitt noe endret, som lista over prisvinnere viser. Det har ikke
              alltid vært klare kandidater blant de aktive. Da har styret valgt
              å gi prisen til tillitsvalgte og frivillige som gjennom mange års
              innsats har lagt forholdene til rette,slik at de aktive kan utøve
              sin idrett. RUV-prisen var lenge en krystallvase med inskripsjon,
              men fra 2004 har den blitt markert med et keramikkfat laget av den
              anerkjente keramikeren Eva Vold som er raufossing og bosatt i
              Oslo. RUV-prisen deles fortrinnsvis ut på RUV’s årsmøter, men har
              ved noen anledninger også blitt utdelt på Raufoss Fotballs
              årsmøter. I 2001, 2003 og 2008 ble det ikke utdelt noen pris.
              Espen Haug er den eneste som har fått RUV-prisen to ganger –
              henholdsvis som spiller og trener.
            </p>
            <h2 className="text-center md:text-left font-bold">
              RUV-prisen og prisvinnere
            </h2>
            <ul className="flex flex-col gap-2">
              {vinnere.map((person, index) => (
                <li key={index}>
                  {person.date} – {person.name}: {person.description}.
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-center">
              <img
                src={onsdagsKaffe}
                alt=""
                className=" w-[250px] sm:w-[400px] object-fill"
              />
            </div>
            <h2 className="text-center md:text-left font-bold">
              Styresammensetning, medlemstall og Årsmøtet{" "}
            </h2>
            <p className="text-base w-full max-w-[800px]">
              RUV-styret har i 2024 denne sammensetning;
            </p>

            <div className="flex gap-[118px]">
              <p>Leder:</p>
              <p>Bjørn Morten Skudsveen</p>
            </div>
            <div className="flex gap-10">
              <p>Styremedlemmer</p>
              <p>
                Jan Drengsrud, Guri Halvorsrud, Lasse Alexander Carlsen, Amanda
                Marie Tandsether og Martine Solbakken.
              </p>
            </div>

            <h2 className="text-center md:text-left font-bold">
              Æresmedlemmer:
            </h2>
            <p className="text-base w-full max-w-[800px]">
              Halfdan Hegtun ble i 2000 utnevnt til æresmedlem, og Leif Frode
              Onarheim ble utnevnt til vårt 2. æresmedlem i 2011. RUV utnevnte i
              2022 to nye æresmedlemmer; Thor Willy Granlund og Vegard Østlien.
              Pr 31.12.2024 hadde vi 82 medlemmer i tillegg til vårt æresmedlem.
              Hovedtyngden av medlemmene har tilhold på Østlandet og rundt
              Oslofjorden, men vi har også medlemmer i både Sverige, Polen og
              USA. Årsmøtet er RUV’s besluttende organ, og siden stiftelsesmøtet
              i 1988 har de fleste årsmøtene blitt avholdt i Nordeas lokaler på
              Majorstua, og i de siste årene i henholdsvis Paretos og Arctics
              lokaler i Vika. Entusiastiske medlemmer har hele tiden stilt
              gratis møtelokaler til foreningens disposisjon. Vi har egen side
              på Facebookside med 550 følgere per august 2021. I tillegg mottar
              nå de fleste av våre medlemmer innkallinger og referater via
              e-post. Foreningens nøkterne pengebruk har ført til at vi har
              kunnet overføre hele 40 000 kroner til Ungdomsfondet samt kr 10
              000 som bidrag til jubileumsboka til Raufoss Fotball, 100-årsgave
              (All Star team tegnet av Herbjørn Skogstad) samt midler til en del
              andre tiltak innen fotballen på Raufoss. På årsmøtet samles
              utflyttede raufossinger i alle aldre Vi kan ikke legge skjul på at
              det er en overvekt av eldre blant våre medlemmer, og mange har
              ikke bodd på Raufoss på 50 år eller mer. Foreningen har for øvrig
              endret vedtektene slik at sympatisører med Raufoss Fotball kan bli
              medlemmer. Våre årsmøter er en sosial happening med bevertning og
              mimring om store og små hendelser på Raufoss, og etter det
              ordinære årsmøtet pleier vi å dele ut aktuelle priser før vi
              avslutter med ett eller flere foredrag – oftest med
              foredragsholdere med tilknytning til Raufoss. Årsmøtene har også
              hatt besøk av mange lokale forfattere som har presentert sine
              bøker. I 2020 og i 2021 måtte RUV for første gang avlyse vårt
              årsmøte pga koronasituasjonen.
            </p>
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
            <div className="w-full flex justify-center">
              <img
                src={aeresmedlemmer}
                alt=""
                className=" w-[250px] sm:w-[400px] object-fill"
              />
            </div>

            <p className="text-base w-full max-w-[800px]">
              Det er umulig å skrive om RUV uten å nevne foreningens mesén; Leif
              Frode Onarheim, sønn av Frode Onarheim som var direktør ved RA i
              perioden1950-1962. Leif Frode Onarheim er født i 1934 og bodde på
              Raufoss til familien flyttet til Hamar i 1940. Familien bodde der
              til 1946, og kom etter hvert tilbake til Raufoss. Etter endt
              artium på Gjøvik i 1953, flyttet Leif Frode fra Raufoss for å
              studere. Nettopp derfor er det enestående at han i 2001 og 2007
              donerte henholdsvis 60- og 40 000 kroner til RUV med ønske om at
              vi oppretter et ungdomsfond. Han ga styret fullmakt til å forvalte
              fondet med mandat om at «… midler fra fondet kan gis til tiltak og
              formål eller treningsstipend i tilknytning til barneog
              ungdomsidretten på Raufoss …»
            </p>

            <ul className="flex flex-col gap-2">
              {ungdomsfond.map((award, index) => (
                <li key={index}>
                  {award.year}: {award.recipient} - kr {award.amount}
                  {award.notes && <>. ({award.notes})</>}
                </li>
              ))}
            </ul>
            <p>2018: Fondet er nå tømt og avviklet </p>

            <h2 className="text-center md:text-left font-bold">
              Visjoner for framtida
            </h2>
            <p className="text-base w-full max-w-[800px]">
              Økonomisk vanskelige tider rammer nå norsk idrett, og
              sponsormarkedet har blitt trangt. Klubbene slanker sine
              spillerstaller samtidig som spillerlønningene reduseres. Også
              Raufoss Fotball har merket den nye økonomiske virkeligheten, og
              tida for å kjøpe eller leie kostbare spillere er nok over for
              klubber på Raufoss’ økonomiske nivå. Egenutvikling og rekruttering
              av yngre spillere blir derfor en viktig faktor for mindre klubber
              som vil henge med i toppfotballen (2. divisjon eller høyere), og
              en slik strategi vil også skape identitet og lojalitet til
              klubben. Raufoss Fotball har et stort og entusiastisk
              støtteapparat, og så vel de frivillige som de aktive utviser en
              fantastisk dugnadsånd. Vi håper derfor at NFF legger forholdene
              til rette for klubbene og reduserer noe på kravene til
              toppfotballen slik at Raufoss fortsatt kan være liten blant de
              store. Nammo Stadion er i ferd med å bli et praktanlegg og sammen
              med den nye Storhallen har vi stor tro på framtida. RUV’s
              beskjedne bidrag utgjør neppe noen forskjell, men vi håper at vi
              også framover kan utgjøre en liten motivasjonsfaktor for vår kjære
              klubb.
            </p>

            <p className="text-base w-full max-w-[800px]">
              Etter at denne artikkelen ble skrevet, har Æresmedlemmene , Leif
              Frode Onarheim og Thor-Willy Granlund gått bort
            </p>
          </div>
          <img src={AllStarTeam} alt="" className=" lg:max-w-[800px] w-full" />
        </section>
      </div>
    </>
  );
}
export default Artikkel1;
