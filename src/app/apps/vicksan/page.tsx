import React from "react";
import { dictionary } from "@/data/apps-info";
import Header from "@/components/ui/header/header";
import Image from "next/image";

const Vicksan = () => {
  


  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="space-y-10">
          {/* Header Section */}
          <Header title={dictionary[0].name} subtitle={`Vicken | ${dictionary[0].date}`} />

          <section className="space-y-12">
            {/* Blog Info Section */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start">
              <div className="flex-shrink-0">
                 <Image 
                width={500}
                height={300}
                  src={dictionary[0].imageUrl}
                  alt={`${dictionary[0].name} main illustration`}
                  className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="lg:flex-1 mt-6 lg:mt-0">
                <p className="text-lg leading-relaxed">{dictionary[0].intro}</p>
              </div>
            </div>

            {/* Row of Images */}
            {dictionary[0].images && dictionary[0].images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dictionary[0].images.map((image, index) => (
                   <Image 
                    width={500}
                    height={300}
                    key={index}
                    src={image}
                    alt={`${dictionary[0].name} additional illustration ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                  />
                ))}
              </div>
            )}
          </section>

          {/* Footer Section */}
          <footer className="space-y-6">
            <p className="text-lg leading-relaxed">{dictionary[0].conclusion}</p>
          </footer>
          <a
            href={dictionary[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-transparent  text-lg font-medium rounded-lg border border-white shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-white hover:text-black"
          >
             <Image 
                width={500}
                height={300}
              src="/images/gp.png"
              alt="Google Play Logo"
              className="w-5 h-5 mr-3"
            />
            <span className="text-sm font-semibold">Google Play</span>
          </a>
        </article>
      </main>
    </div>
  );
};

export default Vicksan;
