import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Provider({ children }) {
  const { pathname } = useRouter();

  const isHome = pathname === "/";

  return (
    <div>
      <Header />
      <main
        className={`min-h-[calc(100svh-64px)] lg:min-h-[calc(100svh-96px)] flex flex-col ${
          !isHome ? "mt-16 lg:mt-24" : ""
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
