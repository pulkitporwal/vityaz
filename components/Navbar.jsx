'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isStudyDropdownOpen, setIsStudyDropdownOpen] = useState(false);
    const [isMobileStudyOpen, setIsMobileStudyOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const navLinks = [
        {
            name: 'Study in India',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { name: 'University Search', href: '/university-search' },
                { name: 'Course Search', href: '/course-search' }
            ]
        },
        { name: 'Affordable MBBS/MD', href: '/mbbs-md' },
        { name: 'Discover India', href: '/discover-india' },
        { name: 'Why Choose Us', href: '/why-choose-us' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
            >
                {/* Sliding Background */}
                <div
                    className={`absolute inset-0 bg-white/95 backdrop-blur-lg transition-transform duration-300 ease-out ${isScrolled ? 'translate-y-0' : '-translate-y-full'
                        }`}
                    style={{ transformOrigin: 'top' }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex justify-between items-center h-20 ">
                        {/* Logo */}
                        <a href="/" className="flex items-center space-x-3 group ">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img src="/logo.png" alt="Vityaz Global" />
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className={`text-lg font-bold transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'
                                        }`}
                                    style={{ textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}
                                >
                                    Vityaz Global
                                </span>
                                
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative">
                                    {link.hasDropdown ? (
                                        <div
                                            className="relative"
                                            onMouseEnter={() => setIsStudyDropdownOpen(true)}
                                        >
                                            <button
                                                className={`px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg flex items-center gap-1 ${isScrolled
                                                    ? 'text-slate-700 hover:text-red-600 hover:bg-red-50'
                                                    : 'text-white hover:text-white hover:bg-white/10'
                                                    }`}
                                                style={{ textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.2)' }}
                                            >
                                                {link.name}
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-200 ${isStudyDropdownOpen ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Dropdown Menu */}
                                            <div
                                                onMouseEnter={() => setIsStudyDropdownOpen(true)}
                                                onMouseLeave={() => setIsStudyDropdownOpen(false)}
                                                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${isStudyDropdownOpen
                                                    ? 'opacity-100 visible translate-y-0'
                                                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                                                    }`}
                                            >
                                                {link.dropdownItems?.map((item, idx) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={`block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 ${idx !== link.dropdownItems.length - 1 ? 'border-b border-gray-100' : ''
                                                            }`}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className={`px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg whitespace-nowrap ${isScrolled
                                                ? 'text-slate-700 hover:text-red-600 hover:bg-red-50'
                                                : 'text-white hover:text-white hover:bg-white/10'
                                                }`}
                                            style={{ textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.2)' }}
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <a
                                href="/login"
                                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${isScrolled
                                    ? 'border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white'
                                    : 'border-white text-white hover:bg-white hover:text-slate-800'
                                    }`}
                                style={{ textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.2)' }}
                            >
                                Login
                            </a>
                            <a
                                href="/create-account"
                                className={`px-6 py-2.5 rounded-full font-semibold text-sm w-full transition-all duration-300 ${isScrolled
                                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg'
                                    : 'bg-white text-slate-800 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                SignUp
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled
                                ? 'text-slate-700 hover:bg-slate-100'
                                : 'text-white hover:bg-white/10'
                                }`}
                            style={{ filter: isScrolled ? 'none' : 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">VG</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-slate-800">Vityaz Global</span>
                                <span className="text-xs text-red-600">Education</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex-1 overflow-y-auto py-4 px-4">
                        <div className="flex flex-col space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setIsMobileStudyOpen(!isMobileStudyOpen)}
                                                className="w-full px-4 py-3 rounded-lg font-medium text-slate-800 hover:bg-red-50 hover:text-red-600 transition-all duration-200 flex items-center justify-between"
                                            >
                                                <span>{link.name}</span>
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-200 ${isMobileStudyOpen ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isMobileStudyOpen ? 'max-h-40 mt-1' : 'max-h-0'
                                                    }`}
                                            >
                                                {link.dropdownItems?.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setIsMobileStudyOpen(false);
                                                        }}
                                                        className="block px-8 py-2.5 text-sm font-medium text-slate-700 hover:text-red-600 transition-colors duration-200"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-lg font-medium text-slate-800 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="p-6 border-t border-gray-200 space-y-3">
                        <a
                            href="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full px-6 py-3 rounded-xl font-semibold text-center border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
                        >
                            Login
                        </a>
                        <a
                            href="/create-account"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full px-3 py-3 rounded-xl font-semibold text-center bg-red-600 text-white hover:bg-red-700 transition-all duration-300 shadow-lg"
                        >
                            Create Account
                        </a>
                        <p className="text-xs text-center text-slate-500 pt-2">
                            Your trusted partner in international education
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}