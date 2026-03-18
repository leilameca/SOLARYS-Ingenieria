"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionSlide({
  children,
  direction = "left",
}: {
  children: ReactNode;
  direction?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

