import { motion } from 'framer-motion';

const projects = [
  { title: 'Project A', description: 'Awesome project details', link: '#' },
  { title: 'Project B', description: 'Another cool project', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}