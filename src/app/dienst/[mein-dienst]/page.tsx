import { dictionary } from "@/data/dienst-data";
import Header from "@/components/ui/header/header";

export function generateStaticParams() {
  const dienstIds = Object.keys(dictionary);

  return dienstIds.map((dienstId) => ({
    "mein-dienst": dienstId, 
  }));
}

export default function Dienst({ params }: { params: { "mein-dienst": number } }) {
  const meinDienst = dictionary[params["mein-dienst"]];

  // Ensure skills exists and is an array before mapping
  const skills = meinDienst.skills || [];

  return (
    <article className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Header Section */}
        <Header title={meinDienst.name} subtitle="Development" />

        {/* Content Section */}
        <section className="space-y-8">
          {/* Info Paragraph */}
          <p className="text-lg leading-relaxed text-gray-300">{meinDienst.info}</p>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={meinDienst.imageUrl}
              alt={`${meinDienst.name} illustration`}
              className="w-80 h-80 max-w-3xl rounded-lg transform hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Skills Section */}
          <h2 className="text-2xl font-bold text-gray-100">My Skills:</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-300">
            {skills.length > 0 ? (
              skills.map((skill: string, index: number) => (
                <li key={index}>{skill}</li>
              ))
            ) : (
              <li>No skills available</li>
            )}
          </ul>

          {/* Professional Invitation */}
          <p className="text-lg leading-relaxed text-gray-300">
            If you're looking for a passionate, skilled, and reliable partner to bring your ideas to life, I would be thrilled to collaborate with you. Whether you're looking to build a powerful mobile app with Flutter or a dynamic, responsive website, I am confident in my ability to help you achieve your goals. Let's work together to create something impactful and innovative.
            <br /><br />
            Please feel free to reach out to discuss your project in more detail or to explore how we can bring your vision to reality. I look forward to the opportunity to collaborate!
          </p>
        </section>
      </div>
    </article>
  );
}
