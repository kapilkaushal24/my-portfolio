import { PROJECTS } from "../Constants";
import { motion } from "framer-motion";
import { useProjects } from "../hooks/usePortfolioData";
import portfolioApiService from "../services/portfolioApiService";

const Projects = () => {
  const { projects, loading } = useProjects();

  // Use API data if available, otherwise fallback to constants
  const projectData = projects && projects.length > 0 ? projects : PROJECTS;
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center my-20"
      >
        Projects
      </motion.h2>
      <div>
        {loading ? (
          <div className="text-center text-neutral-400">Loading projects...</div>
        ) : (
          projectData.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full mb-4 lg:mb-0 lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={project.imageUrl ? portfolioApiService.getImageUrl(project.imageUrl) : project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-full lg:h-auto object-cover"
                onError={(e) => {
                  // Fallback to original image if API image fails
                  if (project.image && e.target.src !== project.image) {
                    e.target.src = project.image;
                  }
                }}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 px-2 sm:px-0"
            >
              <h6 className="mb-2 font-semibold text-lg sm:text-xl">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-sm sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {(project.technologies || []).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-300 border border-purple-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
