import React from "react";

// 🌟 Components
import Header from "./components/Header";
import DashboardPanel from "./components/DashboardPanel";

// 🌌 Visual Layers
import BackgroundLayer from "./layout/BackgroundLayer";
import TabletLayer from "./layout/Tabletlayer"; // 🧠 Futuristic Floating Tablet UI

function App() {
  console.log("App is rendering...");

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* 🔮 Infinite Background Grid & Light Particles */}
      <BackgroundLayer />

      {/* 🧠 Futuristic Tablet Layer (Floating Control Panel) */}
      <TabletLayer />

      {/* 🌐 Foreground UI (Header & Dashboard) */}
      <div className="relative z-10">
        {/* 📌 Sticky Header */}
        <Header />

        {/* 📊 Dashboard Main Content */}
        <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            🔮 Welcome to Matrics ERP
          </h1>
          <DashboardPanel />
        </main>
      </div>
    </div>
  );
}

export default App;
