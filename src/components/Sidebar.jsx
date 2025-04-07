import React from 'react'
import { LayoutDashboard, Box, Settings, Users, BarChart2 } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { label: 'Inventory', icon: <Box size={20} /> },
  { label: 'Sales', icon: <BarChart2 size={20} /> },
  { label: 'CRM', icon: <Users size={20} /> },
  { label: 'Settings', icon: <Settings size={20} /> }
]

function Sidebar() {
  return (
    <aside className="w-64 p-6 glass flex flex-col space-y-8 shadow-xl m-4 rounded-lg transform -translate-y-10">
      <div>
        <h1 className="text-3xl font-bold text-white">Matrics ERP</h1>
      </div>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 transition">
            {item.icon}
            <span className="text-white">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
