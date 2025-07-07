'use client';

import Image from 'next/image';
import profilePic from '/public/profile.jpg';

export default function HeroPage() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white text-black"
    >
      <Image
        src={profilePic}
        alt="Fachri Fatah"
        width={200}
        height={200}
        className="rounded-full border border-gray-300 shadow-md mb-6"
        priority
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Fachri Fatah
      </h1>
      <p className="text-lg md:text-xl text-gray-700">
        Frontend Developer | Fullstack Enthusiast
      </p>
    </section>
  );
}