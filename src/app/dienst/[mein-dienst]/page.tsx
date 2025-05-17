import React from "react";
import { dictionary } from "@/data/dienst-data";
import Header from "@/components/ui/header/header";
import Image from "next/image";

// Static params generation (assuming dienst IDs are strings)
export function generateStaticParams() {
  const dienstIds = Object.keys(dictionary);

  return dienstIds.map((dienstId) => ({
    "mein-dienst": dienstId,
  }));
}

// The main component
export default async function Dienst({
  params,
}: {
  params: { "mein-dienst": string };
}) {
  const dienstId = params["mein-dienst"];

  // Parse the dienstId to number to match dictionary keys if keys are numbers
  const meinDienstId = parseInt(dienstId, 10);

  const meinDienst = dictionary[meinDienstId];

  if (!meinDienst) {
    return <div className="text-center text-red-500">Dienst not found.</div>;
  }

  const skills = meinDienst.skills || [];

  return (
    <article className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <Header title={meinDienst.name} subtitle="Development" />

        <section className="space-y-8">
          <p className="text-lg leading-relaxed text-gray-300">{meinDienst.info}</p>

          <div className="flex justify-center">
            <Image
              src={meinDienst.imageUrl}
              alt={`${meinDienst.name} illustration`}
              width={500}
              height={300}
              className="w-80 h-80 max-w-3xl rounded-lg transform hover:scale-105 transition-all duration-300"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-100">My Skills:</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-300">
            {skills.length > 0 ? (
              skills.map((skill, index) => <li key={index}>{skill}</li>)
            ) : (
              <li>No skills available</li>
            )}
          </ul>

          <p className="text-lg leading-relaxed text-gray-300">
            If you&apos;re looking for a passionate, skilled, and reliable partner to
            bring your ideas to life, I would be thrilled to collaborate with you.
            Whether you&apos;re looking to build a powerful mobile app with Flutter or a
            dynamic, responsive website, I am confident in my ability to help you achieve
            your goals. Let&apos;s work together to create something impactful and
            innovative.
            <br />
            <br />
            Please feel free to reach out to discuss your project in more detail or to
            explore how we can bring your vision to reality. I look forward to the
            opportunity to collaborate!
          </p>
        </section>
      </div>
    </article>
  );
}
