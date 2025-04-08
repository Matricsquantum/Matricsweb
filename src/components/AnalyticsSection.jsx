import React from 'react';
import Tilt from 'react-parallax-tilt'; // optional tilt effect
import { FiBox, FiUsers, FiDollarSign, FiTrendingUp } from 'react-icons/fi';

const stats = [
  {
    title: 'Products',
    value: '1,245',
    icon: <FiBox size={28} />,
    glow: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Users',
    value: '8,392',
    icon: <FiUsers size={28} />,
    glow: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Revenue',
    value: '$92,140',
    icon: <FiDollarSign size={28} />,
    glow: 'from-green-400 to-lime-400',
  },
  {
    title: 'Growth',
    value: '+12.4%',
    icon: <FiTrendingUp size={28} />,
    glow: 'from-yellow-400 to-red-500',
  },
];

const DashboardPanel = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {stats.map((item, idx) => (
        <Tilt
          key={idx}
          glareEnable={true}
          glareColor="#ffffff"
          glareMaxOpacity={0.2}
          scale={1.02}
        >
          <div
            className={`
              bg-glass-bg backdrop-blur-xs border border-white/20 
              rounded-xl p-6 shadow-md hover:shadow-lg 
              hover:scale-105 transform transition duration-300
              text-white group
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-semibold">{item.title}</span>
              <div className="text-3xl text-white">{item.icon}</div>
            </div>
            <div className="text-3xl font-bold">{item.value}</div>

            {/* Neon glow effect on hover */}
            <div
              className={`mt-3 h-1 w-full bg-gradient-to-r ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
            ></div>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default DashboardPanel;
