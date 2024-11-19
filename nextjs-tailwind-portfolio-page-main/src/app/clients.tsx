"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

// Variants for parent container (staggered animations)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger each child animation by 0.2s
    },
  },
};

// Variants for each logo
const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function Clients() {
  return (
    <motion.section
      className="px-8 py-28"
      initial="hidden"
      whileInView="show" // Animate when in view
      viewport={{ once: false, amount: 0.2 }} // Trigger animation 20% into the viewport
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          My Awesome Clients
        </Typography>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          variants={containerVariants}
        >
          {CLIENTS.map((logo, key) => (
            <motion.div
              key={key}
              className="w-28 sm:w-32 lg:w-40"
              variants={logoVariants}
              whileInView="show" // Re-animate each logo when in view
              viewport={{ once: false, amount: 0.2 }} // Trigger animation for each logo
            >
              <Image
                alt={`${logo} logo`}
                width={160}
                height={160}
                src={`/logos/logo-${logo}.svg`}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Clients;