"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../navbar";

export default function CommonLayout() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <Head>
        <title>My Netflix</title>
      </Head>
      <Navbar />
    </motion.div>
  );
}
