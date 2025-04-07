import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Header from "./components/Header";
import DashboardPanel from "./components/DashboardPanel";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
      {/* Background Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000" },
          particles: {
            number: { value: 80 },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 1 },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* UI Layer */}
      <div className="relative z-10">
        <Header />
        <main className="pt-20 px-8">
          <DashboardPanel />
        </main>
      </div>
    </div>
  );
}

export default App;
