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
            <p className=" md:flex-[2] md:px-10">
              Butatech Solution Ltd was incorporated under the Laws of the
              Federal Republic of Nigeria in 1996 following a desire to embark
              on the objective of using the benefit of a moderately-sized
              company to meet the ever-changing needs of a sophisticated
              clientele that is no longer satisfied with mediocrity, and
              standards that are lower than world class.{" "}
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
              <h2 className=" capitalize text-xl md:text-2xl font-semibold">
                construction
              </h2>
              <p>
                FIRST BUTATECH PROJECT LIMITED offer civil engineering
                construction services in the area of Building/Civil/Structural
                Engineering practices in Nigeria with clear knowledge of local
                and international standards and experience.
              </p>
              <p>
                We have a team of experienced and seasoned engineers,
                architects, quantity surveyors and project managers in our team.
              </p>
              <p>
                FIRST BUTATECH PROJECT LIMITED is a consortium of engineers with
                interests in civil, structural and building engineering. Our
                interest includes projects conceptualization, design,
                management, evaluation and construction.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 my-5 md:my-10 bg-gray-200 rounded-lg p-2 md:p-4">
            <div className=" md:flex-[1] p-5">
              <h2 className="capitalize text-xl md:text-2xl mb-3">
                We are versatile, we cover a lot of grounds
              </h2>
              First Butatech Project Limited is an indigenous multi-disciplinary
              engineering company providing integrated one-stop services
              covering Construction, Mining, Procurement, Engineering Services
              as well as consultancy and advisory services to the energy sector,
              communications sector, urban infrastructure and the environment.
              Our operations and actions are guided by high level of integrity,
              honesty and fairness. We are equipped with requisite facilities,
              tools and intelligent, dedicated and highly skilled man-power to
              carry out total architectural works, construction, procurement,
              and maintenance services.
            </div>
            <div className="flex flex-col gap-2 md:gap-4 md:flex-[1] p-5">
              <h2 className=" capitalize text-xl md:text-2xl">
                we are on a mission
              </h2>
              <p>
                we aim To be the one-stop engineering and construction solutions
                provider in Nigeria through the creation of
                environmental-friendly engineering masterpieces that provide
                lasting deep local value to our clients.
              </p>
              <h2 className="capitalize text-xl md:text-2xl">our value</h2>
              <p>
                Our approach to success is through due diligent in discharging
                of services, with passion, integrity, efficiently and
                effectively pursuing the determination to achieve the best.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-2 md:gap-0 px-4 md:flex-row items-center justify-center w-full h-[300px] md:px-10 my-[100px] md:my-5">
            <h1 className=" text-3xl font-serif md:flex-[1]">
              Supplies of
              {/* <span className=" font-semibold italic text-4xl bg-gradient-to-b from-orange-300 to-orange-500 text-transparent bg-clip-text"> */}
              <span className=" font-semibold italic text-orange-500 text-4xl px-1">
                construction
              </span>{" "}
              <br />
              materials
            </h1>
            <p className=" md:flex-[2] md:px-10">
              Our procurement arm specializes in providing quality civil
              construction materials and products such as Bitumen, Diesel ,
              Granite stones and Sands to individuals, Corporate Organizations
              and Government Agencies.Our operations and actions are guided by
              high level of ntegrity, honesty and fairness. We have been partner
              in progress with many Asphalt Companies, Construction Companies
              and Government Agencies for many years.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 my-5 md:my-10 bg-gray-200 rounded-lg">
            <div className=" flex-[1] flex flex-col gap-2 p-5">
              <h2 className="capitalize text-xl md:text-2xl">our commitment</h2>
              We are committed to delivering the very best to our clients from a
              360 degree perspective having at the back of our mind, client
              satisfaction is of utmost importance. Our greatest goal is to keep
              our customers happy always through the supply and delivery of
              products or materials in strict accordance to the specifications
              given to us within the shortest possible time, such that we do not
              only meet up, but exceed our customers&apos; expectations.
              <h2 className="capitalize text-xl md:text-2xl">our focus</h2>
              <p>
                Our target is to be the most reliable supplier of civil
                construction materials in West Africa
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 flex-[1] p-5">
              <h2 className="capitalize text-xl md:text-2xl">our mission</h2>
              <p>
                To always establish a long lasting relationships with customers
                and continually improve on our reputations by exceeding their
                expectations and gaining their trust through exceptional quick
                delivery of quality materials or products at a fair and
                competitive price
              </p>
              <p>
                Our ultimate strategy to achieve our mission is by being
                sensitive, and consistently improving our services, turn-around
                time and commitment towards excellence which will contribute to
                customer&apos;s success.Our Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
