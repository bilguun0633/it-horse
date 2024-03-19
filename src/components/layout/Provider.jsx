import Header from "./Header";
import Footer from "./Footer";

export default function Provider({ children }) {
  return (
    <div>
      <Header />
      <main className="min-h-[calc(100svh-64px)] lg:min-h-[calc(100svh-96px)] flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
