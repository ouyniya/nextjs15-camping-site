import { MailIcon, Map, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <section id="contact" className="mt-16 md:mt-20">
      <footer className="w-full">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-w-xs mx-auto sm:max-w-2xl lg:max-w-full">
            <div className="col-span-full max-lg:border-b max-lg:pb-8 lg:border-r border-gray-200 lg:col-span-2 lg:max-w-xs lg:mb-0">
              <a
                href="#"
                className="flex justify-center mb-12 lg:justify-start"
              >
                <h1 className="text-2xl font-bold">Nys Camping</h1>
              </a>
              <ul className="grid gap-5">
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <MailIcon size={20} className="stroke-primary" />
                  support@nysdev.com
                </li>
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <PhoneCallIcon size={20} className="stroke-primary" />
                  +66 12 456 7890
                </li>
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <Map size={20} className="stroke-primary" />
                  123 test Rd., Bkk, Thailand
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg font-medium mb-7">NysCamping</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <Link href={`/`}>Home</Link>
                </li>
                <li className="mb-6">
                  <Link href={`/#about`}>About</Link>
                </li>
                <li>
                  <Link href={`/#contact`}>Contact us</Link>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg  font-medium mb-7">Category</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a href="#" className="">
                    Camping
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className=" ">
                    Mountain
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    Food
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg  font-medium mb-7">Accommodation</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a href="#" className="">
                    Hotel
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className=" ">
                    House
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    Hostel
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg  font-medium mb-7">Support</h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a href="#" className="">
                    Support
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className=" ">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center ">
              <span className="text-sm">
                ©<a href="https://nysdev.com/">Nysdev</a> 2025, All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
export default Footer;
