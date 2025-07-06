'use client';

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    role: 'Freelance Photographer',
    company: 'Self-employed',
    period: '2022 - Present',
    description:
      'Specialized in product, prewedding, and sports photography. Responsible for end-to-end production including editing and client delivery.',
  },
  {
    role: 'Frontend Developer (Intern)',
    company: 'Purwadhika Bootcamp',
    period: '2025',
    description:
      'Built responsive interfaces using Next.js, Tailwind CSS, and integrated backend services like Backendless for authentication and CRUD.',
  },
  // Tambahin pengalaman lainnya di sini
];

export default function ExperiencePage() {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <p className="text-gray-600 mb-10">
          Roles I've taken part in, contributing to real-world projects and
          teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Experience 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">Frontend Developer</h3>
            <p className="text-sm text-gray-500 mb-2">
              XYZ Company · 2023 - Present
            </p>
            <p className="text-gray-700 text-sm">
              Developed responsive UI with React and Tailwind CSS. Collaborated
              with backend team to integrate APIs and optimize performance.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">UI Designer</h3>
            <p className="text-sm text-gray-500 mb-2">
              Freelance · 2022 - 2023
            </p>
            <p className="text-gray-700 text-sm">
              Created wireframes and prototypes using Figma for various landing
              pages and web apps. Focused on accessibility and clean design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
