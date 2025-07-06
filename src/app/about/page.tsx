'use client';

export default function AboutPage() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 text-lg mb-6">
          Hi! I’m <span className="font-semibold">Fachri Fatah</span>, a passionate full-stack web developer based in Indonesia.
          I love building clean and functional digital experiences with modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>React.js, Next.js</li>
              <li>Tailwind CSS, Chakra UI</li>
              <li>HTML5, CSS3, JavaScript, TypeScript</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Node.js, Express.js</li>
              <li>MongoDB, REST API</li>
              <li>Backendless (for quick setup)</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Tools & Values</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Git & GitHub, Figma</li>
              <li>Postman, VS Code</li>
              <li>Fast learner, team player, detail-oriented</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
