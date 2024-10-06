import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import dotnet from '../assets/dot-net-core.png'
import dottnet from '../assets/dot-net.png'
import sql from '../assets/sql.png'
import csharp from '../assets/csharp.png'
import vs from '../assets/vs2022.png'

import { motion } from "framer-motion";
// import { BiLogoSql } from 'react-icons/bi'
// import { FaAspNet } from 'react-icons/fa'

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
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-16" src={dotnet} alt="" />
          {/* <TbBrandNextjs className="text-7xl" /> */}
        </motion.div>
        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-24" src={dottnet} alt="" />
          {/* <SiMongodb className="text-7xl text-green-500" /> */}
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-16" src={sql} alt="" />
          {/* <DiRedis className="text-7xl text-red-700" /> */}
        </motion.div>
        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-16" src={csharp} alt="" />
          {/* <FaNodeJs className="text-7xl text-green-500" /> */}
        </motion.div>
        <motion.div
          variants={iconVar(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="w-16" src={vs} alt="" />
          {/* <BiLogoPostgresql className="text-7xl text-sky-700" /> */}
        </motion.div>
        {/* <motion.div 
        variants={iconVar(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-green-700" />
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Technologies;
