import { EXPERIENCES } from "../Constants";
import { motion } from "framer-motion";
import { useExperiences } from "../hooks/usePortfolioData";

const Experience = () => {
  const { experiences, loading, error } = useExperiences();

  // Use API data if available, otherwise fallback to constants
  const experienceData = experiences && experiences.length > 0 ? experiences : EXPERIENCES;
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiences
      </motion.h2>
      <div>
        {loading ? (
          <div className="text-center text-neutral-400">Loading experiences...</div>
        ) : (
          experienceData.map((experience, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year || experience.duration}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role || experience.position} -{" "}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {(experience.technologies || []).map((tech, techIndex) => (
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
          );
        })
        )}
      </div>
    </div>
  );
};

export default Experience;
