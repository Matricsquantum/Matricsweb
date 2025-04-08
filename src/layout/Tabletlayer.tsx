import React from "react";
import "../styles/tablet.css";

const TabletLayer = () => {
  return (
    <div className="tablet-container z-10">
      {/* Tablet Body */}
      <div className="tablet-surface">
        {/* Holographic Projection (Placeholder for now) */}
        <div className="holographic-projection" />
      </div>

      {/* Optional: Light pedestal or glow under tablet */}
      <div className="tablet-base-glow" />
    </div>
  );
};

export default TabletLayer;
