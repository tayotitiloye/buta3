import Image from "next/image";

export default function page() {
  return (
    <section>
      <div className="  py-[100px] px-5 md:px-10 overflow-hidden">
        <div className=" ">
          <div className=" flex flex-col gap-2 md:gap-0 px-4 md:flex-row items-center justify-center w-full h-[300px] md:px-10 bg-gray-200 my-3 md:my-5">
            <h1 className=" text-xl md:text-3xl font-serif md:flex-[1]">
              How it all <br className="hidden md:block" />
              {/* <span className=" font-semibold italic text-4xl bg-gradient-to-b from-orange-300 to-orange-500 text-transparent bg-clip-text"> */}
              <span className=" font-semibold italic text-orange-500 text-4xl ">
                started
              </span>
            </h1>
            Butatech Solution Ltd was founded in Nigeria in 2013 to offer
            excellent services to its discerning customers. The company&apos;s
            founders identified the need to provide world-class standards to
            meet the ever-evolving demands of its customers. The company was
            created as a moderately sized enterprise with a focus on delivering
            exceptional service to its clients.
            <p>
              As of 2018, the company&apos;s core competence was in supplying
              construction materials. However, the founders recognized a gap in
              the construction section. In a bid to bridge this gap, they
              established First Butatech Project Limited. While Butatech
              continued to meet the demand for supply of construction materials,
              First Butatech Project Limited has been providing construction
              services to its clients.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row my-[50px] md:my-[80px] ">
            <div className="md:flex-[1] relative w-[300px] h-[300px] rounded-lg">
              <Image
                src={"/butacon/50.jpg"}
                fill
                className=" object-fill rounded-lg"
                alt="image"
              />
            </div>

            <div className="md:flex-[2] flex flex-col gap-2 md:gap-4 px-4 md:px-10">
              <h2 className=" capitalize text-2xl md:text-3xl font-semibold">
                construction
              </h2>
              <p>
                First Butatech Project Limited is a Nigerian company that
                specializes in providing civil engineering construction
                services. We have extensive knowledge of both local and
                international standards, and we have a team of experienced
                engineers, architects, quantity surveyors, and project managers
                who are well-equipped to handle any project.
              </p>
              <p>
                Our team at First Butatech Project Limited is made up of a group
                of skilled and seasoned professionals who specialize in civil,
                structural, and building engineering. We provide services that
                range from project conceptualization, design, management, and
                evaluation, to construction.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 my-5 md:my-10 bg-gray-200 rounded-lg p-2 md:p-4">
            <div className=" md:flex-[1] p-5">
              <h2 className="capitalize text-xl md:text-2xl mb-3">
                We are versatile, we cover a lot of grounds
              </h2>
              First Butatech Project Limited is a locally-owned engineering
              company that offers comprehensive services in construction,
              mining, procurement, engineering, and consultancy. We specialize
              in serving the energy, communications, urban infrastructure, and
              environmental sectors. Our company operates with a strong
              commitment to integrity, honesty, and fairness. We have all the
              necessary facilities, tools, and highly skilled personnel to
              handle all aspects of architectural work, construction,
              procurement, and maintenance services.
            </div>
            <div className="flex flex-col gap-2 md:gap-4 md:flex-[1] p-5">
              <h2 className=" capitalize text-xl md:text-2xl">
                we are on a mission
              </h2>
              <p>
                We aim to become Nigeria&apos;s leading provider of eco-friendly
                engineering solutions that deliver lasting value to our clients.
              </p>

              <h2 className="capitalize text-xl md:text-2xl">our value</h2>
              <p>
                Our success is achieved through diligent, passionate, and
                efficient service delivery with unwavering integrity and
                relentless pursuit of excellence.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-2 md:gap-0 px-4 md:flex-row items-center justify-center w-full h-[300px] md:px-10 my-[100px] md:my-5">
            <h1 className=" text-3xl font-serif md:flex-[1]">
              Supplies of <br />
              {/* <span className=" font-semibold italic text-4xl bg-gradient-to-b from-orange-300 to-orange-500 text-transparent bg-clip-text"> */}
              <span className=" font-semibold italic text-orange-500 text-4xl px-1">
                construction
              </span>{" "}
              <br />
              materials
            </h1>
            <p className=" md:flex-[2] md:px-10">
              Our procurement division specializes in supplying high-quality
              civil construction materials and products, such as bitumen,
              diesel, granite stones, and sands, to individuals, corporate
              organizations, and government agencies. Our operations are guided
              by a high level of integrity, honesty, and fairness. Over the
              years, we have been partnering with many asphalt companies,
              construction firms, and government agencies as a reliable and
              trusted provider of construction materials.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 my-5 md:my-10 bg-gray-200 rounded-lg">
            <div className=" flex-[1] flex flex-col gap-2 p-5">
              <h2 className="capitalize text-xl md:text-2xl">our commitment</h2>
              Our commitment to our clients is to provide the best possible
              service from every angle. We prioritize client satisfaction above
              all else. Our ultimate goal is to ensure our customers are always
              content with our products and services. We achieve this by
              delivering materials and products with strict adherence to the
              specifications provided and in the shortest possible time. We
              strive not only to meet but to exceed our customers&apos;
              expectations.
              <h2 className="capitalize text-xl md:text-2xl">our focus</h2>
              <p>
                Our goal is to become the most dependable provider of
                construction materials for civil works in West Africa
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 flex-[1] p-5">
              <h2 className="capitalize text-xl md:text-2xl">our mission</h2>
              <p>
                Our goal is to build strong and lasting relationships with our
                customers. We aim to exceed their expectations by providing
                high-quality materials or products at a fair and competitive
                price while ensuring quick delivery.
              </p>
              <p>
                Our strategy to achieve this is to always be attentive to their
                needs, and continuously improve our services, turnaround time,
                and commitment to excellence. We strongly believe that our
                philosophy will contribute to our customers&apos; success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
