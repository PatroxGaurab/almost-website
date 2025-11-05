import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
              src="https://customer-assets.emergentagent.com/job_436646e3-155e-4674-8b24-c3367a42203c/artifacts/q9p6whd0_2-removebg-preview.png"
              alt="almost.energy Logo"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              India's first AI-orchestrated virtual renewable energy utility company for C&I consumers. 
              We coordinate RESCOs, EPCs, and investors to deliver guaranteed low-cost clean energy 
              without owning physical assets.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:hello@almost.energy"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#zero-capex" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Zero CAPEX Model
                </a>
              </li>
              <li>
                <a href="#instant-access" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Instant Access
                </a>
              </li>
              <li>
                <a href="#guaranteed-savings" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Guaranteed Savings
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-orange-400 transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Maharashtra, Karnataka,<br />West Bengal, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:hello@almost.energy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  hello@almost.energy
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+91" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  Schedule a call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 almost.energy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Compliance
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              Operating in Maharashtra, Karnataka, and West Bengal | SERC/CERC Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;