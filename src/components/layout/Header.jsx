import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import Flag from "react-flagkit";
import useTranslation from "next-translate/useTranslation";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const { t } = useTranslation("main");
  const [show, setShow] = useState(false);

  const router = useRouter();

  function handleLocale(lang) {
    router.push(router.asPath, undefined, {
      locale: lang,
    });
  }

  const { pathname } = useRouter();

  const isHome = pathname === "/";
  const [isHover, setIsHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const list = [
    {
      name: "Company",
      url: "",
      dropdown: [
        {
          name: "Software-IO",
          url: "/software-io",
        },
        {
          name: "3D Products-JINE",
          url: "/threeDjine",
        },
        {
          name: "Hardware-It Horse",
          url: "/hardware-it",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "",
      dropdown: [
        {
          name: "Software",
          url: "/software",
        },
        {
          name: "3D",
          url: "/threeD",
        },
        {
          name: "Hardware",
          url: "/hardware",
        },
      ],
    },
    {
      name: "Staff",
      url: "",
      dropdown: [
        {
          name: "Staff",
          url: "/staff",
        },
      ],
    },
    {
      name: "Customer Service",
      url: "",
      dropdown: [
        {
          name: "Price",
          url: "/price",
        },
        {
          name: "FAQ",
          url: "/faq",
        },
        {
          name: "Announcement",
          url: "/announcement",
        },
      ],
    },
    {
      name: "About US",
      url: "",
      dropdown: [
        {
          name: "About Us",
          url: "/about-us",
        },
        {
          name: "Partners & Benefits",
          url: "/partners-benefits",
        },
        {
          name: "Certificates & Agreements",
          url: "/certficates",
        },
      ],
    },
  ];

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 h-fit transition ${
        !isHome || isHover || isScrolled || show
          ? "bg-white "
          : "text-white bg-transparent"
      }`}
    >
      <div className="container z-0">
        <div className="relative flex items-center xl:justify-center lg:justify-center md:justify-end sm:justify-end  w-full">
          <div className="absolute z-10 top-0 left-0 flex items-center justify-center   h-16 lg:h-24">
            <Link href="/">
              <Image
                src={`/icons/it-horse-${
                  !isHome || isHover || isScrolled || show ? "blue" : "white"
                }.png`}
                alt="logo"
                width={50}
                height={50}
                layout="fixed"
              />
            </Link>
          </div>
          <motion.div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            transition={{ duration: 0.3 }}
            animate={{ height: isHover ? "auto" : "96px" }}
            className="hidden gap-12 overflow-hidden lg:flex"
          >
            {list.map(({ name, dropdown }, index) => (
              <div key={index}>
                <p className="hidden lg:flex items-center justify-center h-24 font-bold transition  ">
                  {name}
                </p>
                <motion.div
                  animate={{ opacity: isHover ? 1 : 0 }}
                  className="flex flex-col items-center gap-4 pb-12 text-sm text-[#586772]"
                >
                  {dropdown.map(({ name, url }, index) => (
                    <Link
                      href={url}
                      key={index}
                      className="transition hover:text-blue"
                      onClick={() => setIsHover(false)}
                    >
                      {name}
                    </Link>
                  ))}
                </motion.div>
              </div>
            ))}
            <div className="lg:flex lg:gap-3 ">
              <button
                onClick={() => handleLocale("mn")}
                className="flex items-center justify-center h-24 font-bold transition cursor-default  "
              >
                MN
              </button>
              <button
                onClick={() => handleLocale("en")}
                className="flex items-center justify-center h-24 font-bold transition cursor-default"
              >
                EN
              </button>
              <button
                onClick={() => handleLocale("kr")}
                className="flex items-center justify-center h-24 font-bold transition cursor-default"
              >
                KR
              </button>
            </div>
          </motion.div>
          <div className=" flex items-center h-16 ">
            <div className=" absolute  h-full right-4 lg:hidden">
              <Hamburger
                toggled={show}
                toggle={setShow}
                size={24}
                color="#04141F"
              />
            </div>
          </div>
        </div>
      </div>
      <MobileDropdown
        handleLocale={handleLocale}
        show={show}
        list={list}
        onClose={() => setShow(false)}
        router={router}
      />
    </div>
  );
}
function MobileDropdown({ show, list, onClose, handleLocale, router }) {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  function handleClick(index) {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full overflow-hidden bg-white border-b top-16 border-base-50"
        >
          <div className="flex flex-col items-center gap-4 p-4">
            {list.map(({ dropdown, name, url }, index) => {
              if (dropdown) {
                return (
                  <div key={index}>
                    <h4
                      className="flex items-center h-full gap-2 text-lg cursor-pointer lg:text-xl text-base-600 active:scale-75 transitioned"
                      onClick={() => handleClick(index)}
                    >
                      {name}
                      <i
                        className={`mt-0.5 text-2xl ri-arrow-down-s-line transitioned ${
                          dropdownIndex === index ? "rotate-180" : ""
                        }`}
                      ></i>
                    </h4>
                    <AnimatePresence>
                      {dropdownIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col items-center gap-4 pt-4">
                            {dropdown.map(({ name, url }, index) => (
                              <Link href={url} key={index} onClick={onClose}>
                                <div className="flex items-center h-full cursor-pointer text-base-400 active:text-primary transitioned">
                                  {name}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else {
                return (
                  <Link href={url} key={index} onClick={onClose}>
                    <div className="flex items-center h-full text-lg cursor-pointer lg:text-xl text-base-600 active:scale-75 transitioned">
                      {name}
                    </div>
                  </Link>
                );
              }
            })}
            <div className="flex gap-3">
              <button
                onClick={() => handleLocale("mn")}
                className="flex items-center justify-center h-24 font-bold transition cursor-default  "
              >
                MN
              </button>
              <button
                onClick={() => handleLocale("en")}
                className="flex items-center justify-center h-24 font-bold transition cursor-default"
              >
                EN
              </button>
              <button
                onClick={() => handleLocale("kr")}
                className="flex items-center justify-center h-24 font-bold transition cursor-default"
              >
                KR
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
