'use client';

import Image from 'next/image';
import profilePic from '/public/profile.jpg'; // pastikan file ini ada di folder /public

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Foto profil */}
      <Image
        src={profilePic}
        alt="Fachri Fatah"
        width={250}
        height={250}
        className="rounded-full border-4 border-gray-300 shadow-md mb-6"
      />

      {/* Judul */}
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-gray-600 mt-2">Frontend Developer | Fullstack Enthusiast</p>
    </section>
  );
}
