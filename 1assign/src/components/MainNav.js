import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

const mainNavItems = [
  { 
    title: "SERVICES", 
    href: "#",
    subItems: [
      "BUSINESS RESTRUCTURING & TURNAROUND",
      "BUSINESS SERVICES & OUTSOURCING",
      "CORPORATE REAL ESTATE",
      "FORENSICS AND INVESTIGATIONS",
      "INSURANCE RISK & RECOVERY",
      "LITIGATION AND DISPUTES",
      "M&A AND TRANSACTION ADVISORY",
      "PUBLIC HOUSING AUTHORITY",
      "REGULATORY ENFORCEMENT",
      "RISK ADVISORY",
      "MANAGEMENT ADVISORY",
      "VALUATION & BUSINESS ANALYTICS",
      "BDO WEALTH ADVISORS"
    ]
  },
  { 
    title: "INDUSTRIES", 
    href: "#",
    subItems: [
      "ASSET MANAGEMENT",
      "CONSTRUCTION",
      "GAMING & HOSPITALITY",
      "GOVERNMENT CONTRACTING",
      "HEALTHCARE",
      "INSURANCE",
      "MANUFACTURING & DISTRIBUTION",
      "NONPROFIT",
      "PRIVATE EQUITY",
      "REAL ESTATE & CONSTRUCTION",
      "RETAIL & CONSUMER PRODUCTS",
      "TECHNOLOGY"
    ]
  },
  { title: "ISSUES & RESOURCES", href: "#" },
  { title: "INSIGHTS", href: "#" },
  { title: "ABOUT", href: "#" },
];

function MainNav({ onCrossMenuToggle }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCrossMenuOpen, setIsCrossMenuOpen] = useState(false);

  const toggleCrossMenu = () => {
    setIsCrossMenuOpen(!isCrossMenuOpen);
    onCrossMenuToggle(!isCrossMenuOpen);
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">BDO</span>
          <span className="ml-2 text-sm font-semibold">UNITED STATES</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 lg:flex">
          {mainNavItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-zinc-700 hover:text-blue-600"
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className="w-64 rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
              <button
                className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button
              className="p-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
          )}

          {/* Cross Menu Button */}
          <button
            onClick={toggleCrossMenu}
            className="relative z-50 p-2 text-gray-500 hover:text-gray-700"
          >
            <X 
              className={`h-6 w-6 transition-transform duration-300 ${
                isCrossMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Mobile Menu */}
          <button className="lg:hidden p-2 text-gray-500 hover:text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;

