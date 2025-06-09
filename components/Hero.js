import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white">Hi, I'm Mihlali Nonyukela</h1>
        <p className="text-xl text-indigo-100 mt-4">Software Developer | React & Next.js</p>
      </motion.div>
    </section>
  );
}
