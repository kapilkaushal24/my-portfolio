import { HERO_CONTENT } from "../Constants";
import profilePic from "../assets/KapilPic.png";
import { motion } from "framer-motion";
import { useHeroSection } from "../hooks/usePortfolioData";
import portfolioApiService from "../services/portfolioApiService";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  const { hero, loading } = useHeroSection();

  // Use API data if available, otherwise fallback to constants
  const heroContent = hero?.heroContent || hero?.content || HERO_CONTENT;
  const heroName = hero?.name || "Kapil Kaushal";
  const heroRole = hero?.role || "Full Stack Developer";
  // Profile image comes from Hero section's profileImageUrl
  const profileImage = hero?.profileImageUrl ? portfolioApiService.getImageUrl(hero.profileImageUrl) : profilePic;
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              {loading ? "Loading..." : heroName}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="
              bg-gradient-to-r
            from-pink-300 
            via-slate-500 
            to-purple-500
            bg-clip-text
            text-3xl
            tracking-tight
            text-transparent "
            >
              {loading ? "Loading..." : heroRole}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {loading ? "Loading content..." : heroContent}
            </motion.p>
            
            {/* Resume Download Button */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <a
                href="/Kapil-Kaushal-Resume.docx"
                download="Kapil-Kaushal-Resume.docx"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              
              <a
                href="mailto:kapilkaushal466@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.71a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              src={profileImage}
              alt={heroName}
              onError={(e) => {
                // Fallback to local image if API image fails to load
                e.target.src = profilePic;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
