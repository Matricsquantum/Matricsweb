import React from 'react'
import StatsCard from './StatsCard'
import AnalyticsSection from './AnalyticsSection'
import TransactionsTable from './TransactionsTable'

function DashboardPanel() {
  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-10 relative z-10">
      {/* Floating glass panel for the main dashboard */}
      <div className="bg-white/05 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-white">Welcome to Matrics ERP</h2>
        <p className="text-white/70 mt-1">Your futuristic dashboard in an infinity room.</p>
      </div>

      {/* Glass-like content block for stats and analytics */}
      <div className="bg-white/05 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-2xl transform hover:scale-105 transition">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard title="Total Revenue" value="₹32.5L" />
          <StatsCard title="Orders Today" value="164" />
          <StatsCard title="Inventory Value" value="₹18.3L" />
          <StatsCard title="Profit Margin" value="23%" />
        </div>
        {/* Analytics Section */}
        <AnalyticsSection />
      </div>

      {/* Transactions Table - Optional: wrap in glass effect */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg">
        <TransactionsTable />
      </div>
    </main>
  )
}

export default DashboardPanel
