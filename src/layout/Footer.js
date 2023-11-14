import { Link } from "react-router-dom";
import whiteDots from "../assets/white_dots.svg";
import whiteLogo from "../assets/white_logo.svg";
import { GrLinkedinOption } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-softprimary relative overflow-hidden">
      <img src={whiteDots} className="absolute bottom-0" alt="" />
      <div className="container mx-auto lg:px-0 px-7 z-50 relative">
        {/* logo */}
        <div className="rounded-full">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 py-10">
            <div className="col-span-1">
              <Link to={"/"}>
                <img src={whiteLogo} className="h-32 w-32" alt="" />
              </Link>
            </div>
            <div className="col-span-1">
              <h2 className="font-semibold text-white text-2xl pt-16">
                Product
              </h2>
              <div className="space-y-2 mt-5 text-white font-light">
                <div>
                  <Link to={"/"}>Product Overview</Link>
                </div>
                <div>
                  <Link to={"/"}>Pricing</Link>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <h2 className="font-semibold text-white text-2xl pt-16">
                Company
              </h2>
              <div className="space-y-2 mt-5 text-white font-light">
                <div>
                  <a href={"#about"}>About Us</a>
                </div>
                <div>
                  <Link to={"/"}>Careers</Link>
                </div>
                <div>
                  <Link to={"/"}>Press</Link>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <h2 className="font-semibold text-white text-2xl pt-16">
                Resources
              </h2>
              <div className="space-y-2 mt-5 text-white font-light">
                <div>
                  <Link to={"/"}>Whitepaper center</Link>
                </div>
                <div>
                  <Link to={"/"}>Policy centre</Link>
                </div>
                <div>
                  <Link to={"/"}>Online courses</Link>
                </div>
                <div>
                  <Link to={"/"}>All articles</Link>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="flex lg:flex-col items-center space-x-3 lg:space-x-0 lg:space-y-3 pt-16">
                <Link className="bg-darksecondary rounded-full p-3">
                  <GrLinkedinOption className="h-3.5 w-3.5 text-white" />
                </Link>
                <Link className="bg-darksecondary rounded-full p-3">
                  <LuInstagram className="h-3.5 w-3.5 text-white" />
                </Link>
                <Link className="bg-darksecondary rounded-full p-3">
                  <RiTwitterXFill className="h-3.5 w-3.5 text-white" />
                </Link>
                <Link className="bg-darksecondary rounded-full p-3">
                  <ImWhatsapp className="h-3.5 w-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 h-1 rounded-full"></div>
        <div className="max-w-5xl mx-auto">
          <div className=" sm:flex items-center justify-between text-white font-light py-2.5">
            <div className="space-x-5">
              <Link to={"/"}>TERMS & CONDITIONS</Link>
              <Link to={"/"}>PRIVACY POLICY</Link>
            </div>
            <p>2023 SustainCred, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
