import React from "react";
import Link from "next/link";
import Header from '@/components/ui/header/header';
import { dictionary } from '@/data/blogs-info'; // Import dictionary here


export default function ServicesList() {
  return (
    <div className="space-y-6 px-80 py-6 ">
<Header title="My Thoughts" subtitle="考え" />
      <div className="space-y-4">
        {dictionary.map((item, index) => (
          <Link key={index} href={`blogs/${index}`}>
            <div className="my-5 bg-[#151924] hover:bg-[#22293b] p-6 rounded-xl shadow-lg space-y-4 cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-20 h-20 rounded-lg object-cover" 
                />
                <span className=" text-xl font-semibold ml-5">{item.name}</span>

              </div>
              <p className="text-gray-400">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
