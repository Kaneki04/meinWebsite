import React from "react";
import { dictionary } from "@/data/blogs-info";
import Header from "@/components/ui/header/header";
import Image from "next/image";

export function generateStaticParams() {
  const blogIds = Object.keys(dictionary); // Assuming dictionary has blog IDs as keys

  return blogIds.map((blogId) => ({
    blog: blogId, 
  }));
}

export default async function BlogPost({ params }: { params: { blog: number } }) {
  const blogData = await dictionary[params.blog];

  return (
    <div className="text-gray-200 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="space-y-10">
          <Header title={blogData.name} subtitle={`Vicken | ${blogData.date}`} />

          <section className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start">
              <div className="flex-shrink-0">
              <Image
              src={blogData.imageUrl} // Ensure the path is correct
              alt="Blog illustration"
                width={500}  // Set the width and height as needed
                height={300} // Set the height
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />

              </div>
              <div className="lg:flex-1 mt-6 lg:mt-0">
                <p className="text-lg leading-relaxed">{blogData.infoIntro}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg leading-relaxed">{blogData.infoWhole}</p>
            </div>
          </section>

          <footer className="space-y-6">
            <p className="text-lg leading-relaxed">{blogData.conclusion}</p>
          </footer>
        </article>
      </main>
    </div>
  );
}
