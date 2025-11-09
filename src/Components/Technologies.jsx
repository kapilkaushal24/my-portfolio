import { RiReactjsLine } from "react-icons/ri";
import { SiDocker, SiKubernetes, SiTypescript, SiPython } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaGitAlt, FaCloud } from "react-icons/fa";
import dotnet from '../assets/dot-net-core.png'
import sql from '../assets/sql.png'
import csharp from '../assets/csharp.png'
import { motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <img className="w-10 sm:w-12 md:w-16" src={dotnet} alt=".NET Core" />
        </motion.div>
        <motion.div
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <img className="w-10 sm:w-12 md:w-16" src={csharp} alt="C#" />
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <FaCloud className="text-4xl sm:text-5xl md:text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <SiDocker className="text-4xl sm:text-5xl md:text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <SiKubernetes className="text-4xl sm:text-5xl md:text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVar(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <img className="w-10 sm:w-12 md:w-16" src={sql} alt="SQL Server" />
        </motion.div>
        <motion.div
          variants={iconVar(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <DiRedis className="text-4xl sm:text-5xl md:text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVar(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <RiReactjsLine className="text-4xl sm:text-5xl md:text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVar(4.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <SiTypescript className="text-4xl sm:text-5xl md:text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVar(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <SiPython className="text-4xl sm:text-5xl md:text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVar(5.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-3 md:p-4"
        >
          <FaGitAlt className="text-4xl sm:text-5xl md:text-7xl text-orange-600" />
        </motion.div>
        
        {/* GenAI Technologies Section */}
        <motion.div className="w-full mt-8">
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-center text-xl sm:text-2xl text-purple-400 mb-4 sm:mb-6"
          >
            Generative AI & Machine Learning
          </motion.h3>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <motion.div
              variants={iconVar(3.2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-purple-600 p-3 sm:p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🤖</div>
                <span className="text-xs sm:text-sm text-purple-300">LangChain</span>
              </div>
            </motion.div>
            <motion.div
              variants={iconVar(4.1)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-purple-600 p-3 sm:p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🤗</div>
                <span className="text-xs sm:text-sm text-purple-300">HuggingFace</span>
              </div>
            </motion.div>
            <motion.div
              variants={iconVar(2.9)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-purple-600 p-3 sm:p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🧠</div>
                <span className="text-xs sm:text-sm text-purple-300">OpenAI</span>
              </div>
            </motion.div>
            <motion.div
              variants={iconVar(3.7)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-purple-600 p-3 sm:p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">📊</div>
                <span className="text-xs sm:text-sm text-purple-300">Vector DBs</span>
              </div>
            </motion.div>
            <motion.div
              variants={iconVar(4.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-purple-600 p-3 sm:p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">⚡</div>
                <span className="text-xs sm:text-sm text-purple-300">RAG Systems</span>
              </div>
            </motion.div>
            <motion.div
              variants={iconVar(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-purple-600 p-3 sm:p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">🔗</div>
                <span className="text-xs sm:text-sm text-purple-300">AI Agents</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
