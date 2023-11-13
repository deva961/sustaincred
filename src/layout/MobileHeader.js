import { Disclosure } from "@headlessui/react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const navigation = [
  { name: "About Us", href: "#about", current: true },
  { name: "Our Product", href: "#product", current: false },
  { name: "Blogs", href: "blogs", current: false },
  { name: "Login", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MobileHeader = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8 md:hidden">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Link to={"/"}>
                  <img
                    src={require("../assets/logo.png")}
                    className="h-16 w-16 rounded-full border border-secondary"
                    alt=""
                  />
                </Link>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2  sm:ml-6 sm:pr-0">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RxCross2 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiOutlineBars3BottomRight
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MobileHeader;
