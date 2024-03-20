import Image from "next/image";
import Link from "next/link";
import { OnClickOutside } from "@/lib/utils/on-click-outside";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import Flag from "react-flagkit";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  // const { t } = useTranslation("main");

  const [show, setShow] = useState(false);

  const router = useRouter();

  function handleLocale() {
    router.push(router.asPath, undefined, {
      locale: router?.locales?.find((item) => item !== router.locale),
    });
  }

  const { pathname } = useRouter();

  const isHome = pathname === "/";

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
      ],
    },
  ];

  return (
    <div
      className={`top-0 inset-x-0 z-50 h-fit transitioned ${
        isHome ? "fixed text-white " : "bg-white text-black sticky"
      }`}
    >
      <div className="relative container lg:flex lg:justify-end">
        <Link href="/">
          <div className="absolute flex items-center h-24 left-4">
            <Image
              src={isHome ? `/image/logo.png` : "/image/logo-dark.png"}
              alt=""
              width={187}
              height={28}
            />
          </div>
        </Link>
        <div className="h-24 hover:h-fit transition-all overflow-hidden gap-4 2xl:gap-14 lg:flex ">
          {list.map(({ url, name, dropdown }, index) => (
            <div className="" key={index}>
              <Link href={url}>
                <div className="flex items-center h-24 text-sm cursor-pointer xl:text-base transitioned hover:text-primary">
                  {name}
                </div>
              </Link>

              <div className="flex flex-col gap-4">
                {dropdown?.map(({ name, url }, index) => (
                  <Link href={url} key={index}>
                    <div className="flex items-center text-sm cursor-pointer xl:text-base transitioned hover:text-primary">
                      {name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="items-center flex hover:text-primary">KR | MN | EN</div>
      </div>
    </div>
  );
}

function Dropdown({ name, dropdown, url }) {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const ref = useRef();

  OnClickOutside(ref, () => setShow(false), show);
  return (
    <div
      className="relative h-full cursor-pointer text-base-600 hover:text-primary transitioned"
      onMouseOver={() => setShow(true)}
      ref={ref}
    >
      <div
        className="flex items-center h-full gap-0.5 text-sm xl:text-base"
        onClick={() => {
          if (url) {
            router.push(url);
          }
        }}
      >
        {name}
        <i className="mt-0.5 text-xl ri-arrow-down-s-line"></i>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.3, type: "spring" }}
            onMouseLeave={() => setShow(false)}
            className="absolute flex flex-col gap-1 p-6 right-0 xl:left-0 rounded shadow-lg w-72 top-[100px] bg-white z-50"
          >
            {dropdown.map(({ name, url }, index) => (
              <Link href={url} key={index}>
                <div className="w-full p-3 rounded cursor-pointer text-base-300 hover:text-primary transitioned hover:bg-black/5">
                  {name}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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
            {/* <button onClick={handleLocale}>
              <Flag country={router.locale === "en" ? "MN" : "US"} />
            </button> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
