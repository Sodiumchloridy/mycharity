'use client'

import React from 'react'

const MobileIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12" y2="18"></line>
  </svg>
)

const InclusiveForAll = () => {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-2xl shadow-md flex items-center space-x-4">
      <div className="p-3 bg-gray-100 rounded-full">
        <MobileIcon />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Inclusive For All</h2>
        <p className="mt-2 text-gray-600">
          Support mobile payments, digital wallets, and cash options to ensure everyone can participate regardless of banking access.
        </p>
      </div>
    </div>
  )
}

export default InclusiveForAll