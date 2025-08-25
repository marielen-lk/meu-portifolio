import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Página em React + Vite com animações modernas para exibir minhas habilidades, experiências e projetos.",
      tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
      demo: "#",
    },
    {
      title: "Aplicativo de Controle de Gastos",
      description: "App pessoal para registrar despesas mensais, com backend em Django e frontend em React.",
      tech: ["Django", "React", "MySQL"],
      github: null,
    },
    {
      title: "Automação de Triagem de Notas Fiscais",
      description: "Solução desenvolvida na empresa para otimizar a triagem de NFes, extraindo informações relevantes (data, empresa, endereço, peso, distância calculada) e reduzindo tempo gasto pela equipe.",
      tech: ["Python", "Pandas", "Google Maps API"],
      github: null, // não tem repositório público
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-8 text-center"
        >
          Projetos
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
