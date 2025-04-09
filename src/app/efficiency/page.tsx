// page.tsx
'use client';

import React, { JSX, useState } from 'react';

// Simple icon components
const BarChartIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const ArrowUpRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ArrowDownRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="7" x2="17" y2="17"></line>
    <polyline points="17 7 17 17 7 17"></polyline>
  </svg>
);

const CopyIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const ExternalLinkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const InfoIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const CodeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Define TypeScript interfaces for the data structures
interface Donor {
  wallet: string;
  amount: string;
}

interface CauseUtilization {
  date: string;
  amount: string;
  reason: string;
  status: 'completed' | 'pending';
}

interface Transaction {
  txHash: string;
  type: 'incoming' | 'outgoing';
  amount: string;
  from: string;
  to: string;
  date: string;
}

interface SmartContractExample {
  name: string;
  description: string;
  code: string;
}

type TabType = 'overview' | 'donors' | 'causes' | 'transactions' | 'smart-contracts';

export default function SmartContractDonationPage(){
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [copied, setCopied] = useState<string>('');
  
  // Mock data with proper typing
  const totalDonation: string = "342.67 ETH";
  const donorList: Donor[] = [
    { wallet: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", amount: "65.32 ETH" },
    { wallet: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30", amount: "45.50 ETH" },
    { wallet: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", amount: "32.45 ETH" },
    { wallet: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0", amount: "28.10 ETH" },
    { wallet: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", amount: "19.75 ETH" }
  ];
  
  const causeUtilization: CauseUtilization[] = [
    { date: "2025-03-10", amount: "45.2 ETH", reason: "Disaster relief in Southeast Asia", status: "completed" },
    { date: "2025-03-18", amount: "32.8 ETH", reason: "Clean water initiative in Africa", status: "completed" },
    { date: "2025-03-25", amount: "28.5 ETH", reason: "Educational resources for underserved communities", status: "pending" },
    { date: "2025-04-02", amount: "36.0 ETH", reason: "Medical supplies for refugee camps", status: "pending" }
  ];
  
  const transactions: Transaction[] = [
    { txHash: "0x5a8c3770b5f5a3727", type: "incoming", amount: "15.0 ETH", from: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", to: "Contract", date: "2025-03-05" },
    { txHash: "0x4b9c4680b5a4f3518", type: "outgoing", amount: "45.2 ETH", from: "Contract", to: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", date: "2025-03-10" },
    { txHash: "0x3c9e4780c5b3f4629", type: "incoming", amount: "28.3 ETH", from: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30", to: "Contract", date: "2025-03-15" },
    { txHash: "0x2d8c3760d5e5b2837", type: "outgoing", amount: "32.8 ETH", from: "Contract", to: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", date: "2025-03-18" }
  ];

  // Function for copying to clipboard
  const copyToClipboard = (text: string): void => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(text);
          setTimeout(() => setCopied(''), 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    } else {
      // Fallback for browsers that don't support clipboard API
      console.error('Clipboard API not supported');
    }
  };

  const renderTabContent = (): JSX.Element | null => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">How Smart Contracts Maximize Impact</h2>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Live Smart Contract Data
              </div>
            </div>
            <div className="mt-6 flex items-end space-x-4">
              <span className="text-5xl font-bold text-gray-900">{totalDonation}</span>
              <div className="mb-1 flex items-center text-green-600">
                <span className="mr-1"><ArrowUpRightIcon /></span>
                <span className="ml-1 text-sm">+5.68 ETH in last 24h</span>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="h-16 w-16 text-indigo-600"><BarChartIcon /></span>
                <span className="ml-4 text-gray-600">Donation efficiency visualization would appear here</span>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg text-blue-800">Reduced Administrative Costs</h3>
                <div className="mt-2 flex items-center">
                  <span className="text-3xl font-bold text-blue-600">75%</span>
                  <span className="ml-2 text-blue-600 text-sm">Cost Reduction</span>
                </div>
                <p className="mt-2 text-sm text-blue-700">
                  Smart contracts eliminate intermediaries and automate processes, 
                  dramatically reducing administrative overhead.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg text-green-800">Complete Transparency</h3>
                <div className="mt-2 flex items-center">
                  <span className="text-3xl font-bold text-green-600">24/7</span>
                  <span className="ml-2 text-green-600 text-sm">Real-time Tracking</span>
                </div>
                <p className="mt-2 text-sm text-green-700">
                  All transactions are recorded on the blockchain, creating an immutable
                  and publicly verifiable record.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-start">
                <span className="h-5 w-5 text-indigo-600 mt-0.5"><InfoIcon /></span>
                <div className="ml-3">
                  <h3 className="font-medium text-indigo-800">How Smart Contracts Work</h3>
                  <p className="mt-1 text-sm text-indigo-700">
                    Smart contracts are self-executing agreements with terms directly written into code. Once deployed on the blockchain,
                    they automatically verify and enforce predefined conditions without the need for intermediaries.
                    This ensures funds are only distributed when specific criteria are met, maximizing donor impact and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'donors':
        return (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Donor Contributions</h2>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Blockchain Explorer Data
              </div>
            </div>
            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet Address</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {donorList.map((donor, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center">
                            <span className="font-mono">{donor.wallet.slice(0, 8)}...{donor.wallet.slice(-6)}</span>
                            <button 
                              onClick={() => copyToClipboard(donor.wallet)}
                              className="ml-2 text-gray-400 hover:text-gray-600"
                              type="button"
                            >
                              <span className="h-4 w-4"><CopyIcon /></span>
                            </button>
                            {copied === donor.wallet && <span className="ml-2 text-xs text-green-600">Copied!</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900 flex items-center">
                            <span className="h-4 w-4 mr-1"><ExternalLinkIcon /></span>
                            View on Explorer
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <span className="h-5 w-5 text-blue-600 mt-0.5"><InfoIcon /></span>
                <div className="ml-3">
                  <h3 className="font-medium text-blue-800">Donor Advantages with Smart Contracts</h3>
                  <p className="mt-1 text-sm text-blue-700">
                    Smart contracts provide donors with unprecedented transparency and control over their contributions.
                    Donors can specify conditions for fund release, track exactly how their money is used,
                    and verify impact through immutable blockchain records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'causes':
        return (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Supported Causes & Fund Utilization</h2>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Smart Contract Verified
              </div>
            </div>
            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {causeUtilization.map((record, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.reason}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${record.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-start">
                <span className="h-5 w-5 text-green-600 mt-0.5"><InfoIcon /></span>
                <div className="ml-3">
                  <h3 className="font-medium text-green-800">Automated Fund Distribution</h3>
                  <p className="mt-1 text-sm text-green-700">
                    Smart contracts automatically distribute funds based on predefined criteria and milestones.
                    This ensures that donations are used as intended, with each distribution recorded permanently 
                    on the blockchain, creating complete transparency and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'transactions':
        return (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Transaction History</h2>
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                Blockchain Explorer Data
              </div>
            </div>
            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Hash</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((tx, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                          <div className="flex items-center">
                            <span>{tx.txHash.slice(0, 8)}...{tx.txHash.slice(-4)}</span>
                            <button 
                              onClick={() => copyToClipboard(tx.txHash)}
                              className="ml-2 text-gray-400 hover:text-gray-600"
                              type="button"
                            >
                              <span className="h-4 w-4"><CopyIcon /></span>
                            </button>
                            {copied === tx.txHash && <span className="ml-2 text-xs text-green-600">Copied!</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {tx.type === 'incoming' ? (
                            <div className="flex items-center text-green-600">
                              <span className="h-4 w-4 mr-1"><ArrowDownRightIcon /></span>
                              <span>In</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-blue-600">
                              <span className="h-4 w-4 mr-1"><ArrowUpRightIcon /></span>
                              <span>Out</span>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {tx.from}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {tx.to}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {tx.amount} BTC
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(tx.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
        default:
            return null; // This ensures a return value for any unmatched tab
    }
    };
    return (
        <div>
            {renderTabContent()}
        </div>
    )
}