// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Image } from 'lucide-react';
import MainNav from './components/MainNav';

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

const services = [
  {
    title: "ADVISORY",
    description:
      "Providing transaction, risk, and executive services to clients navigating an exceptional range of challenges, changes, and opportunities.",
  },
  {
    title: "BUSINESS RESTRUCTURING & TURNAROUND",
    description:
      "Strategic solutions for businesses facing financial challenges.",
  },
  {
    title: "BUSINESS SERVICES & OUTSOURCING",
    description:
      "Comprehensive outsourcing solutions for business operations and management.",
  },
  {
    title: "CORPORATE REAL ESTATE",
    description: "Expert guidance in real estate transactions and management.",
  },
];

function App() {
  const [isCrossMenuOpen, setIsCrossMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCrossMenuToggle = (isOpen) => {
    setIsCrossMenuOpen(isOpen);
    if (!isOpen) {
      setActiveCategory(null);
    }
  };

  return (
    <div className="min-h-screen">
      <MainNav onCrossMenuToggle={handleCrossMenuToggle} />
      
      {/* Categories Overlay */}
      {isCrossMenuOpen && (
        <div className="fixed inset-x-0 top-[104px] z-40 bg-white border-t border-b">
          <div className="container mx-auto grid grid-cols-4 gap-8 px-4 py-8">
            <div className="col-span-1 border-r">
              {mainNavItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setActiveCategory(item.title)}
                  className={`w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors flex items-center justify-between ${
                    activeCategory === item.title ? "bg-gray-100" : ""
                  }`}
                >
                  {item.title}
                  {item.subItems && <ChevronRight className="h-4 w-4" />}
                </button>
              ))}
            </div>
            <div className="col-span-3">
              {activeCategory && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">{activeCategory}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {mainNavItems
                      .find(item => item.title === activeCategory)
                      ?.subItems?.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="text-sm text-gray-600 hover:text-blue-600"
                        >
                          {subItem}
                        </a>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
     
      <img src="img.jpg"/>
      


        <div className="container mx-auto px-4 py-24">
          <h1 className="mb-6 text-5xl font-bold">Services</h1>
          <p className="max-w-2xl text-xl">
            At BDO, client service is paramount and key to our success in building
            strong, long-term client relationships
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

