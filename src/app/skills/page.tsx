'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaGithub } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiTypescript,
} from 'react-icons/si';

// 👉 Array daftar skill
const skills = [
  {
    icon: <FaReact className="text-black text-4xl mb-2 card-body items-center" />,
    title: 'React.js',
    desc: 'Frontend library for UI components',
  },
  {
    icon: <SiTailwindcss className="text-black justify-center text-4xl mb-2" />,
    title: 'Tailwind CSS',
    desc: 'Utility-first CSS framework',
  },
  {
    icon: <SiTypescript className="text-blue-600 text-4xl mb-2" />,
    title: 'TypeScript',
    desc: 'Typed superset of JavaScript',
  },
  {
    icon: <FaNodeJs className="text-green-600 text-4xl mb-2" />,
    title: 'Node.js',
    desc: 'Backend runtime environment',
  },
  {
    icon: <SiExpress className="text-gray-700 text-4xl mb-2" />,
    title: 'Express.js',
    desc: 'Web framework for Node.js',
  },
  {
    icon: <SiMongodb className="text-green-700 text-4xl mb-2" />,
    title: 'MongoDB',
    desc: 'NoSQL database',
  },
  {
    icon: <SiPostman className="text-orange-500 text-4xl mb-2" />,
    title: 'Postman',
    desc: 'API testing & documentation',
  },
  {
    icon: <FaFigma className="text-pink-500 text-4xl mb-2" />,
    title: 'Figma',
    desc: 'UI/UX design tool',
  },
  {
    icon: <FaGithub className="text-black text-4xl mb-2" />,
    title: 'GitHub',
    desc: 'Version control & collaboration',
  },
];

export default function SkillsPage() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-black font-bold mb-4">My Skills</h2>
        <p className="text-gray-600 mb-10">
          Technologies and tools I use to build and maintain digital products.
        </p>

        {/* 🔄 Loop card skill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-white shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="card-body items-center justify-center text-center">
                {skill.icon}
                <h3 className="card-title">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
