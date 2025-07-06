import Image from 'next/image';

export default function HeroPage() {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-screen px-4">
      <div>
        <Image
          src="/profile.jpg"
          alt="profile"
          width={100}
          height={200}
          className="rounded-full mb-4"
          objectFit='cover'
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold">
        building digital <br />
        <span className="text-gray-800">products, brands, and experience.</span>
      </h1>
      <button className="mt-6 px-6 py-2 bg-black text-white rounded-full"></button>
    </div>
  );
}
