import React from 'react'

function AnalyticsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Sales Chart Panel */}
      <div className="lg:col-span-2 glass p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Sales Overview</h3>
        <div className="h-60 flex items-center justify-center text-white/50">
          [Sales Chart Placeholder]
        </div>
      </div>
      {/* Pie Chart Panel */}
      <div className="glass p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Stock Breakdown</h3>
        <div className="h-60 flex items-center justify-center text-white/50">
          [Pie Chart Placeholder]
        </div>
      </div>
    </div>
  )
}

export default AnalyticsSection
