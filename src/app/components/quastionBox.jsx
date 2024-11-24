"use client" 
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// داده‌های سوالات
const questionsData = [
  {
    id: 0,
    question: "نظرتان درباره خدمات ما چیست؟",
    type: "t1", // نوع سوال
    options: null, // گزینه‌ها
  },
  {
    id: 1,
    question: "کدام ویژگی از محصول ما را بیشتر می‌پسندید؟",
    type: "t3", // سوال چندگزینه‌ای
    options: ["کیفیت بالا", "قیمت مناسب", "پشتیبانی", "طراحی زیبا"], // گزینه‌ها
  },
  {
    id: 2,
    question: "خدمات ما را از 1 تا 5 امتیاز دهید.",
    type: "t2", // سوال امتیازی
    options: null,
  },
  {
    id: 3,
    question: "آیا خدمات ما را به دیگران پیشنهاد می‌کنید؟",
    type: "t3", // سوال چندگزینه‌ای
    options: ["بله", "خیر", "شاید"], // گزینه‌ها
  },
  {
    id: 4,
    question: "چقدر با سرعت پاسخگویی ما راضی بودید؟",
    type: "t2", // سوال امتیازی
    options: null,
  },
  {
    id: 5,
    question: "آیا به نظرتان قیمت محصولات ما مناسب است؟",
    type: "t3", // سوال چندگزینه‌ای
    options: ["بله", "خیر", "نه خیلی"], // گزینه‌ها
  },
  {
    id: 6,
    question: "چه ویژگی‌ای به نظر شما می‌تواند بهبود یابد؟",
    type: "t1", // سوال نوع 1
    options: null, // گزینه‌ها
  },
  {
    id: 7,
    question: "آیا قصد دارید دوباره از خدمات ما استفاده کنید؟",
    type: "t3", // سوال چندگزینه‌ای
    options: ["بله", "خیر", "شاید"], // گزینه‌ها
  },
  {
    id: 8,
    question: "چه عواملی شما را به خرید از ما ترغیب کرد؟",
    type: "t1", // سوال نوع 1
    options: null, // گزینه‌ها
  },
];


// کامپوننت اصلی
export default function QuationBoxTemplate() {
  const [rating, setRating] = useState(0) // Initial value


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // وضعیت سوال فعلی
  const [finish, setFinish] = useState(false); // اتمام فرم
  const [startanimation, setStartAnimation] = useState(false); // شروع انیمیشن
// شروع انیمیشن

  // تابع تعیین نوع سوال
  const typeQuastionSwitch = () => {
    switch (questionsData[currentQuestionIndex].type) {
      case "t1": // سوال نوع 1
        return <Type1 quastion={questionsData[currentQuestionIndex].question} />;
      case "t2": // سوال نوع 2
        return <Type2 quastion={questionsData[currentQuestionIndex].question}
        rating={rating}
          setRating={setRating}
        />;
      case "t3": // سوال نوع 3
        return (
          <Type3
            options={questionsData[currentQuestionIndex].options}
            quastion={questionsData[currentQuestionIndex].question}
          />
        );
      default:
        return <div>هیچ سوالی موجود نیست</div>;
    }
  };

  // انیمیشن اتمام فرم
  const startAnimation = () => {
    setStartAnimation(true);
    setTimeout(() => {
      setFinish(true);
    }, 1000);
  };

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

  // نمایش سوال فعلی
  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    finish ? ( // نمایش پیام اتمام
      <div className="h-screen flex items-center justify-center bg-lime-400">
        مرسی که شرکت کردی
      </div>
    ) : ( // نمایش سوالات
      <motion.div
     
        initial={{ y: 0 }}
        animate={{ y: startanimation ? "-100%" : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className=" flex flex-col items-center h-screen justify-center opacity-80
       
        "
      >
        <motion.div
         key={currentQuestionIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" md:w-2/3 flex-col bg-yellow-500 rounded-lg shadow-lg flex 
           justify-between p-6 overflow-auto"
        >
          <div className="flex flex-col overflow-auto">
            <span>{currentQuestionIndex+1}/{questionsData.length}</span>
            {typeQuastionSwitch()}
          </div>
          <div className="flex flex-row w-full justify-between
             bottom-2 pt-2">
            {currentQuestionIndex > 0 ? ( // دکمه قبلی
              <div className="cursor-pointer bg-slate-500 hover:bg-slate-600 rounded-full p-2" onClick={handlePrevious}>
                <IoArrowForwardCircleOutline color="yellow" />
              </div>
            ) : (
              <div></div>
            )}
            {currentQuestionIndex < questionsData.length - 1 ? ( // دکمه بعدی
              <div className="cursor-pointer bg-slate-500 hover:bg-slate-600 rounded-full p-2 " onClick={handleNext}>
                <IoArrowBackCircleOutline color="yellow" />
              </div>
            ) : (
              <Button className="animate-pulse h-fit " onClick={() => startAnimation()}>ارسال </Button>
            )}
          </div>
        </motion.div>
      </motion.div>
    )
  );
}

// کامپوننت سوال نوع 1
const Type1 = ({ quastion }) => (
  <div className="flex flex-col">
    <div className="text-black pb-2">{quastion}</div>
    <textarea
      className="w-full p-2 rounded-lg border-2 border-gray-300
       resize-none  "
      rows={5}
      placeholder={"type . . ."}
    ></textarea>
  </div>
);

// کامپوننت سوال نوع 3 (چند گزینه‌ای)
const Type3 = ({ quastion, options }) => (
  <div className="flex flex-col overflow-auto text-black">
    <div className=" pb-2">{quastion}</div>
    <div>
      {options.map((option, index) => (
        <label key={index} className="flex flex-row px-1 text-lg">
          <input
            type="radio"
            name={`index`}
            className="mr-2 m-1 "
            value={option}

          />
          <div className=" text-black pr-1 pb-2">{option}</div>
        </label>
      ))}
    </div>
  </div>
);

// کامپوننت سوال نوع 2 (امتیازی)
// کامپوننت سوال نوع 2 (امتیازی)
const Type2 = ({ quastion, rating, setRating }) => (
  <div className="flex flex-col py-3 text-black overflow-hidden">
    {rating}
    <div className="pb-2">{quastion}</div>
    <div className="flex gap-2">
      <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
    </div>
  </div>
);
