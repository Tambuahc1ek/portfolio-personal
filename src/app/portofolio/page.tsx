'use client';

type Project = {
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: 'E-Commerce Web App',
    situation: 'A bootcamp final project where I needed to showcase full-stack capabilities.',
    task: 'Build an online store with product listing, cart, and checkout flow.',
    action: 'Used Next.js, Tailwind CSS, and Backendless for authentication and API integration.',
    result: 'Completed the MVP in 2 weeks with responsive layout and functional cart system.',
    link: '#', // optional: link to GitHub or deployed site
  },
  {
    title: 'Personal Portfolio Website',
    situation: 'I needed a space to showcase my work and skills.',
    task: 'Design and develop a personal website from scratch.',
    action: 'Built using Next.js App Router, Tailwind CSS, and hosted on Vercel.',
    result: 'Improved visibility and got positive feedback during interviews.',
    link: '#',
  },
  // Kamu bisa tambah lebih banyak project di sini
];

export default function PortfolioPage() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><span className="font-medium">Situation:</span> {project.situation}</li>
                <li><span className="font-medium">Task:</span> {project.task}</li>
                <li><span className="font-medium">Action:</span> {project.action}</li>
                <li><span className="font-medium">Result:</span> {project.result}</li>
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-block mt-4 text-blue-500 hover:underline text-sm"
                  target="_blank"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
