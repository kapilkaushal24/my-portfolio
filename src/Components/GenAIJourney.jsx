import { motion } from "framer-motion";

const GenAIJourney = () => {
  const learningPath = [
    {
      phase: "Foundation Phase",
      period: "Current - 2025",
      status: "In Progress",
      description: "Building strong fundamentals in Generative AI and Large Language Models",
      technologies: ["Python", "LangChain", "HuggingFace Transformers", "OpenAI API"],
      achievements: [
        "Enrolled in Complete Generative AI Course with LangChain and HuggingFace",
        "Learning prompt engineering and AI model integration",
        "Exploring vector databases and embeddings",
        "Building first AI-powered applications"
      ]
    },
    {
      phase: "Integration Phase",
      period: "Planned - 2025",
      status: "Upcoming",
      description: "Integrating GenAI capabilities with enterprise .NET applications",
      technologies: ["Semantic Kernel", "Azure OpenAI", "ML.NET", "Cognitive Services"],
      achievements: [
        "Plan to integrate AI features into existing .NET projects",
        "Explore Azure AI services for enterprise solutions",
        "Build AI-enhanced dealership management features",
        "Develop intelligent automation workflows"
      ]
    },
    {
      phase: "Specialization Phase",
      period: "Future - 2025+",
      status: "Vision",
      description: "Becoming an AI-First Backend Engineer with deep GenAI expertise",
      technologies: ["Custom Models", "MLOps", "AI Architecture", "Edge AI"],
      achievements: [
        "Lead AI transformation in enterprise applications", 
        "Design AI-first system architectures",
        "Mentor teams in AI integration best practices",
        "Contribute to open-source AI tools and frameworks"
      ]
    }
  ];

  const currentCourses = [
    {
      title: "Complete Generative AI Course with LangChain and HuggingFace",
      platform: "Udemy",
      progress: "In Progress",
      description: "Comprehensive course covering modern GenAI development with practical projects",
      topics: [
        "LangChain Framework & Chains",
        "HuggingFace Model Integration", 
        "Vector Databases & RAG Systems",
        "AI Agent Development",
        "Prompt Engineering",
        "Production Deployment"
      ]
    }
  ];

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Generative AI <span className="text-purple-500">Journey</span>
      </motion.h2>

      {/* Current Learning Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-semibold text-center mb-8 text-purple-400">
          Current Learning & Courses
        </h3>
        {currentCourses.map((course, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-600/30"
          >
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{course.title}</h4>
                <p className="text-purple-300 mb-2">Platform: {course.platform}</p>
                <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.progress}
                </span>
              </div>
            </div>
            <p className="text-neutral-300 mb-4">{course.description}</p>
            <div className="mb-4">
              <h5 className="text-purple-400 font-semibold mb-2">Key Topics:</h5>
              <div className="flex flex-wrap gap-2">
                {course.topics.map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="bg-neutral-800 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/30"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Learning Roadmap */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-12 text-purple-400">
          AI Learning Roadmap
        </h3>
        <div className="space-y-8">
          {learningPath.map((phase, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-6 items-center`}
            >
              {/* Timeline indicator */}
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full border-4 ${
                  phase.status === 'In Progress' 
                    ? 'border-purple-500 bg-purple-500' 
                    : phase.status === 'Upcoming'
                    ? 'border-purple-400 bg-neutral-900'
                    : 'border-purple-300 bg-neutral-800'
                }`} />
                {index < learningPath.length - 1 && (
                  <div className="w-px h-16 bg-gradient-to-b from-purple-500 to-purple-300 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 rounded-lg p-6 border border-neutral-700">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{phase.phase}</h4>
                    <p className="text-purple-300">{phase.period}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    phase.status === 'In Progress'
                      ? 'bg-purple-600 text-white'
                      : phase.status === 'Upcoming'
                      ? 'bg-purple-400 text-neutral-900'
                      : 'bg-purple-300 text-neutral-900'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                
                <p className="text-neutral-300 mb-4">{phase.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-purple-400 font-semibold mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {phase.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-800 text-purple-300 px-2 py-1 rounded text-sm border border-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-purple-400 font-semibold mb-2">
                    {phase.status === 'In Progress' ? 'Current Progress:' : 
                     phase.status === 'Upcoming' ? 'Planned Goals:' : 'Vision:'}
                  </h5>
                  <ul className="text-neutral-300 space-y-1">
                    {phase.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Vision Statement */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-8 border border-purple-600/30"
      >
        <h3 className="text-2xl font-semibold mb-4 text-purple-400">AI-First Vision</h3>
        <p className="text-lg text-neutral-300 max-w-4xl mx-auto leading-relaxed">
          &ldquo;My goal is to become an AI-First Backend Engineer, seamlessly integrating Generative AI 
          capabilities into enterprise applications. I envision building intelligent systems that 
          not only process data but understand context, generate insights, and automate complex 
          decision-making processes. Through continuous learning and hands-on practice, I&apos;m working 
          towards creating the next generation of smart, adaptive enterprise solutions.&rdquo;
        </p>
      </motion.div>
    </div>
  );
};

export default GenAIJourney;