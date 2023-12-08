import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogs } from "../constants";
import NewsLetter from "../components/NewsLetter";

const Blog = () => {
  const { pathname } = useLocation();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const id = pathname.split("/")[2];

    const selectedBlog = blogs.find((item) => item.uid === parseInt(id));
    console.log(selectedBlog);

    if (selectedBlog) setBlog(selectedBlog);
  }, [pathname]);

  return (
    <>
      <Header radius=" xl:rounded-bl-full xl:rounded-br-full" />

      <div className="max-w-7xl mx-auto px-6 my-28 text-lg">
        <p>{blog?.date}</p>
        <p className="lg:text-4xl mt-3 font-semibold text-softprimary">
          {blog?.title}
        </p>
        <div className="grid grid-cols-2 gap-5 my-10">
          <div className="col-span-1">
            <p>{blog?.main_desc}</p>
          </div>
          <div className="col-span-1">
            <img
              src={blog?.image}
              className="h-80 object-cover object-center w-full"
              alt=""
            />
          </div>
        </div>

        {blog?.uid === 1 && (
          <div className="space-y-6">
            <p>
              There are several benefits to move away from fossil fuels and
              towards renewable energy. such as:
            </p>
            <p>
              <b>1. Energy Security: </b> <br />
              Moving away from fossil fuels reduces import dependencies implying
              countries have more control on price and availability of energy.
              This price stability utilimately translates into price of goods
              and services. Specifically in manufactruing countries this is
              beneficial as they could place their goods at a competitive price
              in the market if they could keep their cost of operation low.
            </p>

            <p>
              <b>2. Environmental impact: </b> <br />
              Renewable energy such as wind, solar, tidal, geo thermal have
              clost to zero impact on environment. This would result in lower
              contribution to country's carbon budget. When products are made
              utilizing renewable energy, it also translates into lower carbon
              footprint for the products resulting in overall lower carbon
              footprint across sectors and industries. This helps in
              decelerating climate change and addresses the duality of energy
              challenge
            </p>

            <p>
              <b>3. Affordability: </b> <br />
              Cost of renewables have decreased over the past few years due to
              economies of scale and government policy support across various
              nations which resulted in more research and innovation in
              renewables space. Affordability is expected to continue with more
              adapters and demand at times can also help in swaying policies
              away from fossil fuels.
            </p>

            <p>
              <b>4. Energy Accessibility: </b> <br />
              Fossil fuels such as coal and petroleum require expensive
              infrastructure to be built and are are resource intensive. This
              makes it difficult for rural and remote places to access energy
              and as a result we have millions across the world still relying on
              wooden pallets to cook. Depending on the geography, different
              renewable energy solutions can be deployed at comparitively lower
              price such as solar in arid zones, wind energy near the coast
              etc., which will help light rural and remote areas which is part
              of moving towards prosperity.
            </p>
          </div>
        )}

        {blog?.uid === 2 && (
          <div className="space-y-6">
            <p>
              The Paris Agreement, adopted in 2015, emphasized the role of
              market-based approaches in achieving emission reduction goals.
              Article 6 of the Paris Agreement provided a framework for
              countries to engage in emissions trading and other market
              mechanisms, ensuring a continued role for carbon credits in the
              evolving climate landscape. One can argue this was also a turning
              point and created Voluntary carbon markets. Companies and
              individuals, recognizing the urgency of climate action, are
              voluntarily offsetting their carbon footprints by purchasing
              carbon credits. This trend indicates a growing awareness of the
              need for collective responsibility in addressing climate change
              and achieving net-zero targets. Given that most standards in
              voluntary market as well require additionality tests to be
              performed, with more digital advancements its becoming easier to
              certify businesses for carbon credits generation and trading.
            </p>
            <p>
              As the world collectively aims for net-zero emissions, carbon
              credits have become an indispensable tool in the journey.
              Companies and nations can utilize carbon credits to offset their
              residual emissions, allowing for a balanced approach to achieving
              net-zero targets. In addition, with introduction of carbon tax and
              an informal carbon budget, there is an ever increasing demand for
              carbon credits while simultaneously monetarily supporting projects
              to contribute to a greener world.
            </p>
            <p>
              From its origins in the Kyoto Protocol to its present-day role in
              the net-zero narrative, the concept of carbon credits has evolved
              into a critical instrument in the global response to climate
              change. As we navigate the challenges of achieving net-zero
              emissions, carbon credits offer a pragmatic and flexible approach,
              fostering international collaboration, supporting sustainable
              practices, and contributing to a more sustainable and resilient
              future. The progress made so far signals a collective commitment
              to mitigating climate change and underscores the continued
              importance of carbon credits in our pursuit of a net-zero world.
            </p>
          </div>
        )}

        <img src={blog?.image_2} className="mt-5" alt="" />
      </div>

      <NewsLetter />

      <Footer />
    </>
  );
};

export default Blog;
