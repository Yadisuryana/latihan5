"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const classes = {
  SI: [
    { name: "Yadi", img: "/images/profile.jpg" },
    { name: "Bob", img: "/images/profil.jpg" },
    { name: "Charlie", img: "/images/profil.jpg" },
    { name: "David", img: "/images/profil.jpg" },
    { name: "Eve", img: "/images/profil.jpg" },
  ],
  KA: [
    { name: "Frank", img: "/images/profil.jpg" },
    { name: "Grace", img: "/images/profil.jpg" },
    { name: "Hank", img: "/images/profil.jpg" },
    { name: "Ivy", img: "/images/profil.jpg" },
    { name: "Jack", img: "/images/profil.jpg" },
  ],
  BD: [
    { name: "Kate", img: "/images/profil.jpg" },
    { name: "Leo", img: "/images/profil.jpg" },
    { name: "Mia", img: "/images/profil.jpg" },
    { name: "Noah", img: "/images/profil.jpg" },
    { name: "Olivia", img: "/images/profil.jpg" },
  ],
};

const ProfileCard = ({ name, img }) => (
  <motion.div
    className="flex flex-col items-center transition-all duration-300"
    whileHover={{ scale: 1.15 }}
  >
    <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden relative transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
      <Image
        src={img}
        alt={name}
        width={80}
        height={80}
        className="w-full h-full object-cover"
      />
      {/* Efek Glow Hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-400 opacity-0 transition-opacity duration-300"
        whileHover={{ opacity: 0.3 }}
      />
    </div>
    <motion.p
      className="text-sm mt-2 font-medium text-gray-900 transition-all duration-300"
      whileHover={{ scale: 1.1, color: "#2563eb" }}
    >
      {name}
    </motion.p>
  </motion.div>
);

const ClassCard = ({ className, students }) => (
  <motion.div
    className="bg-gradient-to-br from-blue-100 to-purple-200 shadow-lg rounded-2xl p-6 text-center w-full md:w-1/3 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    {/* Efek Lingkaran Glow */}
    <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-5 right-5 w-16 h-16 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>

    <h2 className="text-xl font-bold mb-4 text-gray-900 transition-all duration-300 hover:text-blue-500">
      {className}
    </h2>
    <div className="flex justify-center gap-4 flex-wrap">
      {students.map((student, index) => (
        <ProfileCard key={index} name={student.name} img={student.img} />
      ))}
    </div>
  </motion.div>
);

export default function ProfileKelas() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 flex flex-wrap justify-center gap-6">
      <motion.h1
        className="text-4xl font-bold text-center w-full mb-6 transition-all duration-300 hover:text-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Profile Kelas
      </motion.h1>

      {Object.entries(classes).map(([className, students]) => (
        <ClassCard key={className} className={className} students={students} />
      ))}
    </div>
  );
}
