import { CONTACT_EMAIL, COMPANY_PHONE } from '@/const';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-white shadow-lg mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <img className="h-8 w-auto" src="/favicon.svg" alt="Logo" />
                                <span className="ml-3 text-xl font-semibold text-gray-800">Moon Rock Technologies</span>
                            </div>
                            <p className="text-gray-500 text-sm">
                                Bringing the technology of tomorrow into the every day.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <a href="/" className="text-gray-500 hover:text-gray-700 text-sm">Home</a>
                                <a href="/about" className="text-gray-500 hover:text-gray-700 text-sm">About</a>
                                <a href="/contact" className="text-gray-500 hover:text-gray-700 text-sm">Contact</a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
                            <div className="space-y-2">
                                <p className="text-gray-500 text-sm">Email: {CONTACT_EMAIL}</p>
                                <p className="text-gray-500 text-sm">Phone: {COMPANY_PHONE}</p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-center text-gray-500 text-sm">
                            {currentYear} Moon Rock Technologies. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};