import Footer from "../layout/Footer";
import Header from "../layout/Header";
import blackDots from "../assets/black_dots.svg";
import treeBg from "../assets/tree_bg.png";
import treeWeb from "../assets/tree_web_03.png";
import treeMB from "../assets/tree.png";
import Icon1 from "../assets/icon_1.svg";
import Icon2 from "../assets/icon_2.svg";
import Icon3 from "../assets/icon_3.svg";
import Icon4 from "../assets/icon_4.svg";
import Bulb from "../assets/bulb.svg";
import Demo from "../components/Demo";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Header radius=" xl:rounded-bl-full xl:rounded-br-full" />
      {/* Top Section */}
      <div className="relative">
        <img src={blackDots} className="h-96 object-cover w-full" alt="" />

        <div className="max-w-5xl mx-auto px-10">
          <div className="absolute top-1/2 typing_container">
            <p className="xl:text-5xl md:text-4xl text-2xl font-bold tracking-wide">
              <span className="font-outline-1 leading-relaxed typing_anime_text">
                Partnering in your
              </span>
              <br />
              carbon credits <span className="text-softprimary">journey</span>
            </p>
            <p className="text-sm font-medium leading-6 mt-3">
              Your entire carbon credits journey in one platform from
              identifying carbon <br />
              credit opportunities till verification as per your chosen standard
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="relative">
        <img
          src={treeWeb}
          className="w-full hidden xl:flex object-cover absolute top-0"
          alt=""
        />
        <img
          src={treeMB}
          className="w-full  xl:hidden object-cover absolute top-0"
          alt=""
        />
        <div className=" z-10 relative  px-7">
          <div className="max-w-7xl mx-auto">
            {/* <h6 className="text-center font-bold xl:text-2xl text-primary lg:pt-20 flex items-center justify-center space-x-5 lg:space-x-24">
              <div className="w-0 h-0 border-t-0 border-b-[20px] lg:border-b-[180px] -rotate-90 border-[5px] border-transparent border-b-primary"></div>{" "}
              <span>Aligned with</span>
              <div className="w-0 h-0 border-t-0 border-b-[20px] lg:border-b-[180px] rotate-90 border-[5px] border-transparent border-b-primary"></div>{" "}
            </h6> */}
            <img
              src={require("../assets/partner.png")}
              alt=""
              className="pt-44 w-full px-7 "
            />
            {/* <div className="grid grid-cols-3 gap-2 mt-5">
              {[1, 2, 3].map((index) => (
                <div className="col-span-1 my-auto mx-auto" key={index}>
                  <img
                    src={require(`../assets/client_${index}.png`)}
                    className="object-contain w-32 lg:w-64"
                    alt=""
                  />
                </div>
              ))}
            </div> */}
          </div>

          <div className="max-w-7xl mx-auto mt-[100px] md:mt-[400px]">
            <div className="grid md:grid-cols-2 gap-5 mt-10 lg:mt-36 px-7">
              <div className="col-span-1">
                <h1 className="font-bold xl:text-6xl tracking-wide mb-8">
                  <span className="font-outline-2 leading-relaxed text-secondary">
                    Our
                  </span>{" "}
                  <br /> <span className="text-white">Solution</span>
                </h1>
                <p className="text-white xl:text-lg mb-8">
                  Sustaincred leverages AI and deep industry knowledge to
                  identify and support in verification of carbon credits for
                  SMEs in renewable energy sector.
                </p>

                <a
                  href={"#product"}
                  className="bg-secondary text-white px-5 py-2.5 rounded-full"
                >
                  Request Demo
                </a>
              </div>
              <div className="col-span-1">
                <img
                  src={require("../assets/solutions.png")}
                  className="m-auto h-72"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="max-w-7xl mx-auto">
            <div className="mt-32 px-7 ">
              <h1 className="font-bold text-right xl:text-5xl tracking-wide font-outline-2 leading-relaxed ">
                Our Approach
              </h1>
              <p className="text-black lg:text-white text-sm text-right mt-2">
                Four major steps underpinning our differentiated approach
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
                {[
                  {
                    icon: Icon1,
                    hover_icon: require("../assets/dark_icon_1.png"),
                    title: "Initial Data Consultation",
                    description:
                      "Collect basic data about your general business model",
                  },
                  {
                    icon: Icon2,
                    hover_icon: require("../assets/dark_icon_2.png"),
                    title: "Analysis",
                    description:
                      "Our state of the art algorithm decides if we could help you in identifying carbon credits.",
                  },
                  {
                    icon: Icon3,
                    hover_icon: require("../assets/dark_icon_3.png"),
                    title: "AI Data Extraction",
                    description:
                      "We leverage AI to perform calculations to understand the number of carbon credits being generated",
                  },
                  {
                    icon: Icon4,
                    hover_icon: require("../assets/dark_icon_4.png"),
                    title: "Internal Verification",
                    description:
                      "We perform multiple models and audit the numbers so that data is ready to be verified by your chosen standard",
                  },
                ].map((item, index) => (
                  <div
                    className="rounded-3xl group py-10 h-96 duration-300 custom-shadow px-7 sm:px-3 space-y-5 bg-white hover:bg-secondary transition"
                    key={index}
                  >
                    <img
                      src={item.icon}
                      className="h-10 group-hover:hidden transition-opacity mx-auto"
                      alt=""
                    />
                    <img
                      src={item.hover_icon}
                      className="h-10 group-hover:block group-hover:-mt-1 hidden mx-auto"
                      alt=""
                    />
                    <h6 className="text-center bg-primary group-hover:bg-darksecondary rounded-full text-white py-1.5">
                      {item.title}
                    </h6>
                    <p className="text-center group-hover:text-white">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* who are we */}
      <div
        className="grid sm:grid-cols-2 max-w-7xl  px-7 mx-auto mt-28"
        id="about"
      >
        <div className="col-span-1">
          {/* <div className="col-span-1 max-w-3xl ml-[30%]"> */}
          <h1 className="font-bold xl:text-5xl leading-relaxed mb-5">
            <span className="text-softprimary">Who</span> <br />
            are we?
          </h1>
          <p className="max-w-xl">
            We are a team of sustainability and software experts with a combined
            experience of over 25 years in the energy sector and software
            development. Our team is spread across the globe enabling a better
            time zone coordination across various time zones.
          </p>
        </div>
        <div className="col-span-1">
          <img src={require("../assets/who_we_are.png")} alt="" />
        </div>
      </div>

      {/* what do we do */}
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2  px-7 my-20">
          <div className="col-span-1">
            <img src={Bulb} className="h-80" alt="" />
          </div>
          <div className="col-span-1 max-w-xl my-auto text-right">
            <h1 className="font-bold xl:text-5xl leading-relaxed mb-5">
              <span className="text-softprimary">What</span> <br />
              do we do?
            </h1>
            <p>
              Sustain cred helps small medium business in renewable energy
              sector to measure their carbon credits and consult in the
              verification process to register them in voluntary carbon credit
              markets.
            </p>
          </div>
        </div>
      </div>

      <Slider />
      <Demo />
      <Footer />
    </>
  );
};

export default Home;
