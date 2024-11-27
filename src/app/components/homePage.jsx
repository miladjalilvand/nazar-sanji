"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import moment from "jalali-moment";
import QuationBoxTemplate from "./quastionBox";


export default function HomePage() {
  const [openBox, setOpenBox] = useState(false);
  const [startanimation, setStartAnimation] = useState(false);


  function getToday(){
    const today = moment().locale('fa').format('dddd، jD jMMMM jYYYY');
  
    return today;
  }

const startAnimation = () =>{
    setStartAnimation(true);
    setTimeout (()=>{
        setOpenBox(true);
    },1000);
}

  return (
    openBox ? (
        <QuationBoxTemplate/>
  ):(   <motion.div
        initial={{ y: 0 }}
        animate={{ y: startanimation ? "-100%" : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={` flex flex-col h-screen    
         overflow-hidden `}
      >
        {/* تصویر پس‌زمینه */}
  
  
        {/* عنوان */}
        <motion.div
          className="text-center"
          initial={{ y: "-300%" }}
          animate={{y: "0%" }}
          // initial={{ opacity: 0, scale: 0 }}
          // animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5}}
        >
          <div className=" px-3 py-1 text-gray-600 rounded-b-full bg-slate-200 w-full text-lg
          
          shadow-md shadow-black 2xl:text-7xl ">
            فرم نظرسنجی</div>
        </motion.div>

        <motion.div
          className="flex text-2xl font-semibold text-gray-500
           bg-white bg-opacity-10 rounded-large px-3 *:py-2  2xl:text-7xl mt-3 py-1 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          فروشگاه قهرمان
        </motion.div>
        <div className="p-3 2xl:text-5xl self-end">{getToday()}</div>
        

      <div className="flex flex-col pt-12 h-full justify-around md:justify-between m-6">

<div className="flex"></div>

      {/* <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 0.2 }}
       transition={{ duration: 1.5, delay: 0.8 }}
      className="self-center"
      >

      <Image
          src={"/assets/check.png"}
          alt="bg"
          width={250}
          height={250}
          // style={{ objectFit: "cover" }} // تنظیم تصویر برای پر کردن کامل صفحه
        />
      </motion.div> */}
        <motion.div>
  
  <motion.div   
   initial={{ y: "480%" }}
            animate={{y: "0%" }}
            transition={{ duration: 0.5, delay:1 }}>  <motion.div
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
              onClick={() => startAnimation()}
              fullWidth={true}
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg
              font-semibold px-2 text-xl  2xl:text-5xl py-2 2xl:p-9 p-3"
            >
              بزن بریم
            </Button>
          </motion.div></motion.div>
    </motion.div>
      </div>
  
        {/* دکمه */}

  
  
  
      </motion.div>)
 
  );
}
