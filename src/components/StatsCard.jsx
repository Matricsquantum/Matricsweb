import React from 'react';

function StatsCard({ title, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <p className="text-sm text-white/70">{title}</p>
      <h3 className="text-2xl font-bold text-white mt-2">{value}</h3>
    </div>
  );
}

export default StatsCard;