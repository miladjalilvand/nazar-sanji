"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [openBox, setOpenBox] = useState(false);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: openBox ? "-100%" : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={` flex flex-col h-screen justify-around   
      p-6 `}
    >
      {/* تصویر پس‌زمینه */}


      {/* عنوان */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        فرم نظرسنجی
      </motion.div>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        فروشگاه قهرمان
      </motion.div>

      {/* دکمه */}
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.1,
        }}
        className="text-center"
      >
        <Button
          onClick={() => setOpenBox(true)}
          fullWidth={true}
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg
          font-semibold px-2 text-xl"
        >
          بزن بریم
        </Button>
      </motion.div>
    </motion.div>
  );
}
