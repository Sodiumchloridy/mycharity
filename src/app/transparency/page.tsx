// page.tsx
'use client';

import React, { JSX, useState } from 'react';

// Simple icon components to replace lucide-react
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

// Define TypeScript interfaces for the data structures
interface Donor {
  wallet: string;
  amount: string;
}

interface FundUtilization {
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

type TabType = 'campaign' | 'donors' | 'utilization' | 'transactions';

export default function TransparentFundingPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('campaign');
  const [copied, setCopied] = useState<string>('');
  
  // Mock data with proper typing
  const totalDonation: string = "254.35 ETH";
  const donorList: Donor[] = [
    { wallet: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", amount: "50.21 ETH" },
    { wallet: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30", amount: "30.10 ETH" },
    { wallet: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", amount: "25.78 ETH" },
    { wallet: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0", amount: "15.32 ETH" },
    { wallet: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", amount: "12.44 ETH" }
  ];
  
  const fundUtilization: FundUtilization[] = [
    { date: "2025-03-15", amount: "12.5 ETH", reason: "Educational supplies for orphanage", status: "completed" },
    { date: "2025-03-20", amount: "25.0 ETH", reason: "Medical supplies for refugee camp", status: "completed" },
    { date: "2025-03-28", amount: "18.3 ETH", reason: "Food distribution program", status: "pending" },
    { date: "2025-04-01", amount: "30.0 ETH", reason: "Water well construction", status: "pending" }
  ];
  
  const transactions: Transaction[] = [
    { txHash: "0x3a8c3770b5f5a3727", type: "incoming", amount: "10.0 ETH", from: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", to: "Contract", date: "2025-03-10" },
    { txHash: "0x2b9c4680b5a4f3518", type: "outgoing", amount: "12.5 ETH", from: "Contract", to: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", date: "2025-03-15" },
    { txHash: "0x1c9e4780c5b3f4629", type: "incoming", amount: "15.3 ETH", from: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30", to: "Contract", date: "2025-03-18" },
    { txHash: "0x4d8c3760d5e5b2837", type: "outgoing", amount: "25.0 ETH", from: "Contract", to: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", date: "2025-03-20" }
  ];

  // Fixed copyToClipboard function with proper error handling
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
      case 'campaign':
        return (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Total Donation Amount</h2>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Live Data from Smart Contract
              </div>
            </div>
            <div className="mt-6 flex items-end space-x-4">
              <span className="text-5xl font-bold text-gray-900">{totalDonation}</span>
              <div className="mb-1 flex items-center text-green-600">
                <span className="mr-1"><ArrowUpRightIcon /></span>
                <span className="ml-1 text-sm">+4.32 ETH in last 24h</span>
              </div>
            </div>
            <div className="mt-8">
              <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="h-16 w-16 text-indigo-600"><BarChartIcon /></span>
                <span className="ml-4 text-gray-600">Donation trend visualization would appear here</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <span className="h-5 w-5 text-blue-600 mt-0.5"><InfoIcon /></span>
                <div className="ml-3">
                  <h3 className="font-medium text-blue-800">How Blockchain Ensures Transparency</h3>
                  <p className="mt-1 text-sm text-blue-700">
                    All donations are recorded on a public blockchain, making them immutable and verifiable. 
                    Every transaction is linked to the smart contract which enforces proper fund allocation.
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
              <h2 className="text-2xl font-semibold text-gray-800">Donor List</h2>
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
                  <h3 className="font-medium text-blue-800">Public Verification of Donors</h3>
                  <p className="mt-1 text-sm text-blue-700">
                    All wallet addresses are publicly visible on the blockchain, ensuring transparency while maintaining anonymity.
                    Anyone can verify donations through a blockchain explorer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'utilization':
        return (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Fund Utilization</h2>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                Smart Contract Notes
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
                    {fundUtilization.map((record, index) => (
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
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <span className="h-5 w-5 text-blue-600 mt-0.5"><InfoIcon /></span>
                <div className="ml-3">
                  <h3 className="font-medium text-blue-800">Spending Transparency</h3>
                  <p className="mt-1 text-sm text-blue-700">
                    Fund utilization is recorded with detailed reasons in the smart contract.
                    This ensures that all spending aligns with Islamic principles of Waqf, Zakat and Sadaqah
                    and provides accountability to donors.
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                          {tx.from.slice(0, 6)}...
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                          {tx.to.slice(0, 6)}...
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <a href="#" className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center justify-end">
                  View all transactions on testnet explorer
                  <span className="h-4 w-4 ml-1"><ExternalLinkIcon /></span>
                </a>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <span className="h-5 w-5 text-blue-600 mt-0.5"><InfoIcon /></span>
                <div className="ml-3">
                  <h3 className="font-medium text-blue-800">Complete Transaction Traceability</h3>
                  <p className="mt-1 text-sm text-blue-700">
                    Every transaction made to and from the fund is permanently recorded on the blockchain.
                    This creates an immutable audit trail that ensures all funds are accounted for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Transparent Islamic Fund Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Using blockchain technology to ensure complete transparency in the management of 
            <span className="font-semibold"> Waqf, Zakat, and Sadaqah</span> funds.
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-indigo-800">Total Donations</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">{totalDonation}</p>
                <p className="mt-1 text-sm text-indigo-500">From 120+ donors</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-green-800">Funds Distributed</h3>
                <p className="mt-2 text-3xl font-bold text-green-600">85.8 ETH</p>
                <p className="mt-1 text-sm text-green-500">Across 12 projects</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800">Beneficiaries</h3>
                <p className="mt-2 text-3xl font-bold text-blue-600">850+</p>
                <p className="mt-1 text-sm text-blue-500">Individuals helped</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-purple-800">Transparency Score</h3>
                <p className="mt-2 text-3xl font-bold text-purple-600">100%</p>
                <p className="mt-1 text-sm text-purple-500">Fully verifiable on-chain</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="sm:hidden">
            <select
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              value={activeTab}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setActiveTab(e.target.value as TabType)}
            >
              <option value="campaign">Campaign Page</option>
              <option value="donors">Donor List</option>
              <option value="utilization">Fund Utilization</option>
              <option value="transactions">Transaction History</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('campaign')}
                  className={`${
                    activeTab === 'campaign'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  type="button"
                >
                  Campaign Page
                </button>
                <button
                  onClick={() => setActiveTab('donors')}
                  className={`${
                    activeTab === 'donors'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  type="button"
                >
                  Donor List
                </button>
                <button
                  onClick={() => setActiveTab('utilization')}
                  className={`${
                    activeTab === 'utilization'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  type="button"
                >
                  Fund Utilization
                </button>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className={`${
                    activeTab === 'transactions'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  type="button"
                >
                  Transaction History
                </button>
              </nav>
            </div>
          </div>
        </div>

        {renderTabContent()}

        <div className="mt-12 bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Blockchain Ensures Transparency</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg text-gray-900 mb-2">Immutable Records</h3>
                <p className="text-gray-600">
                  All donations and disbursements are permanently recorded on the blockchain, 
                  creating an unalterable history that can't be changed or deleted.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg text-gray-900 mb-2">Public Verification</h3>
                <p className="text-gray-600">
                  Anyone can verify transactions through a blockchain explorer, 
                  ensuring that funds are being used as intended with complete traceability.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg text-gray-900 mb-2">Smart Contract Rules</h3>
                <p className="text-gray-600">
                  Our smart contracts enforce Shariah-compliant fund management, 
                  ensuring that Waqf, Zakat and Sadaqah funds are handled according to Islamic principles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Built on Ethereum Testnet • Smart Contract Address: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F
          </p>
        </div>
      </div>
    </div>
  );
}