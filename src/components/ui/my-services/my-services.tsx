import { FaLaptop, FaMobileAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <div>
      <h2 className=" text-2xl font-medium pb-5 animate__animated animate__fadeIn">What I Provide</h2>
      <div className="space-y-4">
        <Link href="/dienst/0" className="grid place-items-center">
        <div className="bg-gray-800 rounded-3xl p-6 space-y-4 w-60 transform transition-all duration-300 hover:scale-105 hover:bg-[#2A2E37] hover:shadow-xl animate__animated animate__fadeIn animate__delay-1s">
          <div className="flex items-center gap-2 ">
            <FaMobileAlt className="w-5 h-5 text-[#4CD6D6] transition-colors duration-300 hover:text-[#2D89A7]" />
            <span className="">App Dev.</span>
          </div>
          <p className="">With Flutter</p>
          <Link 
            href="/dienst/0" 
            className="inline-flex items-center  hover:text-[#4CD6D6] transition-colors duration-300">
            Know more <FaArrowRight className="w-4 h-4 ml-1 " />
          </Link>
        </div>
        </Link>
        <Link href="/dienst/1" className="grid place-items-center ">
        <div className="bg-gray-800 rounded-3xl p-6 space-y-4 w-60 transform transition-all duration-300 hover:scale-105 hover:bg-[#2A2E37] hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s">
          <div className="flex items-center gap-2 ">
            <FaLaptop className="w-5 h-5 text-[#4CD6D6] transition-colors duration-300 hover:text-[#2D89A7] " />
            <span className="">Web Dev.</span>
          </div>
          <p className="">With JS/React/Node</p>
          <Link 
            href="/dienst/1" 
            className="inline-flex items-center  hover:text-[#4CD6D6] transition-colors duration-300 ">
            Know more <FaArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        </Link>
        
      </div>
    </div>
  );
}
