import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  return (
    <>
      <Header radius=" xl:rounded-bl-full xl:rounded-br-full" />

      <div className="max-w-7xl mx-auto px-6 my-28 text-lg">
        <p>06 Oct 2023</p>
        <p className="lg:text-4xl mt-3 font-semibold text-softprimary">
          Energy Transition and role of renewables in developing nations
        </p>
        <div className="grid grid-cols-2 gap-5 my-10">
          <div className="col-span-1">
            <p>
              World is currently facing a dual challenge - providing access to
              energy to all while reducing emissions to keep the planet away
              from tipping point and decelerate global warming. While developing
              nations have not contributed at a large scale to global warming in
              the past, most of them dispropotionally face the effects of global
              warming today in the form of rising temperatures, tropical zones
              converting to arid areas and in few cases resulting in mass
              migration and displacement of people. On the flip side, energy is
              crucial to uplift people from poverty and for developing nations
              to continue their development. Hence, they cannot reduce energy
              consumption at a time of economy boom and none should be forced to
              choose between economic prospertiy and future of the planet.
              Hence, energy transition is pivotal in our dually challenged
              world.
            </p>
          </div>
          <div className="col-span-1">
            <img
              src={require("../assets/blog_5.jpg")}
              className="h-80 object-cover object-center w-full"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-6">
          <p>
            There are several benefits to move away from fossil fuels and
            towards renewable energy. such as:
          </p>
          <p>
            <b>1. Energy Security: </b> <br />
            Moving away from fossil fuels reduces import dependencies implying
            countries have more control on price and availability of energy.
            This price stability utilimately translates into price of goods and
            services. Specifically in manufactruing countries this is beneficial
            as they could place their goods at a competitive price in the market
            if they could keep their cost of operation low.
          </p>

          <p>
            <b>2. Environmental impact: </b> <br />
            Renewable energy such as wind, solar, tidal, geo thermal have clost
            to zero impact on environment. This would result in lower
            contribution to country's carbon budget. When products are made
            utilizing renewable energy, it also translates into lower carbon
            footprint for the products resulting in overall lower carbon
            footprint across sectors and industries. This helps in decelerating
            climate change and addresses the duality of energy challenge
          </p>

          <p>
            <b>3. Affordability: </b> <br />
            Cost of renewables have decreased over the past few years due to
            economies of scale and government policy support across various
            nations which resulted in more research and innovation in renewables
            space. Affordability is expected to continue with more adapters and
            demand at times can also help in swaying policies away from fossil
            fuels.
          </p>

          <p>
            <b>4. Energy Accessibility: </b> <br />
            Fossil fuels such as coal and petroleum require expensive
            infrastructure to be built and are are resource intensive. This
            makes it difficult for rural and remote places to access energy and
            as a result we have millions across the world still relying on
            wooden pallets to cook. Depending on the geography, different
            renewable energy solutions can be deployed at comparitively lower
            price such as solar in arid zones, wind energy near the coast etc.,
            which will help light rural and remote areas which is part of moving
            towards prosperity.
          </p>

          <img src={require('../assets/blog_6.jpg')} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
