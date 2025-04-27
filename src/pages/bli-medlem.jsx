import MedlemsBevis1989 from "../../public/RUV-Medlemsbevis-1989.jpg";

function BliMedlem() {
  return (
    <section className="flex flex-col gap-6 items-center mt-10  mx-10">
      <h1 className="text-xl text-black ">Bli medlem i dag!</h1>

      <div className="flex flex-col gap-5 max-w-full md:flex-row-reverse md:gap-10 items-center md:justify-around ">
        <img
          src={MedlemsBevis1989}
          alt=""
          className="h-[400px] w-auto object-cover"
        />
        <div className="max-w-[741px] h-auto flex flex-col justify-between gap-5">
          <p>
            Som medlem vil du være en del av en gjeng utflyttede raufossinger og
            andre sympatisører av Raufossfotballen.
          </p>
          <p>
            Vi har mye telefonisk kontakt og vanligvis ett styremøte i året.
            Årsmøtet vårt er basert på sosialt samvær og gjerne med en eller
            flere foredragsholdere med tilknytning til Raufoss-samfunnet.
            Driften er meget nøktern, og ved hjelp av bl.a. gratis møtelokaler,
            foredragsholdere uten honorar og endring av innkallinger/ referater
            fra brevpost til e-post, er driftskostnadene lave.
          </p>
          <p>Årskontigent på : vippses til RUV Kontigent - #589773</p>
        </div>
      </div>
    </section>
  );
}

export default BliMedlem;
