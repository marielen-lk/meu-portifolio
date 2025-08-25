import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 
                 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-2xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-8 text-center"
        >
          Entre em Contato
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 mb-10"
        >
          Ficarei feliz em conversar! Você pode me encontrar pelos links abaixo:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="https://linkedin.com/in/marielen-latauczeski"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href="mailto:marielen.latauczeski@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-900 text-white shadow-md transition"
          >
            <Mail className="w-5 h-5" />
            E-mail
          </a>

          <a
            href="https://github.com/marielen-lk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-800 text-white shadow-md transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
