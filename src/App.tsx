import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Catalog } from "./components/Catalog";
import { Features } from "./components/Features";
import { Blog } from "./components/Blog";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-primary-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Features />
        <Blog />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
