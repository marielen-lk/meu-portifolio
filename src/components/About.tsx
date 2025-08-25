import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 
                 bg-gray-50 dark:bg-gray-900 transition-colors mt-3"
    >
      <div className="max-w-6xl w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-10"
        >
          Atuo como desenvolvedora Full Stack há 2 anos, com foco em aplicações web. 
          Iniciei minha carreira em 2022 na ABR Energias, onde desenvolvi
          uma calculadora e um simulador solar que marcaram meu primeiro contato
          profissional com programação. Atualmente, faço parte da equipe da Sinergia
          Engenharia e Meio Ambiente desenvolvendo o software INGEE, atuando com React + TypeScript no frontend e
          Flask + Python no backend, além de deploys com Azure DevOps e AWS.
        </motion.p>

        <div className="mb-14">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-8 text-center">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "React.js (TypeScript, Vite)",
              "JavaScript, CSS3",
              "Python (Django, Flask)",
              "MySQL",
              "Azure DevOps, AWS",
              "GitFlow",
              "APIs",
              "Jira",
              "Styled-components",
              "Bootstrap",
              "Tailwind",
              "Postman"
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-2xl shadow-md bg-white/70 dark:bg-gray-800/70 
                           backdrop-blur-sm border border-gray-200 dark:border-gray-700
                           text-center font-medium text-gray-800 dark:text-gray-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-8 text-center">
            Experiência Profissional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 rounded-2xl shadow-lg bg-white/70 dark:bg-gray-800/70 
                         backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition"
            >
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                Desenvolvedora Full Stack Pleno
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                2024 - Atual | Sinergia Engenharia
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>React + TypeScript no frontend</li>
                <li>Flask (Python) no backend</li>
                <li>Deploys com Azure DevOps e AWS</li>
              </ul>
            </motion.div>


            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 rounded-2xl shadow-lg bg-white/70 dark:bg-gray-800/70 
                         backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition"
            >
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                Estagiária
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                2022 - 2024 | ABR Energias
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Atendimento de suporte técnico aos colaboradores</li>
                <li>Desenvolvimento de calculadora solar e simulador solar</li>
                <li>Primeira experiência prática com programação em ambiente profissional</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-5 rounded-2xl shadow-lg bg-white/70 dark:bg-gray-800/70 
                         backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition"
            >
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                Agente de Atendimento Técnico
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                2021 - 2022 | SYKES/SITEL
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Atendimento e suporte técnico a clientes de grande porte</li>
                <li>Resolução de incidentes e orientações sobre serviços digitais</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-8 text-center">
            Formação
          </h3>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-5 rounded-2xl shadow-lg bg-white/70 dark:bg-gray-800/70 
                       backdrop-blur-sm border border-gray-200 dark:border-gray-700 transition"
          >
            <p className="text-gray-800 dark:text-gray-200 font-semibold">
              🎓 Tecnólogo em Análise e Desenvolvimento de Sistemas - Estácio (2024)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
              Durante o curso, desenvolvi projetos práticos em diferentes áreas, como 
              uma mini estação meteorológica com IoT e ESP32, um drumkit interativo em 
              JavaScript e um miniblog com React e Firebase.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            className="text-gray-700 dark:text-gray-300 hover:text-fuchsia-600 transition"
            href="https://github.com/marielen-lk"
            target="_blank"
          >
            <Github className="w-7 h-7" />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="https://linkedin.com/in/marielen-latauczeski"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-fuchsia-600 transition"
          >
            <Linkedin className="w-7 h-7" />
          </motion.a>
          <motion.a
            whileHover={{ y: -4, scale: 1.1 }}
            href="mailto:marielen.latauczeski@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-fuchsia-600 transition"
          >
            <Mail className="w-7 h-7" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
