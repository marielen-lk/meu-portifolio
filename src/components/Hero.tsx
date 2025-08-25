import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Imagem from "../../public/assets/curriculo-imagem.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen flex flex-col justify-center items-center px-6
                 bg-gradient-to-r from-violet-50 via-white to-fuchsia-50
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 transition-colors relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600"
          >
            Marielen Latauczeski
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-2 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          >
            Analista e Desenvolvedora de Sistemas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg"
          >
            Transformo ideias em soluções digitais e eficientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 flex justify-center md:justify-start gap-4"
          >
            <a
              href="/projetos"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Ver Projetos
            </a>
            <a
              href="/contato"
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold transition"
            >
              Contato
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 flex gap-6 justify-center md:justify-start text-gray-600 dark:text-gray-300"
          >
            <a href="https://github.com/marielen-lk" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 hover:text-fuchsia-600 transition" />
            </a>
            <a href="https://linkedin.com/in/marielen-latauczeski" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 hover:text-fuchsia-600 transition" />
            </a>
            <a href="mailto:marielen.latauczeski@gmail.com">
              <Mail className="w-6 h-6 hover:text-fuchsia-600 transition" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-violet-500 shadow-xl">
            <img
              src={Imagem}
              alt="Foto Marielen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-fuchsia-500 opacity-20 blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
