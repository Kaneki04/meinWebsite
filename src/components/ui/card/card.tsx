'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  image: string;
  title: string;
  href: string;
}

export default function SquareCard({ image, title, href }: CardProps) {
  return (
    <Link
      href={href}
      className="p-5 max-w-xs w-full rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:bg-gray-600 transform transition duration-300 hover:scale-105"
    >
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col p-6">
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">{title}</p>
          <div className="text-md font-medium">By Vicken</div>
        </div>
      </div>
    </Link>
  );
}
