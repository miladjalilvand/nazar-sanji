"use client";
import { Switch } from "@nextui-org/react";
import HomePage from "./components/homePage";
import HomeCom from "./page-bc";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* پس‌زمینه ثابت */}
      <motion.div
        className="  " // تصویر در لایه‌ی زیرین قرار گیرد
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"/assets/66.gif"}
          alt="bg"
          fill
          style={{ objectFit: "cover" }} // تنظیم تصویر برای پر کردن کامل صفحه
        />
      </motion.div>

      {/* محتوای صفحه */}
      <HomePage />
      {/* <HomeCom/> */}
    </div>
  );
}
