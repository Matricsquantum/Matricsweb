import React from 'react'

function TransactionsTable() {
  const transactions = [
    { date: '2025-04-07', type: 'Sale', amount: '₹12,000', status: 'Completed' },
    { date: '2025-04-06', type: 'Refund', amount: '₹2,000', status: 'Pending' },
    { date: '2025-04-05', type: 'Purchase', amount: '₹45,000', status: 'Failed' },
    { date: '2025-04-04', type: 'Salary', amount: '₹70,000', status: 'Completed' }
  ]

  const statusClasses = {
    Completed: 'bg-green-600',
    Pending: 'bg-yellow-600',
    Failed: 'bg-red-600'
  }

  return (
    <div className="glass p-6 rounded-xl shadow-lg mx-4 mb-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
      <table className="w-full text-sm">
        <thead className="text-white/70">
          <tr>
            <th className="pb-2 text-left">Date</th>
            <th className="pb-2 text-left">Type</th>
            <th className="pb-2 text-left">Amount</th>
            <th className="pb-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {transactions.map((txn, index) => (
            <tr key={index} className="border-t border-white/20">
              <td className="py-2">{txn.date}</td>
              <td className="py-2">{txn.type}</td>
              <td className="py-2">{txn.amount}</td>
              <td className="py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusClasses[txn.status]}`}>
                  {txn.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsTable
