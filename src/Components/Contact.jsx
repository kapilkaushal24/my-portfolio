import { CONTACT } from "../Constants";
import { motion } from "framer-motion";
import { useContactInfo } from "../hooks/usePortfolioData";

const Contact = () => {
  const { contact, loading } = useContactInfo();

  // Use API data if available, otherwise fallback to constants
  const contactData = contact || CONTACT;
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-3xl sm:text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter px-4">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-sm sm:text-base"
        >
          {loading ? "Loading..." : contactData.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-sm sm:text-base"
        >
          {loading ? "Loading..." : contactData.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href={`mailto:${contactData.email}`}
          className="border-b hover:text-purple-300 transition-colors text-sm sm:text-base break-all"
        >
          {loading ? "Loading..." : contactData.email}
        </motion.a>
        
        {/* Resume Download Button */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="/Kapil-Kaushal-Resume.docx"
            download="Kapil-Kaushal-Resume.docx"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
