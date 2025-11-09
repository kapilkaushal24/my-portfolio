import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../Constants";
import { motion } from "framer-motion";
import { useAboutSection } from "../hooks/usePortfolioData";
import portfolioApiService from "../services/portfolioApiService";

const About = () => {
  const { about, loading } = useAboutSection();

  // Use API data if available, otherwise fallback to constants
  const aboutContent = about?.content || ABOUT_TEXT;
  const aboutImage = about?.profileImageUrl ? portfolioApiService.getImageUrl(about.profileImageUrl) : aboutImg;
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 sm:my-16 lg:my-20 text-center text-3xl sm:text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 mb-6 lg:mb-0"
        >
          <div className="flex items-center justify-center px-4 sm:px-0">
            <img 
              className="rounded-2xl max-w-full h-auto" 
              src={aboutImage} 
              alt="About Kapil Kaushal"
              onError={(e) => {
                // Fallback to local image if API image fails to load
                e.target.src = aboutImg;
              }}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start px-4 sm:px-0">
            <p className="my-2 max-w-xl py-4 sm:py-6 text-sm sm:text-base">
              {loading ? "Loading about content..." : aboutContent}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
