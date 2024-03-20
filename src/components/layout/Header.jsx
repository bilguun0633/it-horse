import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import Flag from "react-flagkit";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  // const { t } = useTranslation("main");

  const router = useRouter();

  function handleLocale() {
    router.push(router.asPath, undefined, {
      locale: router?.locales?.find((item) => item !== router.locale),
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
      ],
    },
  ];

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 h-fit transition ${
        !isHome || isHover || isScrolled
          ? "bg-white"
          : "text-white bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-center w-full">
          <div className="absolute top-0 left-0 flex items-center justify-center h-16 lg:h-24">
            <Link href="/">
              <Image
                src={`/icons/it-horse-${
                  !isHome || isHover || isScrolled ? "blue" : "white"
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
                <p className="flex items-center justify-center h-24 font-bold transition cursor-default">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
