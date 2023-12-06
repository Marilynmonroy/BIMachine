import Image from "next/image";

function Brands() {
  return (
    <section className="flex md:flex-row flex-col justify-center bg-surface-500">
      <div className="text-center justify-center">
        <div className="rounded-2xl pb-5">
          <h2 className="h2 text-3xl font-semibold">
            Conheça algumas marcas que{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
              confiam{" "}
            </span>
            na BIMachine
          </h2>
        </div>
        <hr className=" mx-auto my-4 bg-gray-100 " />
        <div className="flex h-11 gap-16 opacity-70">
          <Image
            src={"/assets/Intercity-300a6107.png"}
            alt={"Intercity"}
            width={200 || "auto"}
            height={200}
          />
          <Image
            src={"/assets/John_Deere-90e5d631.png"}
            alt={"John_Deere"}
            width={200 || "auto"}
            height={200}
          />
          <Image
            src={"/assets/Minu-ec47d19d.png"}
            alt={"Minu"}
            width={100 || "auto"}
            height={100}
          />
          <Image
            src={"/assets/Pompeia-59f6fb31.png"}
            alt={"Pompeia"}
            width={200 || "auto"}
            height={200}
          />
          <Image
            src={"/assets/Unimed-351d9436.png"}
            alt={"Unimed"}
            width={200 || "auto"}
            height={200}
          />
        </div>
        <hr className=" mx-auto my-4 bg-gray-100 " />
      </div>
    </section>
  );
}

export default Brands;
