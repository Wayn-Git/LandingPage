import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='pb-20 shadow-md shadow-white/20'>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        scrolled ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-white/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Huddle
            </a>

            {/* Desktop Navigation */}


            
            <nav className="hidden md:flex items-center space-x-8 justify-center ">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Features
              </a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Pricing
              </a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </a>

              <div className="flex items-center space-x-4 ml-8">
                <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                  Login
                </button>
                <button className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 backdrop-blur-sm">
                  Sign Up
                </button>
              </div>


            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black/90 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SaasPage
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-6 space-y-6">
            <a href="#" className="block text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Features
            </a>
            <a href="#" className="block text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="block text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#" className="block text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </nav>

          <div className="p-6 border-t border-white/10 space-y-4">
            <button className="w-full px-4 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
              Login
            </button>
            <button className="w-full px-4 py-3 text-sm font-medium bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 backdrop-blur-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
