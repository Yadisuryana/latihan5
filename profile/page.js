"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-10 transition-colors duration-300">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Profile
      </motion.h1>
      
      <motion.div 
        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-lg transition-colors duration-300 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        {/* Efek Lingkaran Glow */}
        <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-5 w-16 h-16 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>

        {/* Avatar dengan Animasi */}
        <motion.div 
          className="w-[20vw] h-[20vw] max-w-[150px] max-h-[150px] rounded-full border-[5px] border-white flex items-center justify-center overflow-hidden mx-auto shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full object-cover w-full h-full"
          />
        </motion.div>

        <motion.h2 
          className="text-2xl font-semibold mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Yadi Suryana
        </motion.h2>
        
        <motion.p 
          className="text-gray-700 dark:text-gray-300 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Front-End Developer | Passionate about Web & AI
        </motion.p>
      </motion.div>
    </div>
  );
}
