import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";

const App = ()=> {

  return (
      <main className="relative min-h-screen w-screen bg-slate-800" >
        <Navbar />
        <Hero />
        <About />
        <Features />
      </main>
  
  )
}

export default App;
