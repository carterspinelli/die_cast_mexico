import React from "react";
import { motion } from "framer-motion";
import { AnimatedGradient } from "./animated-gradient";

const BentoCard = ({
  title,
  value,
  subtitle,
  colors,
  delay = 0.2,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-white rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-6 text-black backdrop-blur-sm h-full flex flex-col justify-between"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 
          className="text-sm sm:text-base md:text-lg font-medium" 
          variants={item}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-2xl sm:text-4xl md:text-5xl font-bold my-2"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p 
            className="text-sm opacity-80" 
            variants={item}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export { BentoCard };