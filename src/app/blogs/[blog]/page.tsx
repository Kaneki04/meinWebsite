import { dictionary } from "@/data/blogs-info"; // Assuming dictionary is imported from a different file
import Header from "@/components/ui/header/header";
import Image from "next/image";

type Params = Promise<{ blog: string }>; // Wrap the params in a Promise

export function generateStaticParams() {
  const blogIds = Object.keys(dictionary);
  return blogIds.map((blogId) => ({
    blog: blogId, // Ensure blogId matches the params
  }));
}

export default async function BlogPost({ params }: { params: Params }) {
  const { blog } = await params;

  console.log("Blog ID:", blog); // Log the received blog ID
  const blogData = dictionary[blog];

  console.log("Blog Data:", blogData); // Log the blog data retrieved

  if (!blogData) {
    return <div>Error: Blog not found for ID: {blog}</div>; // Show a more detailed error message
  }

  return (
    <div className="text-gray-200 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="space-y-10">
          <Header title={blogData.name} subtitle={`Vicken | ${blogData.date}`} />
          <section className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start">
              <div className="flex-shrink-0">
                <Image
                  src={blogData.imageUrl}
                  alt="Blog illustration"
                  width={500}
                  height={300}
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
