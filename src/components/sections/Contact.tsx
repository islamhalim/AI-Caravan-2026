import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import TopSection from '../TopSection';

const Contact = () => {
  return (
    <>
      <TopSection
        title="Get in Touch"
        subtitle="Have questions? We're here to help! Reach out to the AI Caravan team."
      />
      <section id="contact" className="py-10 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Information</h3>

            <div className="space-y-8 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-between">
              <div className="flex items-start space-x-3 w-full sm:w-[30%]">
                <Mail className="w-6 h-6 text-[#f9a31a] mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:help@computer.org" className="text-gray-600 hover:text-[#f9a31a] block">
                    help@computer.org
                  </a>
                  <a href="mailto:islamhalim@ieee.org" className="text-gray-600 hover:text-[#f9a31a] block">
                    islamhalim@ieee.org
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 w-full sm:w-[30%]">
                <Phone className="w-6 h-6 text-[#f9a31a] mt-1" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+12023710101" className="text-gray-600 hover:text-[#f9a31a] block">
                    +1-202-371-0101
                  </a>
                  <a href="tel:+201001146444" className="text-gray-600 hover:text-[#f9a31a] block">
                    +2-010-0114-6444
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 w-full sm:w-[30%]">
                <MapPin className="w-6 h-6 text-[#f9a31a] mt-1" />
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-gray-600">
                    Washington, DC Office<br />
                    2001 L Street N.W., Suite 700<br />
                    Washington, DC 20036-4928
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-center">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/company/ieee-computer-society-r8-ai-caravan/" className="text-gray-600 hover:text-[#f9a31a]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#f9a31a]">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573846683564" className="text-gray-600 hover:text-[#f9a31a]">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
