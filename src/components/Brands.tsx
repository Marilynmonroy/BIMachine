import Image from "next/image";

function Brands() {
  return (
    <section className="flex flex-col justify-center items-center pt-10 md:py-20">
      <div className="text-center w-full max-w-5xl px-4">
        {/* Título */}
        <div className="rounded-2xl pb-5">
          <h2 className="h2 text-2xl md:text-4xl font-semibold">
            Conheça algumas marcas que{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent">
              confiam{" "}
            </span>
            na BIMachine
          </h2>
        </div>

        {/* Línea divisoria */}
        <hr className="mx-auto my-4 w-4/5 border-gray-300" />

        {/* Contenedor de marcas con FLEXBOX */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <Image
            src="/assets/Intercity-300a6107.png"
            alt="Intercity"
            width={150}
            height={150}
            className="object-contain max-w-full h-auto"
          />
          <Image
            src="/assets/John_Deere-90e5d631.png"
            alt="John Deere"
            width={150}
            height={150}
            className="object-contain max-w-full h-auto"
          />
          <Image
            src="/assets/Minu-ec47d19d.png"
            alt="Minu"
            width={100}
            height={100}
            className="object-contain max-w-full h-auto"
          />
          <Image
            src="/assets/Pompeia-59f6fb31.png"
            alt="Pompeia"
            width={150}
            height={150}
            className="object-contain max-w-full h-auto"
          />
          <Image
            src="/assets/Unimed-351d9436.png"
            alt="Unimed"
            width={150}
            height={150}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Línea divisoria */}
        <hr className="mx-auto my-4 w-4/5 border-gray-300" />
      </div>
    </section>
  );
}

export default Brands;
