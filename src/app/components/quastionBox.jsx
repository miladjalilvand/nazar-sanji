"use client" 
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Progress } from "@nextui-org/react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
const questionsData = [
  
    {
      id: 0,
      question: "نظرتان درباره خدمات ما چیست؟",
      type: "تشریحی",
      options: null,
    },
    {
      id: 1,
      question: "کدام ویژگی از محصول ما را بیشتر می‌پسندید؟",
      type: "چند گزینه‌ای",
      options: ["کیفیت بالا", "قیمت مناسب", "پشتیبانی", "طراحی زیبا"],
    },
    {
      id: 2,
      question: "خدمات ما را از 1 تا 5 امتیاز دهید.",
      type: "امتیازدهی",
      options: null,
    },
  ];
export default function QuationBoxTemplate() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // وضعیت سوال فعلی

    const [finish,setFinish]=useState(false);

      const [startanimation, setStartAnimation] = useState(false);

const startAnimation = () =>{
    setStartAnimation(true);
    setTimeout (()=>{
       setFinish(true)
    },1000); }

  // هندلر دکمه "بعدی"
  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // هندلر دکمه "قبلی"
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questionsData[currentQuestionIndex];
  return (
  finish ? (<div>finish</div>):(  <motion.div
    
    initial={{ y: 0 }}
    animate={{ y: startanimation ? "-100%" : 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="relative flex flex-col items-center h-screen justify-center  opacity-80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-2/3 flex-col bg-white rounded-lg shadow-lg 
        flex items-center justify-between p-6"
      >
        <div className="flex flex-col">
          <span > {currentQuestionIndex}</span>
        </div>
        <div className="flex flex-row w-full items-center justify-between bottom-2">
{currentQuestionIndex > 0 ?  ( <div className="cursor-pointer" onClick={handlePrevious}>
            <IoArrowForwardCircleOutline color="black"  />
          </div>):(<div> </div>)}
         {currentQuestionIndex < questionsData.length-1 ? ( <div className="cursor-pointer" onClick={handleNext}>
            <IoArrowBackCircleOutline color="black" />
          </div>):(<Button onClick={()=>startAnimation()} >تمام</Button>)}
        </div>
      </motion.div>
    </motion.div>)
  );
}
